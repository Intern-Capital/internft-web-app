import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import {
  Coins,
  Coin,
  CreateTxOptions,
  Fee,
  WasmMsg,
} from '@terra-money/terra.js';
import {
  useWallet,
  UserDenied,
  CreateTxFailed,
  TxFailed,
  TxUnspecifiedError,
  Timeout,
} from '@terra-money/wallet-provider';
import { useMutation, useQuery } from 'react-query';

import { useTerraWebapp } from '../context';
import useConnectedAddress from './useConnectedAddress';
import useDebounceValue from './useDebounceValue';
import { ONE_TOKEN } from '../constants';
import { toNumber } from '../utils/number';

type Denom = string;
type Amount = string;
type GasPrices = Record<Denom, Amount>;

export enum TxStep {
  /**
   * Idle
   */
  Idle = 0,
  /**
   * Estimating fees
   */
  Estimating = 1,
  /**
   * Ready to post transaction
   */
  Ready = 2,
  /**
   * Signing transaction in Terra Station
   */
  Posting = 3,
  /**
   * Broadcasting
   */
  Broadcasting = 4,
  /**
   * Succesful
   */
  Success = 5,
  /**
   * Failed
   */
  Failed = 6,
}

type Params = {
  msgs: WasmMsg[] | null;
  contractAddress?: string;
  onSuccess?: (txHash: string) => void;
  onError?: (txHash?: string) => void;
  denom?: string;
};

export const useTransaction = ({
  msgs,
  contractAddress,
  onSuccess,
  onError,
  denom = 'uusd',
}: Params) => {
  const { client, network } = useTerraWebapp();
  const { post } = useWallet();
  const terraAddress = useConnectedAddress();
  const address = contractAddress ?? terraAddress;
  const debouncedMsgs = useDebounceValue(msgs, 200);

  const [txStep, setTxStep] = useState<TxStep>(TxStep.Idle);
  const [txHash, setTxHash] = useState<string | undefined>(undefined);
  const [error, setError] = useState<unknown | null>(null);

  const { data: fee } = useQuery<unknown, unknown, Fee | null>(
    ['fee', debouncedMsgs, error],
    async () => {
      if (debouncedMsgs == null || txStep != TxStep.Idle || error != null) {
        throw new Error('Error in estimaging fee');
      }

      setError(null);
      setTxStep(TxStep.Estimating);

      const fee = await axios.get<GasPrices>('/v1/txs/gas_prices', {
        baseURL: network.lcd.replace('lcd', 'fcd'),
      });
      const amount: any = 10 * ONE_TOKEN * toNumber(fee.data['uusd']);
      return new Fee(amount, { uusd: amount });

      /**
      return client.tx.estimateFee(address, debouncedMsgs, {
        gasPrices: new Coins([new Coin('uusd', 0.15)]),
        gasAdjustment: 1.2,
        feeDenoms: ['uusd'],
      });
       */
    },
    {
      enabled: debouncedMsgs != null && txStep == TxStep.Idle && error == null,
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: () => {
        setTxStep(TxStep.Ready);
      },
      onError: (e) => {
        console.log('e', e);
        // @ts-expect-error - don't know anything about error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (e?.response?.data?.error) {
          // @ts-expect-error - don't know anything about error
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          setError(e.response.data.error);
        } else {
          setError('Something went wrong');
        }

        setTxStep(TxStep.Idle);
      },
    }
  );

  const { mutate } = useMutation(
    (data: CreateTxOptions) => {
      return post(data);
    },
    {
      onMutate: () => {
        setTxStep(TxStep.Posting);
      },
      onError: (e: unknown) => {
        if (e instanceof UserDenied) {
          setError('User Denied');
        } else if (e instanceof CreateTxFailed) {
          setError(`Create Tx Failed: ${e.message}`);
        } else if (e instanceof TxFailed) {
          setError(`Tx Failed: ${e.message}`);
        } else if (e instanceof Timeout) {
          setError('Timeout');
        } else if (e instanceof TxUnspecifiedError) {
          setError(`Unspecified Error: ${e.message}`);
        } else {
          setError(
            `Unknown Error: ${e instanceof Error ? e.message : String(e)}`
          );
        }

        setTxStep(TxStep.Failed);

        onError?.();
      },
      onSuccess: (data) => {
        setTxStep(TxStep.Broadcasting);
        setTxHash(data.result.txhash);
      },
    }
  );

  const { data: txInfo } = useQuery(
    ['txInfo', txHash],
    () => {
      if (txHash == null) {
        return;
      }

      return client.tx.txInfo(txHash);
    },
    {
      enabled: txHash != null,
      retry: true,
    }
  );

  const reset = () => {
    setError(null);
    setTxHash(undefined);
    setTxStep(TxStep.Idle);
  };

  const submit = useCallback(async () => {
    if (fee == null || msgs == null || msgs.length < 1) {
      return;
    }

    mutate({
      msgs,
      fee,
    });
  }, [msgs, fee, mutate]);

  useEffect(() => {
    if (txInfo != null && txHash != null) {
      if (txInfo.code) {
        setTxStep(TxStep.Failed);
        onError?.(txHash);
      } else {
        setTxStep(TxStep.Success);
        onSuccess?.(txHash);
      }
    }
  }, [txInfo, onError, onSuccess, txHash]);

  useEffect(() => {
    if (error) {
      setError(null);
    }

    if (
      txStep != TxStep.Idle &&
      txStep != TxStep.Success &&
      txStep != TxStep.Failed &&
      txHash == null
    ) {
      setTxStep(TxStep.Idle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedMsgs]);

  return {
    fee,
    submit,
    txStep,
    txInfo,
    txHash,
    error,
    reset,
  };
};

export default useTransaction;

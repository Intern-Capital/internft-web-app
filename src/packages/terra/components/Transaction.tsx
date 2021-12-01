import {
  Fragment,
  useState,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import { WasmMsg } from '@terra-money/terra.js';
import useTransaction, { TxStep } from '../hooks/useTransaction';
import { useTerraWebapp } from '../context';
import { Icon } from '@/components/Icon';

type Props = {
  msgs: WasmMsg[] | null;
  label?: string;
  autoOpen?: boolean /** Doesn't require cta to open Terra Station to approve transaction */;
  contractAddress?: string;
  onSuccess?: (txHash: string) => void;
  onError?: (txHash?: string) => void;
  children?: ReactNode;
};

const Transaction: FunctionComponent<Props> = ({
  msgs,
  label,
  autoOpen,
  contractAddress,
  onSuccess,
  onError,
  children,
}) => {
  const { network } = useTerraWebapp();
  const { fee, submit, txStep, txInfo, txHash, error, reset } = useTransaction({
    msgs,
    contractAddress,
    onSuccess,
    onError,
  });

  useEffect(() => {
    if (txStep === TxStep.Ready && autoOpen) {
      submit();
    }
  }, [txStep, autoOpen, submit]);

  return (
    <>
      {children}
      {txStep === TxStep.Ready && !autoOpen && (
        <button
          type="button"
          onClick={submit}
          className="my-8 inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 sm:text-sm"
        >
          <Icon
            type="cog"
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
          />
          {label}
        </button>
      )}
      {txStep === TxStep.Success && (
        <div>
          <a
            href={`https://finder.terra.money/${network.chainID}/tx/${txInfo.txhash}`}
            target="_blank"
            rel="noreferrer"
          >
            {txInfo.txhash}
          </a>
        </div>
      )}
    </>
  );
};

export default Transaction;

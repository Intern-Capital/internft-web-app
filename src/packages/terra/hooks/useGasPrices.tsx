import axios from 'axios';
import { useQuery } from 'react-query';

import { useTerraWebapp } from '../context';

import { useWallet } from '@terra-money/wallet-provider';
import { LCDClient } from '@terra-money/terra.js';

//import useLCDClient from './useLCDClient';

export const terra = new LCDClient({
  URL: 'https://bombay-lcd.terra.dev',
  chainID: 'bombay-12',
});

type Denom = string;
type Amount = string;
type GasPrices = Record<Denom, Amount>;

const useGasPrices = () => {
  const { network } = useTerraWebapp();

  return useQuery('gasPrices', async () => {
    const { data } = await axios.get<GasPrices>('/v1/txs/gas_prices', {
      baseURL: network.lcd.replace('lcd', 'fcd'),
    });

    return data;
  });
};

export const useGasPrice = (denom: Denom) => {
  const { data: gasPrices } = useGasPrices();
  return gasPrices ? gasPrices[denom] + denom : undefined;
};

export const estimateFee = async (
  walletAddress,
  msgs,
  gasPrices = { uusd: 0.456 },
  /* Replacing static declared value for live rate being declared by hook useGasPrice()
  gasPrices = useGasPrice("uusd"),
  */
  feeDenoms = ['uusd'] // eventually replace with app wide selected denomination value
) => {
  const estimatedFee = await terra.tx
    .estimateFee(
      walletAddress,
      { msgs, gasPrices, feeDenoms } //use UST as gas by default
    )
    .catch((error) => {
      throw `Estimate Fee Error: ${
        error instanceof Error ? error.message : String(error)
      }`;
    });
  return estimatedFee;
};

export default useGasPrice;

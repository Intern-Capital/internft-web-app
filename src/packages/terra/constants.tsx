export const MAINNET = {
  name: 'mainnet',
  chainID: 'columbus-5',
  lcd: 'https://lcd.terra.dev',
};

export const TESTNET = {
  name: 'testnet',
  chainID: 'bombay-12',
  lcd: 'https://bombay-lcd.terra.dev',
};

export const DEFAULT_NETWORK = TESTNET;

export const TERRA_FINDER = 'https://finder.terra.money';

export const TERRA_TOKENS: Record<string, string> = {
  uusd: 'UST',
};

export const DENOM_UNIT = 10 ** 6;

export const ULUNA_GAS_PRICE = 0.16;

export const GAS_ADJUSTMENT = 1.4;

export const ONE_TOKEN = 1000000;

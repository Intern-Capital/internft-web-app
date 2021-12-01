import type { AppProps } from 'next/app';
import { FunctionComponent, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { TerraWebappProvider } from '@/packages/terra/context';
import {
  StaticWalletProvider,
  WalletProvider,
} from '@terra-money/wallet-provider';

import { DEFAULT_NETWORK, TESTNET } from '@/packages/terra/constants';

import 'tailwindcss/tailwind.css';


// app

function App({ Component, pageProps }: AppProps): React.ReactElement {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
      <QueryClientProvider client={queryClient}>
        <WalletProviders>
          <TerraWebappProvider>
            <Component {...pageProps} />
          </TerraWebappProvider>
        </WalletProviders>
      </QueryClientProvider>
  );
}
export default App;

// wallet

type Props = {
  children?: ReactNode;
};

const WalletProviders: FunctionComponent<Props> = ({ children }) => {
  return process.browser ? (
    <WalletProvider
      defaultNetwork={DEFAULT_NETWORK}
      walletConnectChainIds={{
        0: TESTNET,
        /** 1: MAINNET, **/
      }}
    >
      {children}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={DEFAULT_NETWORK}>
      {children}
    </StaticWalletProvider>
  );
};

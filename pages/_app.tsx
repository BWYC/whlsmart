import type { AppProps } from "next/app";
import { ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Header from "../components/header"
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import styled, { createGlobalStyle } from "styled-components";
 
const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
 
const config = createConfig({
  publicClient,
  webSocketPublicClient,
})


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig  config={config}>
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={NETWORK}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
      ]}
    >
       <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}

      {/* Render the actual component (page) */}
      <Header />
     
      <Component {...pageProps} />
      
      </NextThemesProvider>
      </NextUIProvider>
    </ThirdwebProvider>
    </WagmiConfig>
  );
}

export default MyApp;

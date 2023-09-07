import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThirdwebProvider
      clientId="65a85b91315ca838d7a8472fb0e64f92"
      activeChain={NETWORK}
    >

      <NextNProgress
        color="orange"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />


      <Navbar />

      
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

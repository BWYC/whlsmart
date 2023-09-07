import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";

const sdk = new ThirdwebSDK(CoreBlockchain, {
  clientId: "65a85b91315ca838d7a8472fb0e64f92",
})



export default function MyApp({
  Component: Component,
  pageProps: { ...pageProps },
  NextNProgress: NextNProgress
}) {
  return(
    <>
    <ThirdwebProvider
      activeChain={NETWORK}
    >

      <NextNProgress
        color="orange"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />

      
      <Component {...pageProps} />
    </ThirdwebProvider>
    </>
  );
}



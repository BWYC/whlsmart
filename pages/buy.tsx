import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import ProfilePage  from "../pages/profile/[address]"
import styles from "../styles/Profile.module.css";


export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth="lg">
   <div
          className={styles.coverImage}
          style={{
            backgroundImage: "url('https://bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu.ipfs.nftstorage.link/ipfs/bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu/whales.png')",
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            backgroundImage: "url('https://bafybeifugm2das3zddsxkgz2h6xuztdmvsqsv4bisvplnmqu57ehwponcy.ipfs.nftstorage.link/favicon.png')",
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
          }}
        />
      <h1 style={{fontFamily: "monospace"}}>Buy and Sell Whalecards🎴</h1>
      <p style={{fontFamily: "monospace"}}>Mint or Unstake WhaleCards To Trade</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}

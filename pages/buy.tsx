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
      <h1 style={{fontFamily: "monospace"}}>Volume: 0 CORE</h1>
      <h2 style={{fontFamily: "monospace"}}>FLOOR: 0.7 CORE</h2>
      <p style={{fontFamily: "monospace"}}>Mint or Unstake WhaleCards To Trade</p>
      <hr></hr>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like There are no Cards here."
        }
      />
    </Container>
  );
}

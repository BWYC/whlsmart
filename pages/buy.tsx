import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import ProfilePage from "../pages/profile/[address]";
import styles from "../styles/Profile.module.css";
import { Link } from "web3uikit";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 1,
    count: 400,
  });

  if (isLoading) {
    return (
      <div
        style={{
          marginTop: "20%",
          width: "100%",
          marginLeft: "10%",
          marginBottom: "10%",
        }}
      >
        THE OCEAN🌊 LOADING.....
      </div>
    );
  }

  return (
    <Container maxWidth="lg">
      <div
        className={styles.coverImage}
        style={{
          backgroundImage:
            "url('https://bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu.ipfs.nftstorage.link/ipfs/bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu/whales.png')",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
        }}
      />
      <div
        className={styles.profilePicture}
        style={{
          backgroundImage:
            "url('https://bafybeifugm2das3zddsxkgz2h6xuztdmvsqsv4bisvplnmqu57ehwponcy.ipfs.nftstorage.link/favicon.png')",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <p style={{ fontFamily: "monospace", fontSize: "18px" }}>
        16 Locations across whaleverse, The pyramids, the Hot Burning Lava from
        the past, Blazing sands of Egypt and The Mutant City. Travel accros this
        mysterious locations and cross-chains to worlds unkown
      </p>

      <hr></hr>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={"Looks like There are no Cards here."}
      />
      <div style={{ height: "50px" }}></div>
      <div>
        <Link
          href="/next"
          style={{
            fontFamily: "monospace",
            fontSize: "20px",
            marginTop: "-10%",
            background: "black",
            color: "white",
          }}
        >
          NEXT PAGE
        </Link>
      </div>
      <hr></hr>
      <div style={{ height: "50px" }}></div>
    </Container>
  );
}

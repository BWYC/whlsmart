import type { NextPage } from "next";
import Buy from "./buy.jsx";
import Head from "next/head";
import Header from "../components/header.js";
import HeroSection from "../components/heroSection.js";
import AirdropPopUp from "../components/airdropPopUp.js";
import TrendingSection from "../components/trendingSection.js";
import Container from "../components/Container/Container.tsx";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Checkmark } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";

import BAYC from "../public/rare.png";
import ChecksVVOriginals from "../public/assets/checksVVOriginals.png";
import RR from "../public/rare.png";
import RR1 from "../public/whale.png";
import RR2 from "../public/whales.png";
import RR3 from "../public/wsrd.png";
import core from "../public/whls.png";
import PudgyPenguins from "../public/assets/pudgyPenguins.png";
import Moonbirds from "../public/assets/moonbirds.png";

import BAYCProfile from "../public/assets/bayc_profile.webp";
import ChecksVVOriginalsProfile from "../public/assets/checksbboriginals_profile.webp";
import AzukiProfile from "../public/assets/azuki_profile.webp";
import PudgyPenguinsProfile from "../public/assets/pudgypenguins_profile.webp";
import MoonbirdsProfile from "../public/assets/moonbirds_profile.webp";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 *
 */
const light = { background: "white" };
const dark = { background: "black" };

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    transition: background 0.4s;
  }
`;

const Home: NextPage = () => {
  const [oneDayTradingVolume, setOneDayTradingVolume] = useState("");

  useEffect(() => {
    const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    const getNftData = async () => {
      const response = await axios.get("http://localhost:5001/getnftdata", {
        params: {
          contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        },
      });

      let tradingVolume = 0;

      response.data.result.map((sale) => {
        if (sale.block_timestamp > yesterday.toISOString()) {
          return (tradingVolume += sale.price / 10 ** 18);
        }
      });
      setOneDayTradingVolume(tradingVolume);
    };

    getNftData();
  });


  return (
    <>
     <section className={styles.container}>
      <Head>
        <title>RareBay | NFT DEX</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section>
   <HeroSection />
  
              
      
        
        <Container maxWidth="xl">  
        <AirdropPopUp />
         <TrendingSection /></Container>
     
      </section>
      
    </section>
    </>
  );
};

export default Home;

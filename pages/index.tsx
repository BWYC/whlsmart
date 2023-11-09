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
import Image from "next/image";
import Link from "next/link";
import { Arrow, Checkmark } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";





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

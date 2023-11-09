import { useEffect, useState, React } from "react";
import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { Search, User, Lightbulb } from "@web3uikit/icons";
import { Blockie } from "web3uikit";
import styles from "../styles/Home.module.css";
import { useAddress } from "@thirdweb-dev/react";
import {useTheme} from "next-themes";
import Logo from "../public/favicon.ico";
import { ConnectWallet } from "@thirdweb-dev/react"
import { Button } from "web3uikit";
import ReactThemeToggleButton from "./toggle"
import HeroSection from "./heroSection";
import AirdropPopUp from "./airdropPopUp";
import Link from "next/link";
import { Arrow, Checkmark } from "@web3uikit/icons";
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
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";



const light = { background: "white" };
const dark = { background: "black" };

const GlobalStyle = createGlobalStyle`
  body{
    background: linear-gradient(
      0deg,
      rgb(0, 0, 0, 0.2),
      rgba(0, 50, 150, 0.206)
    );
    transition: background 0.4s;
  }
`;


export default function Header() {
  const [oneDayTradingVolume, setOneDayTradingVolume] = useState("");


  const address = useAddress()
  const { connect, connectors } = useConnect();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  useEffect(() => {
    if (!address) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [address]);



const { themes, setTheme } = useTheme()
const [ isDark, setDark ] = useState(false)

const theme = isDark ? dark : light;
const themez = isDark ? setTheme("dark") : setTheme("light");



  return (
    <>
      <ThemeProvider theme={theme}>
  
    <section className={styles.header} id="header">
      <section className={styles.logo}>
        <Link href="/">
        <Image src={Logo} alt="Logo" width="80" height=""  />
        </Link>
       <Link href="/"> <h3 style={{color: "white", textShadow: "initial 0px 2px 2px, lightblue 0px 2px 0px, black 1px 4px 0px"}}>RAREBAY.XYZ</h3></Link><div style={{borderRight: "solid", borderRightWidth: "0.5px", width: "25px", height: "25px", color: ""}}></div>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <p>DEX</p>
          <Link href={`/profile/${address}`} className={styles.link}>
            <p>PORTFOLIO</p>
          </Link>
          <p>POOLS</p>
        </section>
        <section className={styles.searchSection}>
          <section>
            <span>
              <Search fontSize="25px" />
            </span>
            <input
              placeholder="Search Items & owners"
              disabled=""
              className={styles.inputField}
            />
          </section>
        </section>
        
        <ReactThemeToggleButton
        isDark={isDark}
        invertedIconLogic
        onChange={() => setDark((prev) => !prev)}
        />


        {isLoggedIn ? (
          <section>
            {connectors.map((connector) => (
 <ConnectWallet

 style={{border: "solid", borderColor: "initial", borderWidth: "0.5px"}}
 modalSize={"compact"}
 theme={({
   colors: {
     modalBg: " rgba(0, 0, 50, 0.638)",
     dropdownBg: "#000000",
     accentText: "#0064fa",
     accentButtonBg: "#0064fa",
     borderColor: "initial",
     primaryText: "white"
   },
 })}
 btnTitle={"CONNECT"}
 modalTitle={"RAREBAY"}
 switchToActiveChain={true}
 welcomeScreen={{
   title: "WELCOME TO THE HOME OF RARE",
   img: {
     src: "https://bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a.ipfs.nftstorage.link/ipfs/bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a/xcxczxz.png",
     width: 150,
     height: 150,
   },
   subtitle:
     "Connect wallet to get started.",
 }}
 modalTitleIconUrl={
   "https://bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a.ipfs.nftstorage.link/ipfs/bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a/xcxczxz.png"
 }
/>
            ))}
          </section>
        ) : (
          <section className={styles.loggedIn_section}>
   <ConnectWallet 
   theme={({
    colors: {
      modalBg: " rgba(0, 0, 0, 1.638)",
      dropdownBg: "#000000",
      accentText: "#0064fa",
      accentButtonBg: "#0064fa",
      borderColor: "initial",
      primaryText: "white"
    },
  })}
   style={{border: "solid", color: "initial", textShadow: "currentColor 5px 5px 16px", borderWidth: "0.5px"}} /><div style={{width: "45px", height: "45px", padding: "3.8px", border: "solid", marginTop: "5px", borderRadius: "100%", marginLeft: "5px", color: "initial" }}><Blockie seed={address} /></div>
          </section>
        )}
      </section>
    </section>
    <GlobalStyle />
    </ThemeProvider>
    </>
  );
}
/**
 * 
 * window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.borderBottom = "solid 1px lightgrey";
  } else {
    document.getElementById("header").style.borderBottom = "none";
  }
}
 */


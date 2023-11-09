import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Checkmark } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";

import BAYC from "../public/rare.png";
import ChecksVVOriginals from "../public/assets/checksVVOriginals.png";
import RR from "../public/rare.png";
import RR1 from "../public/whale.png";
import RR2 from "../public/whales.png";
import RR3 from "../public/4.png";


import R from "../public/1.png";
import B from "../public/2.png";
import C from "../public/3.png";
import D from "../public/whls.png";



export default function HeroSection() {
  const [oneDayTradingVolume, setOneDayTradingVolume] = useState("");



  return (
    <section className={styles.main}>
      <Image src="/mb.png" alt="hero" width={1900} height={700} style={{filter: "opacity(0.2)", filter: "blur(10px)", marginTop: "5%"}} />
    <section className={styles.heroSection}>
      <h2 style={{color: "initial"}}>Rar310nes<Checkmark style={{background: "green", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial"}} /></h2>
      <p>BY RareLabs</p>
      <section className={styles.bayc_data}>
        <section>
          <p className={styles.bayc_data__title}>FLOOR</p>
          <p>
            500.0 WHLS
          </p>
  

        </section>
        {" "}
        <section>
          <p className={styles.bayc_data__title}>1D VOLUME</p>
          <p className={styles.collection_oneDayTradingVolume}>
            {Number(oneDayTradingVolume).toFixed(2)} WHLS
       
          </p>
        </section>
        <button className={styles.viewCollection_btn}>
        MINT
          <Arrow fontSize="20px" className={styles.arrow} />
        </button>
      </section>
      <section className={styles.carousel}>
      
        <Link href="/collection">
          <section className={styles.carousel_section}>
         
            <Image
              src={RR}
              alt="whale"
              width=""
              height=""
              className={styles.carousel_img}

            />
             <Image
              src={R}
              alt=""
              width=""
              height=""
              className={styles.carousel_profile}
            />
            
          </section>
          <p style={{fontSize: "20px", color: "initial", textShadow: "black 1px 1px 5px, white 1px 1px 5px", margin: "10px", textAlign: "center"}}>Rar310nes<Checkmark style={{background: "green", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial"}} /></p>
        </Link>
        <Link href="/collection">
          <section className={styles.carousel_section}>
            <Image
              src={RR1}
              alt="rr"
              width=""
              height=""
              className={styles.carousel_img}
            />
            <Image
              src={C}
              alt="b"
              width=""
              height=""
              className={styles.carousel_profile}
            />
         
          </section>
          <p style={{fontSize: "20px", color: "initial", textShadow: "black 1px 1px 5px, white 1px 1px 5px", margin: "10px", textAlign: "center"}}>BWYC(II)<Checkmark style={{background: "green", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial"}} /></p>
        </Link>
        <Link href="/collection">
          <section className={styles.carousel_section}>
            <Image
              src={RR2}
              alt="rr"
              width=""
              height=""
              className={styles.carousel_img}
            />
            <Image
              src={B}
              alt="c"
              width=""
              height=""
              className={styles.carousel_profile}
            />

          </section>
          <p style={{fontSize: "20px", color: "initial", textShadow: "black 1px 1px 5px, white 1px 1px 5px", margin: "10px", textAlign: "center"}}>BWYC(I)<Checkmark style={{background: "green", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial"}} /></p>
        </Link>
        <Link href="/collection">
          <section className={styles.carousel_section}>
        
            <Image
              src={RR3}
              alt="rr"
              width=""
              height=""
              className={styles.carousel_img}
              style={{border: "solid"}}
            />
            <Image
              src={D}
              alt=""
              width=""
              height=""
              className={styles.carousel_profile}
            />
         
          </section>
          <p style={{fontSize: "20px", color: "initial", textShadow: "black 1px 1px 5px, white 1px 1px 5px", margin: "10px", textAlign: "center"}}>Whalecards<Checkmark style={{background: "green", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial"}} /></p>
        </Link>
      </section>
  
    </section>
    </section>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Eth } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";

import BAYC from "../public/rare.png";
import ChecksVVOriginals from "../public/assets/checksVVOriginals.png";
import RR from "../public/rare.png";
import RR1 from "../public/whale.png";
import core from "../public/whls.png";
import PudgyPenguins from "../public/assets/pudgyPenguins.png";
import Moonbirds from "../public/assets/moonbirds.png";

import BAYCProfile from "../public/assets/bayc_profile.webp";
import ChecksVVOriginalsProfile from "../public/assets/checksbboriginals_profile.webp";
import AzukiProfile from "../public/assets/azuki_profile.webp";
import PudgyPenguinsProfile from "../public/assets/pudgypenguins_profile.webp";
import MoonbirdsProfile from "../public/assets/moonbirds_profile.webp";

export default function HeroSection() {
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
    <section className={styles.heroSection}>
      <h2>Rar310nes</h2>
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
              src={RR1}
              alt="whale"
              width=""
              height=""
              className={styles.carousel_img}
            />
            <Image
              src={AzukiProfile}
              alt="azuki profile"
              width=""
              height=""
              className={styles.carousel_profile}
            />
            <p style={{fontSize: "20px"}}>Rar310nes</p>
          </section>
        </Link>
        <Link href="/collection">
          <section className={styles.carousel_section}>
            <Image
              src={RR}
              alt="rr"
              width=""
              height=""
              className={styles.carousel_img}
            />
            <Image
              src={AzukiProfile}
              alt="azuki profile"
              width=""
              height=""
              className={styles.carousel_profile}
            />
            <p style={{fontSize: "20px"}}>BWYC 2</p>
          </section>
        </Link>
      </section>
    </section>
  );
}
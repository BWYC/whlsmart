import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
          
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero1.png"
              width={600}
              height={300}
              style={{
                marginTop: "5%",
                padding: "5%",
                borderRadius: "8px",
                borderStyle: "solid",
                borderWidth: "2px"
                

              }}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Bored Whales Yacht Club
                </span>
                <br />
                Whalecard Marketplace
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://boredwhalesyachtclub.org"
                  target="_blank"
                >
                  Whalecards are Pass To Whaleverse
                </Link>{" "}
               You can trade them now on Whales NFT Marketplace
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="http://stake.boredwhalesyachtclub.org/mint">
                  Mint WhaleCards
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="/sell"
                  target="_blank"
                >
                  Trade WhaleCards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

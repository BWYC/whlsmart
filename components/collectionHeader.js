import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAccount, useConnect } from "wagmi";
import { Search } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";

import Logo from "../public/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react"

export default function Header() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!isConnected) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isConnected]);

  return (
    <section className={styles.header}>
      <section className={styles.logo}>
        <Link href="/">
        <Image src={Logo} alt="Logo" width="70" height="" style={{border: "solid", borderRadius: "100%", borderWidth: "0.5px"}} />
        </Link>
        <h3 style={{color: "white"}}>RAREBAY.XYZ</h3>
      </section>
      <section className={styles.nav}>
        <section className={styles.nav_items}>
          <p>DEX</p>
          <Link href="/portfolio" className={styles.link}>
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
        {isLoggedIn ? (
          <section>
            {connectors.map((connector) => (
              <ConnectWallet
            
            />
            ))}
          </section>
        ) : (
          <section className={styles.loggedIn_section}>
            {isLoggedIn ? address?.slice(0, 8) : ""}
          </section>
        )}
      </section>
    </section>
  );
}
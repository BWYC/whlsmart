import styles from "../styles/Home.module.css";

import GetNfts from "./getNfts.js";
import Buy from "../pages/buy.tsx"

export default function PortfolioData() {
  return (
    <section className={styles.PortfolioData_section}>
      <section>
        <GetNfts />
        <Buy />
      </section>
    </section>
  );
}
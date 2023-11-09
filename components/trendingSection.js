import Link from "next/link";
import { Eth } from "@web3uikit/icons";
import styles from "../styles/Home.module.css";

export default function TrendingSection() {
  return (
    <section className={styles.trendingSection_container}>
      <section className={styles.trendingSection_header}>
        <h3>LISTINGS</h3>
      </section>
      <table className={styles.trendingTable} style={{border: "solid", color: "initial", padding: "20px", borderRadius: "10px", borderWidth: "1px"}}>
        <thead>
          <tr className={styles.tableHead_row}>
            <th className={styles.firstChild}>COLLECTION</th>
            <th>FLOOR PRICE</th>
            <th>1D CHANGE</th>
            <th>7D CHANGE</th>
            <th>1D VOLUME</th>
            <th>7D VOLUME</th>
            <th>OWNERS</th>
            <th>SUPPLY</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tableBody_row}>
            <td>Rar310nes</td>
            <td>
              0.0⚡
            </td>
            <td className={styles.red}>0%</td>
            <td className={styles.red}>0%</td>
            <td>
            0.0⚡
       
            </td>
            <td>
            0.0⚡
            </td>
            <td>0 (0%)</td>
            <td>0</td>
          </tr>
          <tr className={styles.tableBody_row}>
            <td>BWYC II</td>
            <td>
              0.0⚡
            </td>
            <td className={styles.red}>0%</td>
            <td className={styles.red}>0%</td>
            <td>
            0.0⚡
       
            </td>
            <td>
            0.0⚡
            </td>
            <td>0 (0%)</td>
            <td>0</td>
          </tr>
          <tr className={styles.tableBody_row}>
            <td>BWYC I</td>
            <td>
              0.0⚡
            </td>
            <td className={styles.red}>0%</td>
            <td className={styles.red}>0%</td>
            <td>
            0.0⚡
       
            </td>
            <td>
            0.0⚡
            </td>
            <td>0 (0%)</td>
            <td>0</td>
          </tr>
          <tr className={styles.tableBody_row}>
            <td>WhaleCards</td>
            <td>
              0.0⚡
            </td>
            <td className={styles.red}>0%</td>
            <td className={styles.red}>0%</td>
            <td>
            0.0⚡
       
            </td>
            <td>
            0.0⚡
            </td>
            <td>0 (0%)</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
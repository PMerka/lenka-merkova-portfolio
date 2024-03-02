import React from "react";
import styles from "./WhoAmI.module.css";
import { html, attributes } from "/content/priceList.md";
import fm from "/content/priceList.md";

export default function WhoAmI() {
  return (
    <div className={styles.whoAmI} id="o-mne">
      <h2>Tohle jsem já</h2>
      <div className={styles.content}>
        <div className={styles.first}>
          JSEM LENKA A VĚNUJU SE TVORBĚ WEBOVÝCH TEXTŮ.
          <img className={styles.img} src="images/profilovka_2.png" alt="" />
        </div>
        <div className={styles.second}></div>
      </div>
    </div>
  );
}

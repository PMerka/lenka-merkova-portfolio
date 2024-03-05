import React from "react";
import styles from "./WhoAmI.module.css";
import { html, attributes } from "/content/aboutMe.md";

export default function WhoAmI() {
  return (
    <div className={`${styles.whoAmI} sectionsShared`} id="o-mne">
      <h2>Tohle jsem já</h2>
      <div className={styles.content}>
        <div className={styles.second}>
          <div
            className={styles.mdContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className={styles.first}>
          <img className={styles.img} src="images/profilovka_2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

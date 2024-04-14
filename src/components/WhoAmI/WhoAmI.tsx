import React from "react";
import styles from "./WhoAmI.module.css";
import { html, attributes } from "/content/aboutMe.md";

export default function WhoAmI() {
  const { title } = attributes as { title: string };
  return (
    <div className={`${styles.whoAmI} sectionsShared`} id="o-mne">
      <h2>{title}</h2>
      <div className={styles.content}>
        <div className={styles.second}>
          <div
            className={styles.mdContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className={styles.first}>
          <img className={styles.img} src="upload/profilovka_2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./WhoAmI.module.css";
import aboutMe from "/content/aboutMe.json";
import Button from "../Button/Button";

export default function WhoAmI() {
  return (
    <div className={`${styles.whoAmI} sectionsShared`} id="o-mne">
      <h2>{aboutMe?.title}</h2>
      <div className={styles.content}>
        <div className={styles.first}>
          <img className={styles.img} src="upload/profilovka_2.png" alt="" />
          <div>
            <Button> {aboutMe?.actionButton} </Button>
          </div>
        </div>
        <div className={styles.second}>
          <div
            className={styles.mdContent}
            dangerouslySetInnerHTML={{ __html: aboutMe?.body }}
          />
        </div>
      </div>
    </div>
  );
}

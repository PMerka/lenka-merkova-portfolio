import React from "react";
import styles from "./Footer.module.css";
import { attributes } from "/content/footer.md";

export default function Footer() {
  const { leftText, RightText1st, RightText2nd } = attributes as {
    leftText: string;
    RightText1st: string;
    RightText2nd: string;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div dangerouslySetInnerHTML={{ __html: leftText }} />

        <div className={styles.footerRight}>
          <div dangerouslySetInnerHTML={{ __html: RightText1st }}></div>
          <div dangerouslySetInnerHTML={{ __html: RightText2nd }}></div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import styles from "./Footer.module.css";
import { attributes } from "/content/footer.md";

export default function Footer() {
  const { leftText, centerText, rightText } = attributes as {
    leftText: string;
    centerText: string;
    rightText: string;
  };

  return (
    <footer className={styles.footer}>
      {centerText}
      <div className={styles.footerContent}>
        <div dangerouslySetInnerHTML={{ __html: leftText }}></div>

        <div className={styles.footerRight}>
          <div dangerouslySetInnerHTML={{ __html: centerText }}></div>
          <div dangerouslySetInnerHTML={{ __html: rightText }}></div>
        </div>
      </div>
    </footer>
  );
}

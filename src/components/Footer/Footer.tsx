import React from "react";
import styles from "./Footer.module.css";
import ReactMarkdown from 'react-markdown'
import footerData from "/content/footer.json";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <ReactMarkdown >{footerData.leftText}</ReactMarkdown>
        </div>

        <div className={styles.footerRight}>
          <div>
            <ReactMarkdown>{footerData.RightText1st}</ReactMarkdown>
          </div>
          
          <div>
            <ReactMarkdown>{footerData.RightText2nd}</ReactMarkdown>
          </div>
        </div>
      </div>
    </footer>
  );
}

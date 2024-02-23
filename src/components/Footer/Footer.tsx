import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div>TĚŠÍM SE NA VÁS!</div>

        <div className={styles.footerRight}>
          <div>
            <div>Mgr. Lenka Měrková</div>
            <div>Přihlávky 103, Dolní Lhota, 74766</div>
            <div> IČO: 17907993</div>
          </div>
          <div>
            <div>MÁTE OTÁZKY? NAPIŠTE MI! </div>
            <div>lenka.svidrnochova@gmail.com</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

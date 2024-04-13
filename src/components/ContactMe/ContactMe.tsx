import React from "react";
import styles from "./ContactMe.module.css";
import { FaRegCopy } from "react-icons/fa";
import CopyEmail from "./CopyEmail/CopyEmail";

export default function ContactMe() {
  return (
    <div className={`${styles.contactMe} sectionsShared`} id="kontakt">
      <h2>Domluvíme se?</h2>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <p>
            Napište mi na adresu
            <span className={styles.email}>
              lenka.svidrnochova@gmail.com
              <CopyEmail />
            </span>
            a dejte vědět, o jaký text (či texty) byste měli zájem.
          </p>

          <h3>V e-mailu ideálně specifikujte:</h3>
          <ul>
            <li>
              co konkrétně potřebujete (jestli by se jednalo o popisky, webové
            </li>
            <li>
              texty, blogové články, či o něco jiného) téma vašeho projektu =
              článků, textů (budu ráda, když mi pošlete odkaz na vaše stránky /
              sociální sítě)
            </li>
            <li>zda by šlo o jednorázovou, nebo dlouhodobou spolupráci</li>
            <li>
              přibližný rozsah textů deadline (tj. dokdy byste text nejpozději
              potřebovali) speciální požadavky (pokud nějaké máte)
            </li>
          </ul>
        </div>

        <div className={styles.rightColumn}>
          <img className={styles.imgStyle} src="/images/emailLogo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

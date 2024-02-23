import React from "react";
import styles from "./ContactMe.module.css";

export default function ContactMe() {
  return (
    <div className={styles.contactMe} id="kontakt">
      <h2>Domluvíme se?</h2>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <p>
            Napište mi na adresu
            <span> lenka.svidrnochova@gmail.com </span> a dejte vědět, o jaký
            text (či texty) byste měli zájem.
          </p>
        </div>

        <div className={styles.rightColumn}>
          SOME TEXT
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

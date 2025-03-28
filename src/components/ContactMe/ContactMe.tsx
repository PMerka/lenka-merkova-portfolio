import React from "react";
import styles from "./ContactMe.module.css";
import CopyEmail from "./CopyEmail/CopyEmail";
import { html, attributes } from "/content/contact.md";

export default function ContactMe() {
  const { title, preEmailText, email, postEmailText } = attributes as {
    title: string;
    preEmailText: string;
    email: string;
    postEmailText: string;
  };

  return (
    <div className={`${styles.contactMe} sectionsShared`} id="kontakt">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>

        <div className={styles.rightColumn}>
          <img src="/upload/kontakt.png" alt="" />
        </div>
      </div>
    </div>
  );
}

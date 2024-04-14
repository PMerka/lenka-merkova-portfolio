import React from "react";
import styles from "./ContactMe.module.css";
import { FaRegCopy } from "react-icons/fa";
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
      <h2>{title}</h2>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <p>
            {preEmailText}
            <span className={styles.email}>
              {email}
              <CopyEmail value={email} />
            </span>
            {postEmailText}
          </p>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>

        <div className={styles.rightColumn}>
          <img className={styles.imgStyle} src="/upload/emailLogo.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

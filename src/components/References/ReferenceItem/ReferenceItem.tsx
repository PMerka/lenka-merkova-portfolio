import React from "react";
import styles from "./ReferenceItem.module.css";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function ReferenceItem({
  topText,
  mainText,
  author,
  authorDescription,
}: {
  topText?: string;
  mainText?: string;
  author?: string;
  authorDescription?: string;
}) {
  return (
    <div className={styles.referenceItem}>
      <div className={styles.topText}>
        <BiSolidQuoteAltLeft className={styles.quoteMark} />
        {topText}
      </div>
      <div className={styles.mainText}>{mainText}</div>
      <div className={styles.footer}>
        <div className={styles.author}>{author}</div>
        <div className={styles.authorDescription}>{authorDescription}</div>
      </div>
    </div>
  );
}

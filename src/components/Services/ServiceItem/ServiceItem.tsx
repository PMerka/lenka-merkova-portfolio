import React from "react";
import styles from "./ServiceItem.module.css";

export default function ServiceItem({
  title,
  anotation,
  mainText,
}: {
  title: string;
  anotation: string;
  mainText: string;
}) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.shortText}>{anotation}</div>

        <div className={styles.mainText}>{mainText}</div>
      </div>
    </div>
  );
}

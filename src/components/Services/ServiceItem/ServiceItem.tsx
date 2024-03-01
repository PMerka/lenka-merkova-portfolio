import React from "react";
import styles from "./ServiceItem.module.css";

export default function ServiceItem({
  title,
  annotation,
  mainText,
}: {
  title: string;
  annotation: string;
  mainText: string;
}) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.body}>
        <div className={styles.shortText}>{annotation}</div>

        <div className={styles.mainText}>{mainText}</div>
      </div>
    </div>
  );
}

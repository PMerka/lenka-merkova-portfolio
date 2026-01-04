import React from "react";
import styles from "./ServiceItem.module.css";
import ReactMarkdown from "react-markdown";

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
        <div className={styles.mainText}>
          <ReactMarkdown>{mainText}</ReactMarkdown>
        </div>
        <div className={styles.shortText}>
          <ReactMarkdown>{annotation}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

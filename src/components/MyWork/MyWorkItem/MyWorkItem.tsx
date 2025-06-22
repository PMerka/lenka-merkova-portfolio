import React from "react";
import styles from "./MyWorkItem.module.css";

export default function MyWorkItem({
  title,
  imgSrc,
  link,
}: {
  title?: string;
  imgSrc?: string;
  link?: string;
}) {
  return (
    <a href={link} target="_blank">
      <div className={styles.myWorkItem}>
        <div className={styles.aspectWrapper}>
          <img src={imgSrc} alt="" className={styles.myWorkItemImg} />{" "}
        </div>
        <div className={styles.titleSection}>
          <h4 className={styles.title}>{title}</h4>
        </div>
      </div>
    </a>
  );
}

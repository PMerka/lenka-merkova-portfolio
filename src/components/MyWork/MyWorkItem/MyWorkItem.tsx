import React, { ReactNode } from "react";
import styles from "./MyWorkItem.module.css";

export default function MyWorkItem({
  title,
  imgSrc,
}: {
  title?: string;
  imgSrc?: string;
}) {
  return (
    <div className={styles.myWorkItem}>
      <div className={styles.titleSection}>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <img src={imgSrc} alt="" className={styles.myWorkItemImg} />
    </div>
  );
}

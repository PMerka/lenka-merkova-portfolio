import React from "react";
import styles from "./MyWork.module.css";
import MyWorkItem from "./MyWorkItem/MyWorkItem";
import { html, attributes } from "/content/myWork.md";

export default function MyWork() {
  const { title, myWorkItem } = attributes as {
    title: string;
    myWorkItem: { name: string; picture: string; link: string }[];
  };

  return (
    <div className={`${styles.myWork} sectionsShared`} id="ukazky">
      <h2>{title}</h2>
      <div className={styles.myWorkGrid}>
        {myWorkItem.map((item, index) => (
          <MyWorkItem key={index} title={item.name} imgSrc={item.picture} link={item.link}/>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import styles from "./References.module.css";
import ReferenceItem from "./ReferenceItem/ReferenceItem";
import { attributes } from "/content/references.md";

export default function References() {
  const { title, referenceItems } = attributes as {
    title: string;
    referenceItems: {
      topText: string;
      mainText: string;
      author: string;
      authorInfo: string;
    }[];
  };
  return (
    <div className={`${styles.references} sectionsShared`} id="reference">
      <h2>{title}</h2>
      <div className={styles.content}>
        {referenceItems.map((referenceItem) => (
          <ReferenceItem
            topText={referenceItem.topText}
            mainText={referenceItem.mainText}
            author={referenceItem.author}
            authorDescription={referenceItem.authorInfo}
          />
        ))}
      </div>
    </div>
  );
}

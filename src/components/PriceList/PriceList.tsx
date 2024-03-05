import React from "react";
import styles from "./PriceList.module.css";
import { attributes } from "/content/priceList.md";

export default function PriceList() {
  const { paragraphs } = attributes as {
    paragraphs: {
      title: string;
      text: string;
    }[];
  };
  return (
    <div className={`${styles.priceList} sectionsShared`} id="cenik">
      <h2>Cena za copywriting</h2>

      <div className={styles.priceListContent}>
        <div className={`${styles.article} ${styles.price}`}>
          <h3>Hodinová sazba 500 Kč/hod</h3>
          <div className={styles.pricesExample}>
            <div>Blogový článek (standard, 500 slov) </div>
            <div>od 1500 Kč</div>
            <div>Produktový popisek (80 slov) </div>
            <div>od 120 Kč</div>
            <div>Textace webu </div>
            <div>od 7000 Kč</div>
          </div>
        </div>

        {paragraphs.map((paragraph) => (
          <div className={styles.article}>
            <h3>{paragraph.title}</h3>
            <p>{paragraph.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

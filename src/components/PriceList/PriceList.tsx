import React from "react";
import styles from "./PriceList.module.css";
import { attributes } from "/content/priceList.md";

type MdDataPriceList = {
  title: string;
  priceTitle: string;
  prices: {
    item: string;
    price: string;
  }[];
  paragraphs: {
    title: string;
    text: string;
  }[];
};

export default function PriceList() {
  const { title, priceTitle, prices, paragraphs } =
    attributes as MdDataPriceList;
  return (
    <div className={`${styles.priceList} sectionsShared`} id="cenik">
      <h2>{title}</h2>

      <div className={styles.priceListContent}>
        <div className={`${styles.article} ${styles.price}`}>
          <h3>{priceTitle}</h3>
          <div className={styles.pricesExample}>
            {prices.map((row) => (
              <>
                <div>{row.item}</div>
                <div>{row.price}</div>
              </>
            ))}
          </div>
        </div>

        {paragraphs.map((paragraph, index) => (
          <div key={index} className={styles.article}>
            <h3>{paragraph.title}</h3>
            <p>{paragraph.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

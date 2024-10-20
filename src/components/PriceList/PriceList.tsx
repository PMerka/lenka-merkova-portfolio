import React from "react";
import styles from "./PriceList.module.css";
import priceList from "/content/priceList.json";


type Paragraph = {
    title: string;
    text: string;
};

export default function PriceList() {

  return (
    <div className={`${styles.priceList} sectionsShared`} id="cenik">
      <h2>{priceList.title}</h2>

      <div className={styles.priceListContent}>
        <div className={`${styles.price}`}>
          <h3>{priceList.priceBox.priceLabel}</h3>
          <h3>{priceList.priceBox.price}</h3>
        </div>

        <div>
        {priceList.paragraphs.map((paragraph: Paragraph, index: number) => (
          <div key={index} className={styles.article}>
            <h3>{paragraph?.title}</h3>
            <p>{paragraph?.text}</p>
          </div>
        ))}
        </div>


      </div>
    </div>
  );
}

import React from "react";
import styles from "./PriceList.module.css";
import priceList from "/content/priceList.json";
import Button from "../Button/Button";

type Paragraph = {
  title: string;
  text: string;
};

export default function PriceList() {
  return (
    <div className={`${styles.priceList} sectionsShared`} id="cenik">
      <h2>{priceList.title}</h2>

      <div className={styles.priceListContent}>
        <div>
          <div className={`${styles.price}`}>
            <div className={styles.priceContentLabel}>
              {priceList.priceBox.priceLabel}
            </div>
            <div className={styles.priceContentValue}>
              {priceList.priceBox.price}
            </div>
          </div>

          <div className={styles.actionButton}>
            <Button> Chci text </Button>
          </div>
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

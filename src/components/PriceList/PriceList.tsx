import React from "react";
import styles from "./PriceList.module.css";
import priceList from "/content/priceList.json";
import Button from "../Button/Button";
import ReactMarkdown from "react-markdown";

type Paragraph = {
  title: string;
  text: string;
  actionButton: string;
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
            <Button> {priceList?.actionButton} </Button>
          </div>
        </div>

        <div>
          <ReactMarkdown>{priceList?.paragraphs}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

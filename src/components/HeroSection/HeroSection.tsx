import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button";
import { attributes } from "/content/heroSection.md";

export default function HeroSection() {
  const { title, subtitle, shortText, introList, buttonText } = attributes as {
    title: string;
    subtitle: string;
    shortText: string;
    introList: string[];
    buttonText: string;
  };
  return (
    <div className={`${styles.heroSection} sectionsShared`}>
      <div className={styles.texts}>
        <div className={styles.textPosition}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subTitle}>{subtitle}</div>
        </div>

        <div className={styles.intro}>
          {shortText}
          <ul className={styles.list}>
            {introList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Button> {buttonText} </Button>
      </div>

      <img className={styles.profileImage} src="/images/profileImage.png" />
    </div>
  );
}

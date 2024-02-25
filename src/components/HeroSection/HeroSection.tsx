import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button";
import { attributes } from "/content/heroSection.md";

export default function HeroSection() {
  const { title, subtitle } = attributes;
  console.log("title", title);
  return (
    <div className={styles.heroSection}>
      <div className={styles.texts}>
        <div className={styles.textPosition}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subTitle}>{subtitle}</div>
        </div>

        <div className={styles.intro}>
          Texty, které vaší značce propůjčí ty správné vibrace
          <ul className={styles.list}>
            <li>Máte super vizi, ale nedokážete ji promítnout do slov?</li>
            <li>Hledáte někoho, kdo si s vašimi texty pohraje?</li>
          </ul>
        </div>
        <Button> Nechte to na mně </Button>
      </div>

      <img className={styles.profileImage} src="/images/profileImage.png" />
    </div>
  );
}

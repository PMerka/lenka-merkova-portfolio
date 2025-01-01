import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button";
import { attributes } from "/content/heroSection.md";
import content from "/content/heroSection.json";
import ReactMarkdown from "react-markdown";

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
        <div className={styles.topSection}>
          <ReactMarkdown>{content.topSection}</ReactMarkdown>
        </div>
        <Button> {buttonText} </Button>
        <div className={styles.belowSection}>
          <ReactMarkdown>{content.belowSection}</ReactMarkdown>
        </div>
      </div>

      <img className={styles.profileImage} src="/upload/profileImage.png" />
    </div>
  );
}

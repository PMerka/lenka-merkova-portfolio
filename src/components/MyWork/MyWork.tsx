import React from "react";
import styles from "./MyWork.module.css";
import MyWorkItem from "./MyWorkItem/MyWorkItem";

export default function MyWork() {
  return (
    <div className={`${styles.myWork} sectionsShared`} id="ukazky">
      <h2>Ochutnávka</h2>
      <div className={styles.myWorkGrid}>
        <MyWorkItem
          title="Články pro knihkupectví Martinus"
          imgSrc={"/images/ukazka_1_logo.png"}
        />
        <MyWorkItem
          title="Popisek kategorie pro zlatnictví Eppi"
          imgSrc={"/images/ukazka_2_logo.png"}
        />
        <MyWorkItem
          title="Článek pro čajový e-shop"
          imgSrc={"/images/ukazka_3_logo.png"}
        />
        <MyWorkItem
          title="Článek pro tištěný magazín Nový prostor"
          imgSrc={"/images/ukazka_4_logo.png"}
        />
        <MyWorkItem
          title="Blogový  článek pro svatební blog"
          imgSrc={"/images/ukazka_5_logo.png"}
        />
      </div>
    </div>
  );
}

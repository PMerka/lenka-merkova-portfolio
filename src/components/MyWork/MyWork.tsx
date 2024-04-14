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
          imgSrc={"/upload/ukazka_1_logo.png"}
        />
        <MyWorkItem
          title="Popisek kategorie pro zlatnictví Eppi"
          imgSrc={"/upload/ukazka_2_logo.png"}
        />
        <MyWorkItem
          title="Článek pro čajový e-shop"
          imgSrc={"/upload/ukazka_3_logo.png"}
        />
        <MyWorkItem
          title="Článek pro tištěný magazín Nový prostor"
          imgSrc={"/upload/ukazka_4_logo.png"}
        />
        <MyWorkItem
          title="Blogový  článek pro svatební blog"
          imgSrc={"/upload/ukazka_5_logo.png"}
        />
      </div>
    </div>
  );
}

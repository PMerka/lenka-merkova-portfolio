import React from "react";
import styles from "./References.module.css";
import ReferenceItem from "./ReferenceItem/ReferenceItem";

const texts = [
  {
    topText: "Empatický přístup a barvité texty",
    mainText: `"Lenka je skvělou copywriterkou, se kterou je radost spolupracovat. 
    Nad obsahem pečlivě přemýšlí, umí klást dobré otázky, díky kterým pak 
    vytvoří originální a barvitý text. Ví, kde a jak použít relevantní klíčová slova a 
    každé zadání splní nad očekávání. Její empatický přístup, otevřenost ke zpětné vazbě a 
    ochota jsou jen příjemnou třešničkou celé spolupráce. :)"`,
    author: "Káťa Hoferková",
    authorDescription: "bývalá obsahová specialistka zlatnictví Eppi",
  },
];

export default function References() {
  return (
    <div className={styles.references} id="reference">
      <h2>Řekli o mně</h2>
      <div className={styles.content}>
        <ReferenceItem
          topText="Empatický přístup a barvité texty"
          mainText={`
            "Lenka je skvělou copywriterkou, se kterou je radost spolupracovat. 
            Nad obsahem pečlivě přemýšlí, umí klást dobré otázky, díky kterým pak 
            vytvoří originální a barvitý text. Ví, kde a jak použít relevantní klíčová slova a 
            každé zadání splní nad očekávání. Její empatický přístup, otevřenost ke zpětné vazbě a 
            ochota jsou jen příjemnou třešničkou celé spolupráce. :)"
            `}
          author="Káťa Hoferková"
          authorDescription="bývalá obsahová specialistka zlatnictví Eppi"
        />
        <ReferenceItem />
        <ReferenceItem />
      </div>
    </div>
  );
}

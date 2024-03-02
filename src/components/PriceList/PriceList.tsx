import React from "react";
import styles from "./PriceList.module.css";
import fm from "/content/priceList.md";

export default function PriceList() {
  return (
    <div className={styles.priceList} id="cenik">
      <h2>Cena za copywriting</h2>

      <div className={styles.priceListContent}>
        <div className={styles.column}>
          <div>
            <h3>Orientační ceny </h3>
            <p>500 Kč/hod</p>
            <ul>
              <li>Blogový článek (standard, 500 slov) od 1500 Kč</li>
              <li>Produktový popisek (80 slov) od 120 Kč</li>
              <li>Textace webu od 7000 Kč</li>
            </ul>
          </div>

          <div>
            <h3>Jaká je výsledná cena textu?</h3>
            <p>
              Cena textů vždy závisí na konkrétním zadání a odvíjí se od
              hodinové sazby (tj. 500 Kč / hod). Roli obvykle hraje rozsah
              práce, náročnost tématu, dostupnost podkladů a počet úprav.
              Finální částka pak zahrnuje nejen samotné psaní, ale i dobu
              strávenou studiem podkladů a online konzultacemi (s výjimkou
              krátkého orientačního hovoru na začátku spolupráce).
            </p>
          </div>
        </div>

        <div className={styles.column}>
          <div>
            <h3>Jak vypadá spolupráce?</h3>
            <p>
              Až ke mně do schránky doputuje váš e-mail, domluvíme si krátké
              (maximálně čtvrthodinové) online setkání, během kterého se vás
              doptám na hrubou představu o textech. Poté vám pošlu zprávu s
              cenovým odhadem zakázky. Pokud si plácnem, čeká na nás ještě
              úvodní online konzultace, kdy vaše představy probereme do hloubky.
              Upozorňuju, že v této fázi budu hooooooodně zvědavá. :-) No a pak
              už jen v klidu čekáte na texty, které vám dodám buď ve Wordu, nebo
              v Google dokumentu.
            </p>
          </div>

          <div>
            <h3>Kdy bude hotovo?</h3>
            <p>
              Termíny dodání se mohou lišit podle rozsahu poptávky a mých
              aktuálních závazků, a to v rozmezí od jednoho týdne až po dva
              měsíce. Otázku termínu každopádně vyřešíme hned na začátku.
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: fm.html }} />
        </div>
      </div>
    </div>
  );
}

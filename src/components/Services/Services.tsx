import styles from "./Services.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";

export default function Services() {
  return (
    <div id="co-pro-vas-napisu" className={styles.services}>
      <h2>Co pro vás napíšu?</h2>
      <div className={styles.servicesGrid}>
        <ServiceItem
          title="BLOGOVÉ ČLÁNKY"
          anotation={
            "Nechte proto články na mně a věnujte se tomu, v čem jste nejlepší. ♥"
          }
          mainText={
            "Blogové články jsou v podnikání skvělým nástrojem. Někdy to ale není snadné každý projekt vyžaduje čas a na psaní blogu leckdy nezbývá prostor."
          }
        />
        <ServiceItem
          title="TEXTY NA WEB"
          anotation={"Pojďme si s vašimi texty pohrát! ✔"}
          mainText={
            "Chystáte se aktualizovat webovky? Nebo svůj srdcový projekt teprve spouštíte? Otextuju vaše stránky s ohledem na esenci vaší značky i na zákazníka."
          }
        />
        <ServiceItem
          title="PRODUKTOVÉ POPISKY"
          anotation={
            "Přimíchejme do koktejlu bezbarvých parametrů trochu šťávy :)"
          }
          mainText={
            "Produktové popisky. Myslíte, že s nimi nemůže být zábava? No… popravdě vlastně nemusí. Ale může! "
          }
        />
      </div>
    </div>
  );
}

import styles from "./Services.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";
import { attributes } from "/content/services.md";

export default function Services() {
  const { title, services } = attributes as {
    title: string;
    services: {
      title: string;
      shortText: string;
      mainText: string;
    }[];
  };
  return (
    <div id="co-pro-vas-napisu" className={`${styles.services} sectionsShared`}>
      <h2>{title}</h2>
      <div className={styles.servicesGrid}>
        {services.map((item, index) => (
          <ServiceItem
            key={index}
            title={item?.title}
            annotation={item?.shortText}
            mainText={item?.mainText}
          />
        ))}
      </div>
    </div>
  );
}

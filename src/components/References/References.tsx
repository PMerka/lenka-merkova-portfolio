import React from "react";
import styles from "./References.module.css";
import { attributes } from "/content/references.md";
import "react-multi-carousel/lib/styles.css";
import ReferenceItem from "./ReferenceItem/ReferenceItem";
import Carousel from "react-multi-carousel";
import ReferenceCarousel from "./ReferenceCarousel/ReferenceCarousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function References() {

  const { title, referenceItems } = attributes as {
    title: string;
    referenceItems: {
      topText: string;
      mainText: string;
      author: string;
      authorInfo: string;
    }[];
  };

  return (
    <div className={`${styles.references} sectionsShared`} id="reference">
      <h2>{title}</h2>

      <ReferenceCarousel>
        {referenceItems.map((referenceItem, index) => (
            <ReferenceItem
              key={index}
              topText={referenceItem.topText}
              mainText={referenceItem.mainText}
              author={referenceItem.author}
              authorDescription={referenceItem.authorInfo}
            />
          ))}
      </ReferenceCarousel>

    </div>
  );
}

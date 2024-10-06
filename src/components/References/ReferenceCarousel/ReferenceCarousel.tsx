'use client'
import { ReactNode } from "react";
import Carousel from "react-multi-carousel";

interface ReferenceCarouselProps {
    children: ReactNode
}

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

const ReferenceCarousel = ({children}: ReferenceCarouselProps) => {
    
    return (
        <Carousel responsive={responsive}>
            {children}
        </Carousel>
    );
};

export default ReferenceCarousel;
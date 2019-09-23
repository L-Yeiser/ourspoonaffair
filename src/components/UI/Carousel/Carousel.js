import React, { useState } from 'react';

import { Image, CarouselContainer, Chevron } from './style';

export const Carousel = ({ images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const generateImages = () => {
    const lastIndex = images.length - 1;

    return images.map((image, index) => {
      let className;
      if (index === activeIndex) {
        className = 'active';
      }

      if (
        (activeIndex === 0 && index === lastIndex) ||
        index === activeIndex - 1
      ) {
        className = 'left';
      }

      if (
        (activeIndex === lastIndex && index === 0) ||
        index === activeIndex + 1
      ) {
        className = 'right';
      }

      return className ? (
        <Image src={image} className={`${className} ${index}`} key={image} />
      ) : null;
    });
  };

  return (
    <>
      <CarouselContainer>
        {generateImages()}
        <Chevron
          className="left"
          onClick={() => {
            setActiveIndex(prev => {
              return Math.abs((prev + images.length - 1) % images.length);
            });
          }}
        />
        <Chevron
          className="right"
          onClick={() => {
            setActiveIndex(prev => Math.abs((prev + 1) % images.length));
          }}
        />
      </CarouselContainer>
    </>
  );
};

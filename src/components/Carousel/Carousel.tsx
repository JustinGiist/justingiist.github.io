import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
interface iCarouselItem {
  label: string;
  render: string | React.ReactElement;
}
interface CarouselProps {
  id: string;
  items: iCarouselItem[]; // elements can be either image URLs or React Elements
}

const CarouselComponent = ({
    id,
    items
}: CarouselProps) => {
  return (
    <div id={id} className='carousel-component'>
      <Carousel>
        {items.map((item, index) => (
            <div key={index}>
                {item.label && <div className='carousel-label'>{item.label}</div>}
                {typeof item.render === 'string' ? <img src={item.render} /> : item.render}
            </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselComponent;

"use client"

import { Carousel, Image } from "react-bootstrap";
import { useState } from "react";

const ImageCarousel = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {slides?.map((item) => {
        return (<Carousel.Item>
          <Image src={item.url} alt={item.alt} className="d-block banner w-100" />
        </Carousel.Item>)
      })}
    </Carousel>
  )
}

export default ImageCarousel
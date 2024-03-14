"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ImageCarousel = () => {
  return (
    
      <Carousel showThumbs={false}>
        <div>
          <image src='https://placehold.co/600x400/orange/white' /> 
          <p className="legend">Image </p>
        </div>
        <div>
          <image src='https://placehold.co/600x400/black/white' />
          <p className="legend">Image </p>
        </div>
      </Carousel>
   

  )
}

export default ImageCarousel
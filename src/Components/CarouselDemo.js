import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function CarouselDemo() {
  return (
<<<<<<< HEAD
    <div className="w-full pt-10 bg-[#110617]">
=======
    <div className="w-full pt-10 bg-[#231E3D]">
>>>>>>> 1ff7471f416cc6dbe99184b8695bfa25c0578d5e
      <Carousel className="carousel">
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://zesty-cajeta-af510d.netlify.app/2.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/1.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/3.svg"
            alt="Image"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://zesty-cajeta-af510d.netlify.app/3.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/2.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/1.svg"
            alt="Image"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://zesty-cajeta-af510d.netlify.app/1.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/2.svg"
            alt="Image"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/3.svg"
            alt="Image"
          />
        </div>
      </Carousel>
    </div>
  );
  
}

export default CarouselDemo
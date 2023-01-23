import React from "react";
import CarouselClients from "./CarouselClients";
import Fade from "react-reveal/Fade";

function Clients() {
  return (
    <div>
<<<<<<< HEAD
      <div className="bg-[#16081c] pt-14   lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="lg:text-3xl text-white text-center text-3xl font-semibold whitespace-nowrap">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                What Our Clients Say{" "}
              </span>
            
=======
      <div className="bg-[#231E3D] pt-14   lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="lg:text-3xl text-white text-center text-3xl font-semibold whitespace-nowrap">
            What Our Clients Say
>>>>>>> 1ff7471f416cc6dbe99184b8695bfa25c0578d5e
          </h1>
          <p className="text-[#696984] pt-4 pb-5 text-center">
            Trusted by 5000+ companies worldwide.
          </p>

          <CarouselClients />
        </Fade>
      </div>
    </div>
  );
}

export default Clients;

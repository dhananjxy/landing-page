import React from "react";
import CarouselClients from "./CarouselClients";
import Fade from "react-reveal/Fade";

function Clients() {
  return (
    <div>
      <div className="bg-[#16081c] pt-14   lg:px-28 px-10 pb-10">
        <Fade bottom cascade>
          <h1 className="lg:text-3xl text-white text-center text-3xl font-semibold whitespace-nowrap">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                What Our Clients Say{" "}
              </span>
            
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

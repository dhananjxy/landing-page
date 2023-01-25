import React from 'react'
import Fade from "react-reveal/Fade";

function Vision() {
  return (
    <div className="bg-[#16081c] lg:px-28 pt-14 px-10 pb-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Fade bottom cascade>
          <div>
            <img
              src="https://zesty-cajeta-af510d.netlify.app/employee.svg"
              alt="Employee Experiencing Digital World"
            />
          </div>
          <div>
            <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
            <h1 className="pt-4 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                Our Vision{" "}
              </span>
            </h1>
            <p className="text-[#696984] pt-5 pb-5 lg:w-[500px]">
            Our vision is to make blockchain technology accessible to the masses. We strive to create a decentralized platform and ecosystem that is secure, transparent, and efficient.
            We are committed to revolutionizing the way transactions are conducted, by leveraging the power of blockchain technology to create a platform that is decentralized, secure, and scalable.
            Our goal is to become the go-to blockchain platform for businesses and individuals looking to take advantage of the benefits of decentralization.
            We aim to make blockchain technology more accessible to individuals and businesses all over the world, by providing an intuitive and user-friendly platform that is accessible to all.
            We want to make sure that everyone has the opportunity to benefit from the advantages of decentralization and blockchain technology.
            </p>
            <button className="rounded px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
              <span className="absolute inset-0 bg-[#5558ff]"></span>
              <span className="absolute inset-0 flex justify-center items-center">
                Learn More
              </span>
              Learn More
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Vision
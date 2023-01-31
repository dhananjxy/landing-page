import React from 'react'
import Fade from "react-reveal/Fade";

function Mission() {

  return (
    <div className="bg-[#110617] lg:px-28 pt-14 px-10 pb-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Fade bottom cascade>
          <div>
            <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
            <h1 className="pt-4 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                Our Mission{" "}
              </span>
            </h1>
            <p className="text-[#696984] pt-5 pb-5 lg:w-[500px]">
            Our mission is to empower individuals and businesses to take control of their financial futures by providing a decentralized and transparent blockchain platform that enables fast, secure and low-cost transactions.
            We strive to build a strong community of users and developers who share our vision of a decentralized future.
            By fostering a culture of collaboration and innovation, we aim to create a platform that is continuously evolving and adapting to meet the needs of our users.
            Our goal is to make blockchain technology accessible to everyone, regardless of their technical knowledge or experience.
            We are committed to providing our users with the tools and resources they need to succeed in a decentralized world.
            </p>
            <button className="rounded px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
              <span className="absolute inset-0 bg-[#5558ff]"></span>
              <span className="absolute inset-0 flex justify-center items-center">
                Learn More
              </span>
              Learn More
            </button>
          </div>
          <div>
            <img
              src="https://zesty-cajeta-af510d.netlify.app/employee.svg"
              alt="Employee Experiencing Digital World"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Mission
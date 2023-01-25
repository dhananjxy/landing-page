import React from "react";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


function Header() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className=" from-[#16081c] to-[#110617] bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-screen overflow-hidden">
       <Particles 
            id="tsparticles"
            init={particlesInit}
            canvasClassName="h-px"
            options={{
              
                background: {
                    color: {
                        value: "##",
                    },
                },
                fullScreen: {
                  zIndex:0,
                  enable:false,

                },
                fpsLimit: 30,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
      <Navbar className="z-50" />
      <div className="lg:flex lg:pt-8">
        <Fade left cascade>
          <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
            <h1 className="neonText font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
            Make the decentralized web a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0]">
                {" "}
                reality{" "}
              </span>
              for everyone.
            </h1>
            <div className="xl:flex justify-start mt-7">
              <div>
                <button className="rounded px-7 py-3 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
                  <span className="absolute inset-0 bg-[#5558ff]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Work with us
                  </span>
                  Work with us
                </button>
              </div>
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[14px] text-gray-400 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Leo vel orci porta non pulvinar neque.
              </p>
            </div>
          </div>
        </Fade>

        <div className="pr-24 lg:pr-0">
          {/*<Fade right cascade>
            <div className="boy-illustration">
              <img
                src="https://zesty-cajeta-af510d.netlify.app/boy-experiencing-digital-world-1.svg"
                alt="Boy Experiencing Digital World"
              />
            </div>
          </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Header;

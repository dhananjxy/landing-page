import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Vision from './Components/Vision';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './app.css'
// import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Mission from './Components/Mission';




function App() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="App font-link">
      {/* <Preloader /> */}
      <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
             fullScreen:{
                "zIndex":0
             },
                background: {
                    color: {
                        value: "##",
                    },
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
                        opacity: 0.5,
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
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <Header id="home" />
        <ScrollArrow/>
        <Companies id="about" />
        <Services id="services" />
        <Vision />
        <Mission />
        <Projects id="projects" />
        <Clients />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;

import Header from './Components/Header';
import Companies from './Components/Companies'
import Services from './Components/Services';
import Vision from './Components/Vision';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import './app.css'
// import Preloader from './Components/Preloader';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Mission from './Components/Mission';
import Roadmap from './Components/Roadmap';
import Team from './Components/Team';
import Faq from './Components/Faq';
import Dex from './Components/Dex';
import Marketplace from './Components/Marketplace';




function App() {




  return (
    <div className="App font-link">
      {/* <Preloader /> */}
     
        <Header id="home" />
        <ScrollArrow />
        <Companies id="about" />
        {/*<Services id="services" />*/}
        <Vision />
        <Mission />
        <Dex />
        <Marketplace />
        <Team />
        <Roadmap />
        <Faq />
       {/* <Projects id="projects" />
        <Clients />
        <Blog />*/}
        <Footer />
    </div>
  );
}

export default App;

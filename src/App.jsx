import './app.scss'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

// Import particles.json
import particlesConfig from './particles.json';

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => particlesConfig, []);

  if (init) {
      
     
    return (
      <div>
        <section id='Services'>
          <Navbar/>
          <Parallax type='services'/>
        </section>

        <section id='Homepage'>
          <Hero/>
        </section>
        <section>
          <Skills/>
        </section>
          <Portfolio/>
        <section id='Contact'><Contact/></section>
        {/* <section id='Portfolio'><Parallax type='portfolio'/></section> */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default App;

import './App.scss';
import { Routes, Route } from 'react-router-dom';
//import Particles from 'react-tsparticles';
//import { loadFull } from 'tsparticles';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Home from './Containers/home';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './Components/navbar';
//import particles from './utils.js/particles';

function App() {
  // const handleInit = async(main) => {
  //   console.log("Particles Initialized:", main); // Debugging
  //   await loadFull(main);
  // };

  return (
    <div className="App">
      {/* <Particles id="particles" options={particles} init={handleInit} /> */}
      <Navbar />

      <div className='App__main-page-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;

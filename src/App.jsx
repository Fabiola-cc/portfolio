import { useRef } from 'react';
import './App.css';
import Presentation from './Components/presentation';
import Sky from './Components/Details/sky';
import Navbar from './Components/navBar';
import Proyects from './Components/projects';
import About from './Components/about';
import Contacto from './Components/contact';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='background'>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Sky />
      <div ref={homeRef}><Presentation /></div> {/* HOME */}
      <div ref={projectsRef}><Proyects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contacto /></div>
    </div>
  );
};

export default App;

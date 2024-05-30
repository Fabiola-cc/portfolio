import { useRef, useEffect, useState } from 'react';
import './App.css';
import Presentation from './Components/presentation';
import Navbar from './Components/navBar';
import Proyects from './Components/projects';
import About from './Components/about';
import Contacto from './Components/contact';
import Sky from './Components/Details/sky'; // Mover la importación aquí

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      // setTimeout para esperar la carga del resto de la app
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoaded(true);
    };

    loadApp();
  }, []);

  return (
    <div className='background'>
      {isLoaded && <Sky />}
      <div ref={homeRef}><Presentation /></div>
      <div ref={projectsRef}><Proyects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contacto /></div>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
    </div>
  );
};

export default App;
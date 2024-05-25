import './App.css';
import Presentation from './Components/presentation';
import Sky from './Components/Details/sky';
import Navbar from './Components/navBar';
import Proyects from './Components/proyects';
import About from './Components/about';
import Contacto from './Components/contact';

const App = () => {  
  return (
    <div className='background'>
      <Navbar />
      <Sky />
      <Presentation/>
      <About />
      <Proyects />
      <Contacto />
    </div>
  );
};

export default App;

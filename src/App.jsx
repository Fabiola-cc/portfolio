import './App.css';
import Stars from './Components/backStars';
import Cloud from './Components/clouds';

const App = () => {  
  return (
    <div className="background">
      <h1>Bienvenido</h1>
      <div style={{ height: '500vh' }}>
        <p>.</p>
      </div>
      <Cloud />
      <Stars />
    </div>
  );
};

export default App;

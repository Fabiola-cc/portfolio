import './moon.css';

const Moon = () => {
  const backgroundElement = document.querySelector('.background');
    
    // Obtener la altura del elemento .background
    const backgroundHeight = backgroundElement.clientHeight;

    // Calcular la posición vertical de las estrellas (por ejemplo, el 70% del penúltimo color)
    const position = backgroundHeight * 0.8;

  return (
      <div className="moon" style={{ top: position}} ></div>
  );
};

export default Moon;

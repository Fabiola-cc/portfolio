import './backStars.css'

const generateStars = (numStars) => {
    const stars = [];
    const backgroundElement = document.querySelector('.background');

    // Obtener la altura del elemento .background
    const backgroundHeight = backgroundElement.scrollHeight;

    // Calcular la posición vertical de las estrellas (por ejemplo, el 70% del penúltimo color)
    const starsTop = backgroundHeight * 0.7;
    console.log(starsTop)
    for (let i = 0; i < numStars; i++) {
      const place = starsTop
      const height = backgroundHeight * 0.28
      const top = (Math.random() * height) + place + 'px';
      const left = Math.random() * 99 + '%';
      stars.push(<div className="star" style={{ top, left }} key={i}></div>);
    }
    return stars;
};

const Stars = () => {  
  return (
    <div className='sky'>
      {generateStars(100)}
    </div>
  );
};

export default Stars;
import './backStars.css'

const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const place = 420 * 0.7
      const height = 400 * 0.28
      const top = (Math.random() * height) + place + 'vh';
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
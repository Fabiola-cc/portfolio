import './backStars.css'

const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const top = (Math.random() * 180) + 350 + 'vh';
      const left = Math.random() * 100 + '%';
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
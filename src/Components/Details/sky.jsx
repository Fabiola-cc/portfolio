import './sky.css';
import Stars from './backStars';
import Cloud from './clouds';
import Moon from './moon';

const Sky = () => {  
  return (
    <div>
      <Cloud />
      <Stars />
      <Moon />
    </div>
  );
};

export default Sky;

import './contact.css';
import email from '../assets/email.png';
import copy from '../assets/copy-icon.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github-mark-white.svg';


const Contacto = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fcontrerascol@gmail.com');
    alert('Correo copiado al portapapeles!');
  };

  return (
    <div className='contact'>
      <h1 className='title'>Contáctame</h1>
      <div className='mail'>
        <a href='mailto:fcontrerascol@gmail.com' target="_blank" rel="noopener noreferrer">
          <img src={email} alt='Email'/>
        </a>
        <a href='mailto:fcontrerascol@gmail.com' target="_blank" rel="noopener noreferrer">
          fcontrerascol@gmail.com
        </a>
        <button className='copy-button' onClick={handleCopyEmail}>
          <img src={copy} alt='Copy'/>
        </button>
      </div>
      <div className='socials'>
        <a href='https://www.linkedin.com/in/fabiola-contreras-88606622a/' target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt='LinkedIn'/>
        </a>
        <a href='https://github.com/Fabiola-cc' target="_blank" rel="noopener noreferrer">
          <img src={github} alt='GitHub'/>
        </a>
        <a href='mailto:fcontrerascol@gmail.com' target="_blank" rel="noopener noreferrer">
          <img src={email} alt='Email'/>
        </a>
      </div>
    </div>
  );
};

export default Contacto;

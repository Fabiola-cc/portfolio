import './contact.css';

const Contacto = () => {
  return (
    <div className='contact'>
      <h1 className='title'>Contáctame</h1>
      <div className='mail'>
        <a href='mailto:fcontrerascol@gmail.com' target="_blank">
          <img src='/src/assets/email.png' alt='Email'/>
        </a>
        <a href='mailto: fcontrerascol@gmail.com' target="_blank">
          fcontrerascol@gmail.com
        </a>
      </div>
      <div className='socials'>
        <a href='https://www.linkedin.com/in/fabiola-contreras-88606622a/' target="_blank">
          <img src='/src/assets/linkedin.png' alt='LinkedIn'/>
        </a>
        <a href='https://github.com/Fabiola-cc' target="_blank">
          <img src='/src/assets/github-mark-white.svg' alt='GitHub'/>
        </a>
        <a href='mailto:fcontrerascol@gmail.com' target="_blank">
          <img src='/src/assets/email.png' alt='Email'/>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
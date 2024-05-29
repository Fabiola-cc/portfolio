import './about.css';

const About = () => {

  return (
    <div className='about'>
      <div className='content'>
        <div className='image-container'>
          <h3>Esta soy yo:</h3>
          <img className='picture' src='/src/assets/me.jpg' alt='Me, myself and I' />
        </div>
        <div className='text'>
          <p>Fabiola Alejandra Contreras Colindres, pero la mayoría me dice Fabi. Actualmente estoy en tercer año de Ingeniería en Ciencia de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala .</p>
          <p>Desde que tengo memoria he estado envuelta en el mundo de la tecnología, mientras yo crecía también lo hacía el smartphone, pero aún mejor siempre pendiente del trabajo de mi papá con tecnología.</p>
          <p>Por si no lo has notado, me encanta el cielo y voltear a verlo de vez en cuando para despejar mi mente.</p>
          <a href='https://drive.google.com/file/d/1zdm5_QNzmrkofyZe_bcol2WIoljRoBgn/view?usp=sharing' className='cv-button' target='_blank' rel='noopener noreferrer'>Revisa mi CV</a>
        </div>
      </div>
    </div>
  );
};

export default About;

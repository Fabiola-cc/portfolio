import { useState } from 'react';
import Tools from './Details/tools';
import './projects.css';
import Popup from './Details/project-data';

import blog from '../assets/Blog.png';
import pato from '../assets/cssPato.mp4';
import calculate from '../assets/calculadora.png';

const projectsData = [
  {
    title: 'Blog de lectura',
    description: 'Rincón de lectura es un pequeño blog donde se comentan diversos libros y se muestra su sinópsis para atraer a los lectores.',
    extra: 'Por razones prácticas tiene un acceso limitado pero puedes utilizar el usuario: admin y contraseña: admin_blog_75',
    image: '../assets/Blog.png',
    link: 'https://rincondelectura.netlify.app/',
    github: 'https://github.com/Fabiola-cc/Blog-Proyect',
  },
  {
    title: 'Calculadora',
    description: 'Un ejercicio común, en este caso enfocado en trabajar el uso de vitests y storybooks',
    image: '../assets/calculadora.png',
    link: 'https://calculator-22787.netlify.app/',
    github: 'https://github.com/Fabiola-cc/calculator_testing',
  },
  {
    title: 'Image CSS',
    description: 'Un pequeño ejercicio que muestra habilidades con css, mínima animación y uso de posicionamientos.',
    image: '../assets/calculadora.png',
    link: 'https://tiburoncin.lat/22787/Image_CSS/structure.html',
    github: 'https://github.com/Fabiola-cc/Image_CSS',
  },
];

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
      setSelectedProject(project);
      setIsPopupOpen(true);
  };

  const closePopup = () => {
      setIsPopupOpen(false);
      setSelectedProject(null);
  };

    return (
        <section id="projects">
            <h2>Proyectos en los que he trabajado</h2>
            <div className="project-container">
                <div className='columnProy'>
                  <div className="rowProy">
                    <div className="project-card" onClick={() => openPopup(projectsData[2])}>
                      <video controls autoPlay loop muted playsInline>
                        <source src={pato} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                      <div className="overlay">
                        <div className="overlay-text">Más información</div>
                      </div>
                    </div>
                    <div className="project-card" onClick={() => openPopup(projectsData[0])}>
                      <img src={blog} alt="Blog" />
                      <div className="overlay">
                        <div className="overlay-text">Más información</div>
                      </div>
                    </div>
                    <div className="project-card" onClick={() => openPopup(projectsData[1])}>
                      <img src={calculate} alt="Calculadora" />
                      <div className="overlay">
                        <div className="overlay-text">Más información</div>
                      </div>
                    </div>
                  </div>
                  <Tools />
                </div>
                {selectedProject && (
                    <Popup
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                        title={selectedProject.title}
                        description={selectedProject.description}
                        extra={selectedProject.extra}
                        image={selectedProject.image}
                        link={selectedProject.link}
                        github={selectedProject.github}
                    />
                )}
            </div>
        </section>
    );
};

export default Projects;

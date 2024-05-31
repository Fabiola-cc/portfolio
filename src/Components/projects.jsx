import { useState } from 'react';
import Tools from './Details/tools';
import './projects.css';
import Popup from './Details/project-data';

import blog from '../assets/Blog.png';
import pato from '../assets/gifPato.gif';
import calculate from '../assets/calculadora.png';

const projectsData = [
  {
    title: 'Blog de lectura',
    description: 'Rincón de lectura es un pequeño blog donde se comentan diversos libros y se muestra su sinópsis para atraer a los lectores.',
    extra: 'Por razones prácticas tiene un acceso limitado pero puedes utilizar el usuario: admin y contraseña: admin_blog_75',
    tools: ['React', 'Vite', 'NodeJS', 'CSS', 'HTML'],
    link: 'https://rincondelectura.netlify.app/',
    github: 'https://github.com/Fabiola-cc/Blog-Proyect',
    image: blog
  },
  {
    title: 'Calculadora',
    description: 'Un ejercicio común, en este caso enfocado en trabajar el uso de vitests y storybooks',
    tools: ['React', 'Vite', 'NodeJS', 'CSS', 'HTML', 'Vitest', 'Storybook'],
    link: 'https://calculator-22787.netlify.app/',
    github: 'https://github.com/Fabiola-cc/calculator_testing',
    image: calculate
  },
  {
    title: 'Image CSS',
    description: 'Un pequeño ejercicio que muestra habilidades con css, mínima animación y uso de posicionamientos.',
    tools: ['CSS', 'HTML'],
    link: 'https://tiburoncin.lat/22787/Image_CSS/structure.html',
    github: 'https://github.com/Fabiola-cc/Image_CSS',
    image: pato
  },
];

const Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projectsData.length;
    setCurrentIndex(nextIndex);
    setSelectedProject(projectsData[nextIndex]);
    console.log(selectedProject)
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
    setCurrentIndex(prevIndex);
    setSelectedProject(projectsData[prevIndex]);
  };

  return (
    <section id="projects">
      <div className="project-container">
        <div className='addTitle'>
          <h2>Algunos de mis proyectos</h2>
          <div className='columnProy'>
            <div className="project-card">
              <img src={selectedProject.image} alt={selectedProject.title} onClick={openPopup} />
              <div className="project-details">
                <h3>{selectedProject.title}</h3>
                <div className='Ptools'>
                  {selectedProject.tools.map((tool, index) => (
                    <span key={index} className='tool'>
                      {tool}
                    </span>
                  ))}
                </div>
                <button onClick={openPopup}>Descripción</button>
              </div>
            </div>
            <div className="navigation-buttons">
              <button onClick={handlePrevious}>←</button>
              <button onClick={handleNext}>→</button>
            </div>
          </div>
        </div>
        <div className='addTitle'>
          <h2>Herramientas utilizadas</h2>
          <Tools />
        </div>
      </div>
      {selectedProject && (
        <Popup
          isOpen={isPopupOpen}
          onClose={closePopup}
          title={selectedProject.title}
          description={selectedProject.description}
          extra={selectedProject.extra}
          tools={selectedProject.tools}
          link={selectedProject.link}
          github={selectedProject.github}
        />
      )}
    </section>
  );
};

export default Projects;

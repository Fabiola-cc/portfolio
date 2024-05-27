import './projects.css';

const projectsData = [
  {
    title: 'Blog de lectura',
    description: 'Rincón de lectura es un pequeño blog donde se comentan diversos libros y se muestra su sinópsis para atraer a los lectores.',
    extra: 'Por razones prácticas tiene un acceso limitado pero puedes utilizar el usuario: admin y contraseña: admin_blog_75',
    image: '/src/assets/Blog.png',
    link: 'https://rincondelectura.netlify.app/',
    github: 'https://github.com/Fabiola-cc/Blog-Proyect',
  },
  {
    title: 'Calculadora',
    description: 'Un ejercicio común, en este caso enfocado en trabajar el uso de vitests y storybooks',
    image: '/src/assets/calculadora.png',
    link: 'https://calculator-22787.netlify.app/',
    github: 'https://github.com/Fabiola-cc/calculator_testing',
  },
  // Añade más proyectos según sea necesario
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Proyectos Trabajados</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-description">{project.extra}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src='/src/assets/external-link.png' alt="External Link" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <img src='/src/assets/github-mark.svg' alt="GitHub Link" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

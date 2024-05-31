import './tools.css';

import htmlIcon from '../../assets/tools/html-icon.png';
import cssIcon from '../../assets/tools/css-icon.png';
import jsIcon from '../../assets/tools/js-icon.png';
import reactIcon from '../../assets/tools/react-icon.png';
import viteIcon from '../../assets/tools/vite-icon.png';
import nodeIcon from '../../assets/tools/node-icon.png';
import sbIcon from '../../assets/tools/sb-icon.png';
import javaIcon from '../../assets/tools/java-icon.png';
import pythonIcon from '../../assets/tools/python-icon.png';
import kotlinIcon from '../../assets/tools/kotlin-icon.png';
import mysqlIcon from '../../assets/tools/mysql-icon.png';
import postgresIcon from '../../assets/tools/postgres-icon.png';
import githubIcon from '../../assets/github-mark.svg';
import figmaIcon from '../../assets/tools/figma-icon.png';

const FrontEnd = [
    {name: 'HTML', icon: htmlIcon}, {name: 'CSS', icon: cssIcon},
    {name: 'JS', icon: jsIcon}, {name: 'REACT', icon: reactIcon},
    {name: 'VITE', icon: viteIcon},
];

const BackEnd = [
    {name: 'NODE JS', icon: nodeIcon}, {name: 'STORYBOOK', icon: sbIcon},
    {name: 'JAVA', icon: javaIcon}, {name: 'PYTHON', icon: pythonIcon},
    {name: 'KOTLIN', icon: kotlinIcon},
];

const DB = [
    {name: 'MYSQL', icon: mysqlIcon}, {name: 'POSTGRESQL', icon: postgresIcon},
];

const otros = [
    {name: 'GITHUB', icon: githubIcon}, {name: 'FIGMA', icon: figmaIcon},
];

const Tools = () => {
    return (
        <section id="tools">
            <div className="tools-container">
                <div className='frontend'>
                    <h4>Frontend</h4>
                    {FrontEnd.map((tool, index) => (
                        <span key={index} className='tool'>
                            <img src={tool.icon} alt={tool.name} />
                            <p>{tool.name}</p>
                        </span>
                    ))}
                </div>
                <div className='backend'>
                    <h4>Backend</h4>
                    {BackEnd.map((tool, index) => (
                        <span key={index} className='tool'>
                            <img src={tool.icon} alt={tool.name} />
                            <p>{tool.name}</p>
                        </span>
                    ))}
                </div>
                <div className='database'>
                    <h4>Bases de datos</h4>
                    {DB.map((tool, index) => (
                        <span key={index} className='tool'>
                            <img src={tool.icon} alt={tool.name} />
                            <p>{tool.name}</p>
                        </span>
                    ))}
                </div>
                <div className='others'>
                    <h4>Otras herramientas</h4>
                    {otros.map((tool, index) => (
                        <span key={index} className='tool'>
                            <img src={tool.icon} alt={tool.name} />
                            <p>{tool.name}</p>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;

import '../projects.css';
import htmlIcon from '../../assets/html-icon.png';
import cssIcon from '../../assets/css-icon.png';
import jsIcon from '../../assets/js-icon.png';
import reactIcon from '../../assets/react-icon.png';
import viteIcon from '../../assets/vite-icon.png';

const Tools = () => {
    return (
        <section id="tools">
            <h2>Herramientas que he utilizado</h2>
            <div className="tools-container">
                <div className="tool">
                    <img src={htmlIcon} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="tool">
                    <img src={cssIcon} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className="tool">
                    <img src={jsIcon} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="tool">
                    <img src={reactIcon} alt="React" />
                    <p>JavaScript</p>
                </div>
                <div className="tool">
                    <img src={viteIcon} alt="Vite" />
                    <p>JavaScript</p>
                </div>
            </div>
        </section>
    );
};

export default Tools;

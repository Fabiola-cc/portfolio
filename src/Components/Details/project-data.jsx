import PropTypes from 'prop-types';
import './project-data.css';

const Popup = ({ isOpen, onClose, title, description, extra, tools, link, github }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>X</button>
                <div className="project-detail">
                    <h3>{title}</h3>
                    <div className='Ptools'>
                        {tools.map((tool, index) => (
                            <span key={index} className='tool'>
                                {tool}
                            </span>
                        ))}
                    </div>
                    <p>{description}</p>
                    <p>{extra}</p>
                    <div className='buttonArea'>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src='/src/assets/external-link.png' alt='external link' />
                        </a>
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <img src='/src/assets/github-mark.svg' alt='github'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    extra: PropTypes.string,
    tools: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

export default Popup;

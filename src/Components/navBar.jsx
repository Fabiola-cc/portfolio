import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './navBar.css';

const Navbar = ({ homeRef, aboutRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref, event) => {
    event.preventDefault();
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after click (optional)
  };

  const handleScrollEvent = () => {
    const sections = [
      { ref: homeRef, name: 'home' },
      { ref: aboutRef, name: 'about-me' },
      { ref: projectsRef, name: 'projects' },
      { ref: contactRef, name: 'contact' },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const section of sections) {
      const element = section.ref.current;
      if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
        setActiveSection(section.name);
        break;
      }
    }
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent(); // Check position on mount

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  },);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <a
          href="#"
          onClick={(e) => handleScroll(homeRef, e)}
          className={activeSection === 'home' ? 'active' : ''}
        >
          FC
        </a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <a
          href="#"
          className={`navbar-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => handleScroll(homeRef, e)}
        >
          Home
        </a>
        <a
          href="#"
          className={`navbar-item ${activeSection === 'about-me' ? 'active' : ''}`}
          onClick={(e) => handleScroll(aboutRef, e)}
        >
          About Me
        </a>
        <a
          href="#"
          className={`navbar-item ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={(e) => handleScroll(projectsRef, e)}
        >
          Projects
        </a>
        <a
          href="#"
          className={`navbar-item ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleScroll(contactRef, e)}
        >
          Contact
        </a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  homeRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  projectsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
};

export default Navbar;

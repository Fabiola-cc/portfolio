import { useState } from 'react';
import './navBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#">FC</a>
      </div>
      <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
        <a href="#" className="navbar-item">Home</a>
        <a href="#" className="navbar-item">About Me</a>
        <a href="#" className="navbar-item">Projects</a>
        <a href="#" className="navbar-item">Contact</a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;

import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <nav className="navbar">
      <div className="logo" onClick={scrollToTop}>
        <img 
          src={logo} 
          alt="Rotasn Logo" 
          className="logo-image"
        />
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
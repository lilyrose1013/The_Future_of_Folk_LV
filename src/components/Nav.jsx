import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import eestiLogo from '../images/eesti.png';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">The Future of Estonian Folk: Clothing</span>
          <img src={eestiLogo} alt="Eesti Logo" className="logo-image" />
        </Link>
        
        <button 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/posts" className={`nav-link ${isActive('/posts') ? 'active' : ''}`}>Overview</Link>
          </li>
          <li className="nav-item">
            <Link to="/documentation" className={`nav-link ${isActive('/documentation') ? 'active' : ''}`}>Documentation</Link>
          </li>
          <li className="nav-item">
            <Link to="/ideation" className={`nav-link ${isActive('/ideation') ? 'active' : ''}`}>Ideation</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/sources" className={`nav-link ${isActive('/sources') ? 'active' : ''}`}>Sources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

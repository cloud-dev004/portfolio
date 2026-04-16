import { useState, useEffect, useCallback } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track if the user has scrolled down the page
  // Used to apply a background to the navbar for better visibility
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();

  // Handle scroll events to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      // Threshold of 20px determines when the navbar becomes opaque
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup event listener on component unmount to prevent memory leaks
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll position and close menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    
    // Ensure the new page starts at the top securely
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Adds a smooth scrolling effect
      });
    } catch (error) {
      // Fallback for older browsers that don't support the options object
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // Depend on pathname specifically to avoid unnecessary triggers

  // Memoize handlers to prevent unnecessary re-renders of child components
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navigation Bar */}
      <nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`.trim()} 
        id="navbar"
      >
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          Portfolio
        </NavLink>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`.trim()} id="nav-links">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Hire Me</NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className={`hamburger ${isMenuOpen ? 'open' : ''}`.trim()}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          role="button"
          tabIndex={0}
          id="hamburger"
          onKeyDown={(e) => {
            // Allow keyboard users to toggle the menu
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay to dim background when mobile menu is open */}
      {isMenuOpen && (
        <div
          className="mobile-overlay open"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Main Content Routing */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Fallback route for 404 Not Found scenarios */}
          <Route path="*" element={<Home />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;

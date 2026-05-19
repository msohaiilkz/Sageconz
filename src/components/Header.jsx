import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/sectors?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Clients', path: '/clients' },
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled glass' : 'glass'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container header-content">
        <Link to="/" className="logo">
          Sage<span>conz</span>
        </Link>

        <div className="nav-desktop">
          <nav>
            <ul className="nav-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="search-desktop">
            <form className="search-box" onSubmit={handleSearch}>
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search sectors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul>
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={location.pathname === link.path ? 'active-mobile' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="search-box mobile-search" onSubmit={handleSearch}>
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search sectors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

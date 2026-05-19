import { useState, useEffect, createContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SectorsPage from './pages/SectorsPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ThemeContext = createContext(null);

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(curr => curr === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app-container" data-theme={theme}>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

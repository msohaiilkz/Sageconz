import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sectorsData } from '../data/sectors';
import AnimatedText from '../components/AnimatedText';
import PageHero from '../components/PageHero';

const SectorsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [filteredSectors, setFilteredSectors] = useState(sectorsData);

  useEffect(() => {
    if (query) {
      const lowerQ = query.toLowerCase();
      setFilteredSectors(
        sectorsData.filter(s => 
          s.title.toLowerCase().includes(lowerQ) || 
          s.desc.toLowerCase().includes(lowerQ) ||
          s.category.toLowerCase().includes(lowerQ)
        )
      );
    } else {
      setFilteredSectors(sectorsData);
    }
  }, [query]);

  return (
    <div className="page-container" style={{ minHeight: '80vh' }}>
      <PageHero 
        title="Sectors & Courses" 
        subtitle="Explore Our Expertise"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
      />
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <span className="section-subtitle">Our Disciplines</span>
          <AnimatedText text="Explore Sectors" className="section-title" />
          {query && (
            <p style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginTop: '1rem' }}>
              Search results for: "{query}"
            </p>
          )}
        </div>

        {filteredSectors.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
            <h3>No sectors found matching your search.</h3>
          </div>
        ) : (
          <div className="modern-sectors-grid">
            <AnimatePresence>
              {filteredSectors.map((sector) => (
                <motion.div 
                  key={sector.id}
                  className="modern-sector-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <div className="sector-image">
                    <img src={sector.image} alt={sector.title} />
                    <span className="sector-badge">{sector.category}</span>
                  </div>
                  <div className="sector-content">
                    <h3>{sector.title}</h3>
                    <p>{sector.desc}</p>
                    <button className="btn btn-primary" style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '0.8rem 1.5rem', fontSize: '0.9rem' }}>
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorsPage;

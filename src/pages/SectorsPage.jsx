import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sectorsData } from '../data/sectors';
import AnimatedText from '../components/AnimatedText';
import PageHero from '../components/PageHero';

const SectorsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const filteredSectors = useMemo(() => {
    if (!query) {
      return sectorsData;
    }

    const lowerQuery = query.toLowerCase();

    return sectorsData.filter(
      (sector) =>
        sector.title.toLowerCase().includes(lowerQuery) ||
        sector.desc.toLowerCase().includes(lowerQuery) ||
        sector.category.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  return (
    <div className="page-container" style={{ minHeight: '80vh' }}>
      <PageHero 
        title="Our Sectors" 
        subtitle="Sageconz Industry Coverage"
        image="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1920&q=80" 
      />
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <span className="section-subtitle">Sectors</span>
          <AnimatedText text="Our Sectors Existence" className="section-title" />
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
              {filteredSectors.map((sector) => {
                const Icon = sector.icon;

                return (
                  <motion.div
                    key={sector.id}
                    className="modern-sector-card glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                  >
                    <div className="sector-image sector-icon-panel">
                      <div className="sector-icon-shell" aria-hidden="true">
                        <Icon />
                      </div>
                      <span className="sector-badge">{sector.category}</span>
                    </div>
                    <div className="sector-content">
                      <h3>{sector.title}</h3>
                      <p>{sector.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorsPage;

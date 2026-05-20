import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { sectorsData } from '../data/sectors';
import './Sectors.css';

gsap.registerPlugin(ScrollTrigger);

const Sectors = ({ limit }) => {
  const containerRef = useRef(null);
  const displayData = limit ? sectorsData.slice(0, limit) : sectorsData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.accordion-card');

      cards.forEach((card, index) => {
        // We don't animate the last card scaling down
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.9,
          opacity: 0.4,
          scrollTrigger: {
            trigger: card,
            start: 'top 10%', // When this card hits the sticky position
            endTrigger: cards[index + 1], // Until the next card hits
            end: 'top 15%', 
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="sectors" id="sectors" ref={containerRef} style={{ padding: '100px 0', overflow: 'visible' }}>
      <div className="container">
        <div className="sectors-header" style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <span className="section-subtitle">Sectors</span>
          <AnimatedText text="Our Sectors Existence" className="section-title" />
        </div>
        
        <div className="accordions-wrapper">
          {displayData.map((sector, index) => {
            const Icon = sector.icon;

            return (
              <div
                key={sector.id}
                className="accordion-card"
                style={{ top: `calc(10% + ${index * 20}px)` }} // Slight offset so they look like a deck of cards
              >
                <div className="accordion-header">
                  <h3>{sector.title}</h3>
                  <span className="sector-badge">{sector.category}</span>
                </div>

                <div className="accordion-content">
                  <div className="accordion-text">
                    <p>{sector.desc}</p>
                    <Link to="/sectors" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                      View Sector List
                    </Link>
                  </div>
                  <div className="accordion-image" aria-hidden="true">
                    <div className="accordion-icon-shell">
                      <Icon />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {limit && (
          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <Link to="/sectors" className="btn btn-secondary glass" style={{ display: 'inline-flex' }}>
              View All Sectors
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sectors;

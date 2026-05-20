import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import { clientsData } from '../data/clients';
import PageHero from '../components/PageHero';
import AnimatedText from '../components/AnimatedText';
import './ClientsPage.css';

gsap.registerPlugin(ScrollTrigger);

const ClientsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.clients-stats-grid',
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef} style={{ minHeight: '80vh' }}>
      <PageHero 
        title="Our Global Partners" 
        subtitle="Trusted Worldwide"
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
      />
      
      <div className="container clients-page-inner">
        <div className="section-header-left" style={{ maxWidth: '800px', marginBottom: '6rem' }}>
          <span className="section-subtitle">Our Impact</span>
          <AnimatedText text="Driving Global Excellence" className="section-title" />
        </div>

        <div className="clients-stats-grid">
          {[
            { value: "500+", label: "Corporate Partners" },
            { value: "10k+", label: "Professionals Trained" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "50+", label: "Countries Reached" }
          ].map((stat, idx) => (
            <div key={idx} className="stat-card">
              <h3 className="stat-number">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <ClientsSection />

      {/* Modern Logo Grid */}
      <div className="container logos-section">
        <div className="section-header-left logos-header">
          <span className="section-subtitle">Network</span>
          <h2 className="section-title">Forward-Thinking Enterprises</h2>
        </div>

        <div className="logos-grid">
          {clientsData.map((client, idx) => (
            <div key={idx} className="logo-box glass-card client-card">
              <img src={client.logo} alt={client.name} className="client-card-art" />
              <div className="client-card-copy">
                <h3>{client.name}</h3>
                <p>{client.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Ultra Minimal CTA */}
      <div className="container cta-section">
        <div className="cta-block">
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '60%', height: '200%', background: 'radial-gradient(circle, rgba(132,155,115,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
            <h2 className="cta-title">Let's Build The Future Together.</h2>
            <p className="cta-desc">Partner with us to redefine learning within your organization.</p>
          </div>

          <motion.button
            className="btn btn-primary"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 3rem',
              fontSize: '1.2rem',
              borderRadius: '50px',
              background: 'var(--text-primary)',
              color: 'var(--bg-color)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Conversation <ArrowUpRight size={24} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;

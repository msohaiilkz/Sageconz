import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import ClientsSection from '../components/ClientsSection';
import PageHero from '../components/PageHero';
import AnimatedText from '../components/AnimatedText';
import './ClientsPage.css';

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { name: "Oracle", url: "oracle.com" },
  { name: "IBM", url: "ibm.com" },
  { name: "Salesforce", url: "salesforce.com" },
  { name: "SAP", url: "sap.com" },
  { name: "Accenture", url: "accenture.com" },
  { name: "Deloitte", url: "deloitte.com" }
];

const ClientsPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      gsap.from('.logo-box', {
        scrollTrigger: {
          trigger: '.logos-grid',
          start: 'top 85%'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.5)'
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
        <div className="section-header-left" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle">Network</span>
          <h2 className="section-title">Forward-Thinking Enterprises</h2>
        </div>

        <div className="logos-grid">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="logo-box glass-card" style={{
              height: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              padding: '2rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--glass-border)'}
            >
              <img 
                src={`https://logo.clearbit.com/${logo.url}`} 
                alt={logo.name} 
                style={{ height: '50px', width: '100%', objectFit: 'contain', filter: 'grayscale(100%) brightness(200%)' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerText = logo.name;
                  e.target.parentElement.style.fontSize = '1.5rem';
                  e.target.parentElement.style.fontWeight = '800';
                  e.target.parentElement.style.color = 'var(--text-secondary)';
                }}
              />
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

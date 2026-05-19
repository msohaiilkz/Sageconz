import React from 'react';
import { motion } from 'framer-motion';
import { Box, Hexagon, Triangle, Circle, Command, Infinity, Aperture, Globe } from 'lucide-react';
import './Clients.css';

const clients = [
  { name: "TechCorp", Icon: Box },
  { name: "FinanceHub", Icon: Hexagon },
  { name: "GrowthGen", Icon: Triangle },
  { name: "InnovateX", Icon: Command },
  { name: "GlobalSynergy", Icon: Globe },
  { name: "NextEra", Icon: Infinity },
  { name: "Quantum", Icon: Aperture },
  { name: "Nexus", Icon: Circle }
];

const Clients = () => {
  return (
    <section className="clients" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="section-header-left" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <span className="section-subtitle">Trusted By</span>
          <h2 className="section-title" style={{ fontSize: '4.5rem', marginBottom: '0' }}>Prominent Clients</h2>
        </div>
        
        <div className="marquee-container">
          <motion.div 
            className="marquee"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div key={idx} className="client-logo glass" style={{ 
                padding: '1rem 2rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <client.Icon size={32} color="var(--accent-color)" strokeWidth={2.5} />
                <span style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                  {client.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

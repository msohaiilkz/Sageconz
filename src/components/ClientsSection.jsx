import { motion } from 'framer-motion';
import { clientsData } from '../data/clients';
import './Clients.css';

const ClientsSection = () => {
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
            {[...clientsData, ...clientsData].map((client, idx) => (
              <div key={idx} className="client-logo glass" style={{ 
                padding: '1rem 1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <img src={client.logo} alt={client.name} className="client-logo-art" />
                <div className="client-logo-copy">
                  <span className="client-logo-name">{client.name}</span>
                  <span className="client-logo-subtitle">{client.subtitle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

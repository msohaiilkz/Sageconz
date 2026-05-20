import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={containerRef}>
      <div className="container">
        <div className="section-header-left" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-grid">
          {/* Image Side */}
          <div className="contact-image glass-card">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Contact our team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
          </div>

          {/* Form Side */}
          <div className="contact-form glass-card">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows="5" placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--bg-color)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <motion.button 
                className="btn btn-primary" 
                style={{ marginTop: '1rem', padding: '1rem 2rem', alignSelf: 'flex-start' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.preventDefault()}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

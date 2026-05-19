import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import PageHero from '../components/PageHero';
import AnimatedText from '../components/AnimatedText';
import './ContactPage.css';

const ContactPage = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-info-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });
      
      gsap.from('.contact-form-container', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef} style={{ minHeight: '80vh' }}>
      <PageHero 
        title="Get In Touch" 
        subtitle="Contact Us"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
      />
      
      <div className="container contact-page-body">
        <div className="contact-main-grid">
          
          {/* Contact Information */}
          <div className="contact-info">
            <div className="section-header-left" style={{ marginBottom: '3rem' }}>
              <span className="section-subtitle">Reach Out</span>
              <AnimatedText text="Let's Start a Conversation" className="section-title" style={{ fontSize: '3.5rem' }} playOnMount={true} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
              Whether you're looking to transform your corporate workforce or have questions about our premium courses, our team is ready to help.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="contact-info-item glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', borderRadius: '20px' }}>
                <div style={{ background: 'var(--accent-color)', padding: '1rem', borderRadius: '50%', color: 'var(--bg-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700' }}>Global Headquarters</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>123 Innovation Drive<br/>Tech District, NY 10001</p>
                </div>
              </div>

              <div className="contact-info-item glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', borderRadius: '20px' }}>
                <div style={{ background: 'var(--accent-color)', padding: '1rem', borderRadius: '50%', color: 'var(--bg-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700' }}>Email Us</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>partnerships@sageconz.com<br/>support@sageconz.com</p>
                </div>
              </div>

              <div className="contact-info-item glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', borderRadius: '20px' }}>
                <div style={{ background: 'var(--accent-color)', padding: '1rem', borderRadius: '50%', color: 'var(--bg-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700' }}>Call Us</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container contact-form-card glass-card">
            <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(132,155,115,0.2) 0%, transparent 70%)', zIndex: 0 }}></div>
            
            <form style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="contact-name-row">
                <div className="contact-name-field">
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>First Name</label>
                  <input type="text" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
                <div className="contact-name-field">
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Last Name</label>
                  <input type="text" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Subject / Interest</label>
                <select style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none', appearance: 'none' }}>
                  <option value="" style={{ background: 'var(--bg-color)' }}>Select an option</option>
                  <option value="corporate" style={{ background: 'var(--bg-color)' }}>Corporate Training</option>
                  <option value="courses" style={{ background: 'var(--bg-color)' }}>Individual Courses</option>
                  <option value="partnership" style={{ background: 'var(--bg-color)' }}>Partnership</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows="5" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <motion.button 
                className="btn btn-primary" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem', borderRadius: '12px' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => e.preventDefault()}
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;

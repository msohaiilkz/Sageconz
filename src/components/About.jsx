import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';
import AnimatedText from './AnimatedText';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation using mask/clip-path
      gsap.fromTo('.about-image-inner', 
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
          clipPath: 'inset(0% 0 0 0)',
          scale: 1,
          duration: 1.5,
          ease: 'power4.inOut'
        }
      );
      
      // Feature list stagger
      gsap.fromTo('.feature-list li', 
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.feature-list',
            start: 'top 80%',
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)'
        }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const features = [
    "Expert-led interactive sessions",
    "Tailored corporate training programs",
    "Flexible learning schedules",
    "Comprehensive study materials"
  ];

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-inner">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Sageconz" />
              <div className="image-overlay glass-card">
                <h3>10+ Years</h3>
                <p>Of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">About Us</span>
            <AnimatedText text="Empowering Growth Through Education" className="section-title" />
            <p className="about-text" style={{ marginTop: '1rem' }}>
              We deliver tailored solutions that address the desire for professional and personal development. Our platform connects you with scholar teachers and industry experts to bring you the best learning experience possible.
            </p>
            
            <ul className="feature-list" style={{ marginTop: '2rem' }}>
              {features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={24} className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <motion.a 
              href="#sectors"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'inline-flex', marginTop: '3rem' }}
            >
              Explore Sectors
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Play } from 'lucide-react';
import AnimatedText from './AnimatedText';
import './Hero.css';

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-elements">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      
      <div className="container hero-content" ref={textRef}>
        <div className="hero-text-wrapper">
          <span className="hero-subtitle">Our Courses</span>
          <h1 className="hero-title">
            <span>With</span> <span>Scholar</span> <span>Teachers,</span><br/>
            <span>Everything</span> <span>Is</span> <span>Easier</span>
          </h1>
          <p className="hero-description">
            Sageconz brings you premium online educational resources and tailored solutions that address the desire to learn and grow.
          </p>
          
          <div className="hero-buttons">
            <motion.a 
              href="#about"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.a>
            <motion.a 
              href="#about"
              className="btn btn-secondary glass"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="play-icon">
                <Play size={16} fill="currentColor" />
              </div>
              What's Sageconz?
            </motion.a>
          </div>
        </div>
        
        <motion.div 
          className="hero-image glass-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

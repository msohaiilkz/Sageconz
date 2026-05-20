import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimatedText from './AnimatedText';
import './PageHero.css';

const PageHero = ({ title, subtitle, image }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background image parallax
      gsap.fromTo('.page-hero-bg', 
        { y: -50, scale: 1.1 },
        {
          y: 50,
          scrollTrigger: {
            trigger: '.page-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        }
      );
      
      // Entrance animation for bg
      gsap.from('.page-hero-bg', {
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
      
      // Subtitle fade in
      gsap.from('.page-hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="page-hero" ref={heroRef}>
      <div 
        className="page-hero-bg" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="page-hero-overlay"></div>
      
      <div className="container page-hero-content">
        {subtitle && <span className="page-hero-subtitle section-subtitle" style={{ color: 'var(--accent-color)' }}>{subtitle}</span>}
        <AnimatedText text={title} className="page-hero-title" playOnMount={true} />
      </div>
    </section>
  );
};

export default PageHero;

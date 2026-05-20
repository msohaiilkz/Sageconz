import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import PageHero from '../components/PageHero';
import '../components/About.css';
import gsap from 'gsap';

const AboutPage = () => {
  const pageRef = useRef(null);

  const features = [
    "Expert-led interactive sessions",
    "Tailored corporate training programs",
    "Flexible learning schedules",
    "Comprehensive study materials",
    "24/7 dedicated support team",
    "Global networking opportunities"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content > *', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });
      gsap.from('.feature-list li', {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8
      });
      gsap.from('.about-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="page-container" ref={pageRef}>
      <PageHero  
        title="About Us" 
        subtitle="Discover Our Story"
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
      />
      <div className="container" style={{ paddingBottom: '6rem' }}>
        
        <div className="about-grid">
          <div className="about-content">
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-subtitle">Our Mission</span>
              <AnimatedText text="Empowering Growth" className="section-title" />
            </div>
            <p className="about-text" style={{ marginBottom: '1.5rem' }}>
              Sageconz was founded with a single goal: to deliver premium educational solutions and tailored corporate training for the modern world. We address the desire for continuous professional and personal development by connecting you with top-tier scholar teachers and industry experts.
            </p>
            <p className="about-text" style={{ marginBottom: '2rem' }}>
              Whether you are an individual looking to upskill in IT, Finance, or Design, or an enterprise seeking comprehensive training programs for your teams, Sageconz provides the platform, resources, and mentorship you need to succeed in today's competitive landscape.
            </p>
            
            <ul className="feature-list">
              {features.map((feature, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={24} className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="about-image">
            <div className="about-image-inner" style={{ clipPath: 'none' }}>
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="About Sageconz Team" />
              <div className="image-overlay glass-card">
                <h3>Our Mission</h3>
                <p>Empowerment through learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

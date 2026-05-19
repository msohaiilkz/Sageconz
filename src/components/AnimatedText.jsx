import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className, style, playOnMount = false }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animConfig = {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out'
      };

      if (playOnMount) {
        gsap.to('.gsap-word', { ...animConfig, delay: 0.3 });
      } else {
        gsap.to('.gsap-word', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%',
          },
          ...animConfig
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [playOnMount]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {text.split(' ').map((word, idx) => (
        <span key={idx} style={{ display: 'inline-block', overflow: 'hidden', paddingRight: '0.25em', verticalAlign: 'bottom' }}>
          <span 
            className="gsap-word" 
            style={{ 
              display: 'inline-block', 
              transform: 'translateY(120%) rotate(5deg)', 
              opacity: 0,
              transformOrigin: 'left bottom'
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;

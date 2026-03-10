import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setIsVisible(scrollTop > 400);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const circumference = 2 * Math.PI * 20;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(1,36,1,0.3)" strokeWidth="2"/>
            <circle
              cx="24" cy="24" r="20"
              fill="none" stroke="#c8a84b" strokeWidth="2"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * scrollProgress) / 100}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.1s' }}
            />
          </svg>
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: '#012401' }}>
            <ArrowUp className="w-4 h-4 text-white" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

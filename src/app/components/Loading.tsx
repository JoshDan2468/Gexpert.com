import { motion } from 'motion/react';

export const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: '#012401' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        {/* Logo mark */}
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="40,4 76,22 76,58 40,76 4,58 4,22"
              fill="none" stroke="rgba(200,168,75,0.3)" strokeWidth="1.5"/>
            <polygon points="40,14 66,28 66,52 40,66 14,52 14,28"
              fill="none" stroke="rgba(200,168,75,0.5)" strokeWidth="1.5"/>
            <circle cx="40" cy="40" r="8" fill="#c8a84b"/>
            <line x1="40" y1="14" x2="40" y2="32" stroke="#c8a84b" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="40" y1="48" x2="40" y2="66" stroke="#c8a84b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.div
          style={{ fontFamily: 'Syne, sans-serif' }}
          className="text-white text-lg font-bold tracking-widest uppercase mb-3"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Global Experts
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, #012401, #c8a84b)' }}
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
};

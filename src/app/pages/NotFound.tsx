import { motion } from 'motion/react';
import { Link } from 'react-router';

export const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center" style={{ background: '#080d08' }}>
    <div className="text-center px-6">
      <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
        <div className="text-[120px] font-black leading-none mb-6" style={{ color: 'rgba(200,168,75,0.15)', fontFamily: 'Syne, sans-serif' }}>404</div>
        <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Page Not Found</h1>
        <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
          style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
          Return Home
        </Link>
      </motion.div>
    </div>
  </div>
);

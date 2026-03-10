import { motion } from 'motion/react';
import { ParticlesBackground } from '../components/ParticlesBackground';
const SL = ({ text }: { text: string }) => (<div className="flex items-center gap-3 mb-4"><span className="w-8 h-px" style={{ background: '#c8a84b' }} /><span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{text}</span></div>);
export const QualityPolicy = () => (
  <div style={{ background: '#080d08' }}>
    <section className="relative pt-32 pb-24" style={{ background: 'linear-gradient(135deg, #012401, #024502)' }}>
      <ParticlesBackground count={20} color="rgba(200,168,75,0.4)" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <SL text="Our Commitment" /><h1 className="font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)' }}>Quality Policy</h1>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>Global Experts Consultoria is committed to delivering services that consistently meet client requirements and applicable regulatory standards. Our ISO 9001:2015 certified quality management system ensures excellence at every stage of project delivery.</p>
        </motion.div>
      </div>
    </section>
  </div>
);

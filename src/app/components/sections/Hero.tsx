import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ChevronDown } from 'lucide-react';

const CountUp = ({ end, duration = 2.5 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <>{count}</>;
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #012401 0%, #021702 40%, #080d08 100%)' }}>
      {/* Grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(200,168,75,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Glow orbs */}
      <motion.div className="absolute top-20 right-20 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200,168,75,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(1,100,1,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest"
            style={{ background: 'rgba(200,168,75,0.1)', border: '1px solid rgba(200,168,75,0.25)', color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#c8a84b' }} />
            World Class Consultancy Services
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="text-white leading-[1.05] mb-6 font-black"
            style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(42px, 6.5vw, 88px)' }}>
            Providing World Class<br />
            <span style={{ color: '#c8a84b' }}>Engineering, Project</span><br />
            <span className="text-white">Management &amp; Consultancy</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="text-lg leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans, sans-serif' }}>
            Incorporated to engage in the provision of Engineering, Project Management, Market Research, Bid Administration, Health, Information Technology, Registration, Procurement, Automation, Product Management and other services globally.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mb-16">
            <Link to="/about"
              className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all duration-200"
              style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.35)' }}>
              About Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact"
              className="flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-200"
              style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', fontFamily: 'Syne, sans-serif' }}>
              Contact Us
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(200,168,75,0.12)', background: 'rgba(200,168,75,0.06)' }}>
            {[
              { label: 'Years Combined Experience', value: 100, suffix: '+' },
              { label: 'Countries with Presence', value: 10, suffix: '+' },
              { label: 'Key Markets Served', value: 12, suffix: '' },
              { label: 'Client Satisfaction', value: 98, suffix: '%' },
            ].map((stat, i) => (
              <div key={stat.label} className="px-6 py-5 text-center" style={{ background: 'rgba(1,36,1,0.4)' }}>
                <div className="text-2xl md:text-3xl font-black" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>
                  <CountUp end={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Syne Mono, monospace' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Presence pills */}
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
        className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-2 z-10">
        {['🇳🇬 Lagos, Nigeria HQ', '🇬🇭 Accra, Ghana', '🇸🇱 Freetown, SL', '🇲🇿 Maputo, MZ', '🇺🇸 Houston, USA', '🇳🇦 Windhoek, NA'].map((o, i) => (
          <motion.div key={o} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + i * 0.07 }}
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{ background: 'rgba(1,36,1,0.7)', border: '1px solid rgba(200,168,75,0.12)', color: 'rgba(255,255,255,0.65)', fontFamily: 'DM Sans, sans-serif' }}>
            {o}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Syne Mono, monospace' }}>Scroll</span>
        <ChevronDown className="w-4 h-4" style={{ color: 'rgba(200,168,75,0.5)' }} />
      </motion.div>
    </section>
  );
};

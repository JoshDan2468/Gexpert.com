import { motion } from 'motion/react';
import { useScrollAnimation, useCountUp } from '../../hooks/useScrollAnimation';
import type { Stat } from '../../types';

interface AnimatedCounterProps {
  stats: Stat[];
}

export const AnimatedCounter = ({ stats }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative py-24 overflow-hidden"
      style={{ background: '#012401' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,168,75,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 rounded-2xl overflow-hidden"
          style={{
            gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
            background: 'rgba(200,168,75,0.06)',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="relative text-center p-10 group transition-colors duration-300"
              style={{
                borderRight: index < stats.length - 1 ? '1px solid rgba(200,168,75,0.1)' : 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,168,75,0.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              <div
                className="font-bold leading-none mb-3 flex items-end justify-center"
                style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b', fontSize: 'clamp(44px, 5vw, 68px)' }}
              >
                {stat.prefix}
                <CounterValue end={stat.value} isVisible={isVisible} />
                {stat.suffix && <span style={{ fontSize: '0.5em', marginBottom: '6px' }}>{stat.suffix}</span>}
              </div>
              <div className="mx-auto mb-3" style={{ width: '30px', height: '1px', background: 'rgba(200,168,75,0.4)' }} />
              <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterValue = ({ end, isVisible }: { end: number; isVisible: boolean }) => {
  const count = useCountUp(end, 2200, isVisible);
  return <span>{count.toLocaleString()}</span>;
};

import { motion } from 'motion/react';
import { useMemo } from 'react';

interface ParticlesBackgroundProps {
  count?: number;
  className?: string;
  color?: string;
}

export const ParticlesBackground = ({ count = 40, className = '', color = 'rgba(200,168,75,0.6)' }: ParticlesBackgroundProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 8,
      moveX: (Math.random() - 0.5) * 30,
      moveY: -(Math.random() * 60 + 20),
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: color,
          }}
          animate={{
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

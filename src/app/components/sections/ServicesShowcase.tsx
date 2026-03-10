import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const services = [
  {
    num: '01', icon: '⚙️',
    title: 'Engineering Services',
    desc: 'Complete EPC activities from feasibility, Basic Engineering, FEED, Detail Engineering, Procurement, and Construction. Serving oil & gas, power, petrochemical and infrastructure sectors.',
    path: '/engineering-services',
  },
  {
    num: '02', icon: '📋',
    title: 'Business Processes & Advisory',
    desc: 'Business advisory services including new business setup, benchmark studies, process review, risk assessment, strategy development, registration and tender assistance.',
    path: '/business-processes',
  },
  {
    num: '03', icon: '🔬',
    title: 'Research & Development',
    desc: 'Design-by-analysis engineering using FEA and CFD computational tools. Access to material testing labs and the latest CAE software for investigation and innovation.',
    path: '/research-development',
  },
  {
    num: '04', icon: '📊',
    title: 'Research & Market Intelligence',
    desc: 'Market research, consumer surveys, political opinion polls, customer satisfaction studies, and strategic analytics to empower data-driven decision-making.',
    path: '/research-market-intelligence',
  },
  {
    num: '05', icon: '🛢️',
    title: 'Oil and Gas Management',
    desc: 'Value chain cost management, oilfield technical audits, CAPEX/OPEX verification, production monitoring, downstream marketing, and local content development.',
    path: '/oil-gas-management',
  },
  {
    num: '06', icon: '🏗️',
    title: 'Project Management & Execution',
    desc: 'End-to-end project planning, scheduling, cost control, commissioning support, contracts administration, and Owner\'s Engineer services across all project types.',
    path: '/project-management',
  },
];

export const ServicesShowcase = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-28" style={{ background: '#080d08' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Our Specialities &<br /><span style={{ color: '#c8a84b' }}>Popular Favourites</span>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-white transition-colors flex-shrink-0"
            style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(200,168,75,0.06)', border: '1px solid rgba(200,168,75,0.06)', borderRadius: '20px', overflow: 'hidden' }}>
          {services.map((service, i) => (
            <motion.div key={service.num}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.08 }}>
              <Link to={service.path}
                className="block p-8 h-full group transition-colors duration-300 relative overflow-hidden"
                style={{ background: 'rgba(8,13,8,0.97)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(1,36,1,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(8,13,8,0.97)';
                }}>
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, #c8a84b, rgba(200,168,75,0.3))', scaleX: 0, transformOrigin: 'left' }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }} />
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-[11px] font-mono font-bold" style={{ color: 'rgba(200,168,75,0.4)', fontFamily: 'Syne Mono, monospace' }}>{service.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c8a84b] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{service.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

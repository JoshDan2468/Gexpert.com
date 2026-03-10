import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PageHeader = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Our Services / {breadcrumb}</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

export const ResearchDevelopment = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Research & Development" breadcrumb="Research & Development" />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Engineering Research & Development</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Innovation Through <span style={{ color: '#c8a84b' }}>Science & Engineering</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC's focus is on providing design-by-analysis engineering guidance and advice with the use of computational tools such as Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD), and access to material testing laboratories.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Using the latest computer aided engineering design software and sound engineering science, we investigate and innovate for you.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Construction activities are driven by Client's demands and the process includes: Costs estimation, Time schedule, Resources Quality, Communication Risk, Construction planning, Field procurement, Equipment installation, Commissioning, Start-up support, and Training.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Construction Process</h3>
              <ul className="space-y-3">
                {['Costs estimation', 'Time schedule management', 'Resources Quality control', 'Communication Risk management', 'Construction planning', 'Field procurement', 'Equipment installation', 'Commissioning support', 'Start-up support', 'Operator training'].map(s => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="text-[#c8a84b] mt-0.5">✓</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🔬', title: 'FEA & CFD Analysis', desc: 'Advanced Finite Element Analysis and Computational Fluid Dynamics simulations to verify structural integrity and fluid behaviour under real-world conditions.' },
            { icon: '🧪', title: 'Material Testing', desc: 'Access to material testing laboratories for characterizing material properties, failure analysis, and qualification of engineering components.' },
            { icon: '💻', title: 'CAE Software', desc: 'Latest computer aided engineering design software for rapid iteration, design optimization, and virtual prototyping of complex engineering systems.' },
            { icon: '📋', title: 'Design Documentation', desc: 'The detailed design is the last step of design documentation, elaborated in detail for procurement and construction. Includes environmental protection, safety at work, health protection and fire protection requirements.' },
            { icon: '🏗️', title: 'Construction Engineering', desc: 'Translating engineering designs into actionable construction plans, managing field procurement, and providing technical oversight during build phases.' },
            { icon: '🎓', title: 'Knowledge Transfer', desc: 'Training programs to transfer engineering knowledge and best practices to client teams, building local capacity and long-term operational capability.' },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Discuss Your R&D Needs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

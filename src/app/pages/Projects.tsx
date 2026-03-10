import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Our Work</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Our Work</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

const sectors = [
  { icon: '🛢️', title: 'Oil & Gas Projects', desc: 'Oilfield technical audits, CAPEX/OPEX verification, onshore and offshore facility engineering, pipeline design and FEED studies across Nigeria and Africa.' },
  { icon: '⚡', title: 'Power & Energy Projects', desc: 'Gas turbine power plant engineering, transmission network design, renewable energy systems and grid integration projects.' },
  { icon: '🏗️', title: 'Infrastructure Projects', desc: 'Civil and structural design for transport, water and waste water treatment, industrial facilities and urban infrastructure development.' },
  { icon: '🔍', title: 'Asset Integrity Assessments', desc: 'Tank calibration, 3D laser scanning, NDT examinations and failure analysis for industrial clients using APEX FI and QENAD systems.' },
  { icon: '💻', title: 'Digitalization & Edge', desc: 'Stratus edge computing implementations, BEASY corrosion control digital twins, and CENOSCO asset integrity management rollouts.' },
  { icon: '📊', title: 'Market Research Projects', desc: 'Consumer surveys, political opinion polls, market intelligence reports and strategic analytics studies across Nigeria and West Africa.' },
];

export const Projects = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC has an extensive track record in managing a wide range of projects and sub-contractors to deliver fit-for-purpose solutions across multiple sectors and geographies.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {sectors.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center py-16 px-8 rounded-2xl" style={{ background: 'rgba(200,168,75,0.04)', border: '1px solid rgba(200,168,75,0.12)' }}>
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Have a Project in Mind?
          </h3>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC works closely with clients to fully understand their objectives and drivers in order to identify the optimal technical and commercial solutions.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Our Partners</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Our Partners</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

const partners = [
  { name: 'BEASY', category: 'Digital Twin / Corrosion', desc: 'Internationally recognised leader in computer simulation and digital twin for cathodic protection and corrosion control.' },
  { name: 'CENOSCO', category: 'Asset Integrity Management', desc: 'Brings the digital revolution to asset integrity management with cloud-based platforms for maximizing asset productivity and instrumentation safety.' },
  { name: 'STRATUS', category: 'Edge Computing', desc: 'Leading provider of edge computing platforms delivering simple, protected, and autonomous solutions for always-on industrial environments.' },
  { name: 'EXERTHERM', category: 'Thermal Monitoring', desc: 'Provider of Continuous Thermal Monitoring (CTM) technology — an alternative to traditional infrared thermography surveys.' },
  { name: 'APEX FI', category: 'NDT & Inspection', desc: 'Provider of inspection, training, and certification services for advanced NDT techniques and fitness-for-service evaluations.' },
  { name: 'QENAD', category: 'NDT Products Innovation', desc: 'Integrated and comprehensive service provider promoting the latest NDT approaches including 3D laser scanning and asset integrity solutions.' },
  { name: 'BINITEC', category: 'Valves & Industrial Supply', desc: 'Turn-key suppliers and solution providers for industrial materials, machines, tools, spare parts, and fluid control systems.' },
];

export const Partners = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Strategic Alliances</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Our Global <span style={{ color: '#c8a84b' }}>Partners</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Global Experts Consultoria has affiliations with internationally renowned professional service providers in order to deliver a full range of high-quality consulting services to clients in both the public and private sector.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div key={partner.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl group transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{partner.name}</div>
                  <div className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(200,168,75,0.12)', color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{partner.category}</div>
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style={{ background: 'rgba(200,168,75,0.08)' }}>🤝</div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{partner.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20 text-center p-10 rounded-2xl"
          style={{ background: 'rgba(200,168,75,0.04)', border: '1px solid rgba(200,168,75,0.12)' }}>
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Become a <span style={{ color: '#c8a84b' }}>Partner</span>
          </h3>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC is always open to strategic partnerships with innovative companies that share our commitment to excellence, quality, and client satisfaction across African and global markets.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Partner with GEC <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

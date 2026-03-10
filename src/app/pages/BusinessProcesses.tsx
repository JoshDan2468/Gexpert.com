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

export const BusinessProcesses = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Business Processes" breadcrumb="Business Processes" />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Business Advisory</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Technical Advisory &<br /><span style={{ color: '#c8a84b' }}>Business Processes</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We advise our customers on how to improve the performance and effectiveness of their business depending on whether your focus is on transforming your business, containing cost or on sustaining performance and building on achievements.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We work collaboratively with organizations to find solutions after a critical review of issues. Our model is: <strong className="text-white">Understand – Review – Design – Implement – Check – Improve</strong>, followed through within a project management framework to the point where the desired results are achieved.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC consulting team have the expertise and resources to complete the entire process of setting up and managing your business in the most efficient and cost-effective manner.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Our Business Advisory Services</h3>
              <div className="grid grid-cols-2 gap-3">
                {['New Business Setup', 'Benchmark Study', 'Branch Inspection (Financial Services)', 'Business Process Review', 'Performance Measurement', 'Product/Concept Review', 'Risk Assessment', 'Service Quality Measurement', 'Strategy Development', 'Supplier Evaluation & Certification'].map(s => (
                  <div key={s} className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(200,168,75,0.04)' }}>
                    <span className="text-xs mt-0.5" style={{ color: '#c8a84b' }}>✓</span>
                    <span className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.7)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Our <span style={{ color: '#c8a84b' }}>Process Framework</span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Understand', 'Review', 'Design', 'Implement', 'Check', 'Improve'].map((step, i) => (
            <motion.div key={step} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl w-36"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <div className="text-2xl font-bold mb-2" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="text-sm font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{step}</div>
              {i < 5 && <div className="mt-2 text-xs" style={{ color: 'rgba(200,168,75,0.5)' }}>→</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20" style={{ background: 'rgba(1,36,1,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold text-white mb-4 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Registration & Tender Assistance</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC consulting team have the expertise and resources to complete the entire process of setting up and managing your business in the most efficient and cost-effective manner. We handle all aspects of company registration, compliance, and tender preparation to ensure your business is positioned to win.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="font-bold text-white mb-4 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Public & Private Sector Support</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We serve both private and public sector organizations across Nigeria and Africa, helping them achieve strategic goals, improve operational efficiency, and build sustainable competitive advantages through evidence-based consulting.
            </p>
          </motion.div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all duration-200"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Get Advisory Support <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

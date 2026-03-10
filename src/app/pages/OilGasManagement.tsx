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

export const OilGasManagement = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Oil and Gas Management" breadcrumb="Oil & Gas Management" />

    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Oil and Gas Offers</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Comprehensive Oil & Gas <span style={{ color: '#c8a84b' }}>Management Solutions</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Measures are suggested to enhance better operation, local content development, and to reduce OPEX and CAPEX costs for exploration, drilling and production sustainability and optimization.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Improvement in the oversight function of Operators, Contract administration & processing, Monitoring of assets, Local content development and monitoring, In-country capacity development, Transparency, and CSR for communities.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The suggestions are to enhance smooth and unhindered operation; the majority will be driven by Information Technology and implemented in real time at little or no cost. The suggestions predominantly focus on the local contents, IOCs mode of operations, cost saving and optimization of limited resources available in the country.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl mb-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Advisory Committee Structure</h3>
              <div className="space-y-3">
                {[
                  { abbr: 'SUBCOM', name: 'Subcommittee' },
                  { abbr: 'TECOM', name: 'Technical Committee' },
                  { abbr: 'MACOM', name: 'Management Committee' },
                  { abbr: 'FINCOM', name: 'Financial Committee' },
                ].map(c => (
                  <div key={c.abbr} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(200,168,75,0.05)' }}>
                    <div className="text-sm font-bold px-3 py-1.5 rounded-lg" style={{ background: 'rgba(200,168,75,0.15)', color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{c.abbr}</div>
                    <div className="text-sm text-white">{c.name}</div>
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
            Our <span style={{ color: '#c8a84b' }}>Consultancy Services</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🔍', title: 'Technical Audits & Cost Verification', items: ['Oilfield Technical Audit / Value for Money Audit', 'Cost Verification for Exploration', 'Development – CAPEX cost review', 'Facilities – OPEX/CAPEX monitoring', 'Drilling – DRILLEX cost verification', 'Decommissioning & Abandonment Cost analysis', 'General Expenses & Administration review'] },
            { icon: '📊', title: 'Oilfield Operations Monitoring', items: ['Oilfield Operations Technical Work Program Review (Annual)', 'Oilfield Budget & Performance Review (Annual)', 'Review each contractor\'s annual work programme & budget', 'Reported performance evaluation', 'Review contracts exceeding contractor\'s limit'] },
            { icon: '💰', title: 'Cost Control & Monitoring', items: ['Oilfield Operations Cost Control & Monitoring', 'Oilfield Production Cost Control & Monitoring', 'Oilfield Projects Cost Control & Monitoring', 'Crude Oil Output Control & Monitoring/Inspection', 'Review project scopes, schedules and costs', 'Annual cost verification exercises'] },
            { icon: '🛢️', title: 'Downstream & Marketing', items: ['Downstream Marketing, Supply & Distribution', 'Inspection of imported Products', 'Retail Supply and Distribution of Various Products – Filling Station Outlets', 'Verifies crude oil allocation for royalty, cost oil, ppt & profit through cost recovery team', 'Field Decommissioning & Abandonment management'] },
          ].map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-white mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#c8a84b' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

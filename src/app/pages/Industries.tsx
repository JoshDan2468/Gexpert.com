import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const industries = [
  { icon: '🛢️', name: 'Energy / Oil & Gas', desc: 'LNG & CNG facilities, onshore/offshore production, pipeline design, LPG skids, petroleum products supply, and oilfield cost management.', items: ['LNG & CNG Facilities', 'Onshore Pipelines & Receiving Terminals', 'Onshore / Offshore Production Facilities', 'LPG Skids', 'Mobile Filling Stations', 'Petroleum Products Supply'] },
  { icon: '⚡', name: 'Power & Energy', desc: 'Renewable energy, gas turbine based power plants, transmission networks, auto gas, grid integration, and energy efficiency solutions.', items: ['Renewable energy', 'Gas turbine based power plants', 'Transmission networks', 'Auto Gas', 'Solar & Wind Systems', 'Grid Integration'] },
  { icon: '🧪', name: 'Petrochemicals', desc: 'Engineering services and project management for petrochemical facilities, process plants, and chemical processing infrastructure.', items: ['Process Plant Engineering', 'Refinery Services', 'Chemical Processing', 'Safety & Loss Prevention', 'Asset Integrity', 'Debottlenecking'] },
  { icon: '🏗️', name: 'Infrastructure', desc: 'Transport infrastructure, waste water treatment, civil and structural engineering for public and private sector infrastructure projects.', items: ['Transport Infrastructure', 'Water & Waste Water', 'Civil/Structural Designs', 'Urban Infrastructure', 'Industrial Facilities', 'Bridges & Roads'] },
  { icon: '🌱', name: 'Renewables', desc: 'Solar panels, inverters, EV charging ports, energy conservation, energy efficiency, and environmental sustainability solutions.', items: ['Solar Panels', 'Inverters', 'EV Charging Ports', 'Energy Conservation', 'Environmental Sustainability', 'Battery Storage'] },
  { icon: '🏭', name: 'Manufacturing', desc: 'Engineering and consultancy services for manufacturing facilities, automation, process optimization, and industrial plant management.', items: ['Automation Systems', 'Process Optimization', 'Quality Control', 'Production Management', 'Industrial Safety', 'Capacity Development'] },
  { icon: '⛏️', name: 'Mining', desc: 'Technical advisory, engineering services, and project management support for mining operations across Africa and globally.', items: ['Mine Planning', 'Equipment Advisory', 'Environmental Compliance', 'Safety Management', 'Project Execution', 'Cost Control'] },
  { icon: '💻', name: 'Information Technology', desc: 'Digitalization, edge computing, digital twin services, software forecourt automation, and IT solutions for industrial and business operations.', items: ['Edge Computing', 'Digital Twin', 'Forecourt Automation', 'Asset Management Systems', 'IoT Solutions', 'Data Analytics'] },
  { icon: '🏥', name: 'Health', desc: 'Healthcare sector advisory, business process consulting, and infrastructure support for health institutions and organizations.', items: ['Healthcare Advisory', 'Infrastructure Support', 'Business Process Review', 'Regulatory Compliance', 'Project Management', 'Market Research'] },
  { icon: '🎓', name: 'Education', desc: 'Business advisory, strategic consulting, and project management services for educational institutions and training organizations.', items: ['Strategic Planning', 'Infrastructure Projects', 'Business Advisory', 'Market Analysis', 'Process Improvement', 'IT Implementation'] },
];

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Industries</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Industries We Serve</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

export const Industries = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC offers multi-discipline services across the following key markets and sectors worldwide.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={ind.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(200,168,75,0.08)' }}>{ind.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-2 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>{ind.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.55)' }}>{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.items.map(item => (
                      <span key={item} className="text-[10px] px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Discuss Your Sector <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Our Services</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Our Services</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

const allServices = [
  { icon: '⚙️', title: 'Engineering Services', path: '/engineering-services', desc: 'Complete EPC activities from feasibility, Basic Engineering, FEED, Detailed Design, Procurement, and Construction activities. Including corrosion mitigation, 3D PDMS modeling, pipeline design, and field development from conceptual to detailed design.' },
  { icon: '📋', title: 'Business Processes', path: '/business-processes', desc: 'Business advisory covering: Benchmark Studies, Business Process Review, Performance Measurement, Risk Assessment, Strategy Development, Supplier Evaluation, Registration & Tender Assistance.' },
  { icon: '🔬', title: 'Research & Development', path: '/research-development', desc: 'Design-by-analysis engineering using Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD). Material testing laboratories, CAE software and construction engineering support.' },
  { icon: '📊', title: 'Research & Market Intelligence', path: '/research-market-intelligence', desc: 'Market research, consumer surveys, political opinion polls, customer satisfaction studies, pricing studies, impact assessment, and strategic analytics for data-driven decision-making.' },
  { icon: '🛢️', title: 'Oil & Gas Management', path: '/oil-gas-management', desc: 'Value chain cost management, oilfield technical audits, CAPEX/OPEX verification, production cost control, downstream marketing, local content development, and contractor oversight.' },
  { icon: '🏗️', title: 'Project Management & Execution', path: '/project-management', desc: 'End-to-end project planning, scheduling, cost control, progress reporting, pre-commissioning support, contracts administration, and Owner\'s Engineer representation.' },
];

export const Services = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC offers multi-discipline services in the following key markets: Energy / Oil &amp; Gas, Petrochemicals, Infrastructure, Power, Renewables, Manufacturing, Health, Education, Mining, and Information Technology.
          </p>
        </motion.div>
        <div className="space-y-8">
          {allServices.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={service.path}
                className="flex flex-col md:flex-row gap-8 p-8 rounded-2xl group transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'rgba(200,168,75,0.08)' }}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#c8a84b] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{service.title}</h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'rgba(200,168,75,0.12)', color: '#c8a84b' }}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.55)' }}>{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

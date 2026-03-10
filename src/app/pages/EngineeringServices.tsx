import { motion } from 'motion/react';
import { Link } from 'react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';

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

const SL = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
    <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{text}</span>
  </div>
);

export const EngineeringServices = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Engineering Services" breadcrumb="Engineering Services" />

    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <SL text="Our Engineering Capabilities" />
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Complete Range of <span style={{ color: '#c8a84b' }}>Engineering Services</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC can offer you a complete range of engineering services. The scope and extent of delivery covers complete EPC activities from feasibility, Basic Engineering, through Authority Engineering, Detail Engineering, Procurement, Purchasing, up to Construction activities and plant start-up.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC through her Partners has the necessary resources, background and expertise to perform offered services in a professional and well-organised manner. Our Partnership relationship allows us to take a part in large projects.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Our engineers focus on delivering field development from conceptual, pre-FEED, FEED and detailed design projects for green and brownfield developments. We will utilize a systems approach linking reservoir, subsea and topsides facilities leading to successful projects and financial investment decisions.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl mb-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>Detailed Engineering Design</h3>
              <ul className="space-y-2">
                {['Corrosion Mitigation & Cathodic Protection Design', 'Electrical/Power System Design', 'Instrumentation and Controls systems', 'Civil/Structural Designs (onshore & offshore, including platforms design & modeling)', '3D PDMS Modeling and Stress Analysis', 'Safety & Loss Prevention studies / Design', 'Equipment sizing & Design Calculations', 'Pipeline Systems Design', 'Mechanical systems design'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#c8a84b' }} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>Concept / FEED</h3>
              <ul className="space-y-2">
                {['Field Development Studies', 'Feasibility & Concept Selection Studies', 'Debottlenecking, Optimisation, Upgrade / Revamp Studies', 'Pipeline Hydraulic Studies', 'Flow Assurance', 'Outline Business Case and Studies', 'Complete Basic Engineering Packages'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#c8a84b' }} /> {item}
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <SL text="Project Lifecycle" />
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            End-to-End <span style={{ color: '#c8a84b' }}>Engineering Excellence</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Field Development', icon: '🛢️', items: ['Greenfield and brownfield development', 'Specialists in complex fluids including heavy oil, sour service, wax and hydrates', 'Lab data and testing management', 'Fluid characterization', 'OLGA modelling for transient multiphase flow'] },
            { title: 'Development Screening & Planning', icon: '📋', items: ['Economic/Technical screening & assessment', 'Appraisal data gathering', 'Impartial recommendations'] },
            { title: 'Conceptual Engineering (Pre-FEED)', icon: '💡', items: ['Selection of preferred concept', 'Field architecture and layout', 'Basis of design management', 'Cost estimation and economics'] },
            { title: 'Front End Engineering Design (FEED)', icon: '🔧', items: ['Concept development refinement', 'Technical and economic refinement', 'Development risk assessment', 'Field layout optimisation'] },
            { title: 'Detailed Design', icon: '📐', items: ['Detailed engineering for field development, pipelines and structures', 'Optimized start-up procedures', 'Handover and start-up management'] },
            { title: 'Flow Assurance & Production Chemistry', icon: '⚗️', items: ['PIPESIM steady state analysis', 'Production chemistry support to new projects', 'Fluid sampling and analysis', 'Major incompatibilities management', 'High system availability maintenance'] },
          ].map((phase, i) => (
            <motion.div key={phase.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="text-3xl mb-3">{phase.icon}</div>
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{phase.title}</h3>
              <ul className="space-y-1.5">
                {phase.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                    <span style={{ color: '#c8a84b' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24" style={{ background: 'rgba(1,36,1,0.08)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {[
            { title: 'Operations', icon: '⚙️', items: ['Operations risk management and mitigation', 'Operating philosophies and procedures', 'Debottlenecking', 'Hydrate and wax deposition strategies'] },
            { title: 'Construction', icon: '🏗️', items: ['Construction planning', 'Equipment installation', 'Commissioning', 'Start-up support', 'Training'] },
            { title: 'Procurement', icon: '📦', items: ['Process of offers evaluation to select most suitable suppliers', 'RFQ, solicitation', 'Evaluation of bids and supplier selection', 'Purchase orders and contract awards', 'Logistic, shipping'] },
            { title: 'GEC Provides', icon: '✅', items: ['Technical, Safety and Quality assurance services during construction activities', 'Compliance with Client\'s demands and standards', 'Coordination across multi-disciplinary teams', 'Full project lifecycle support'] },
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    <span style={{ color: '#c8a84b' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all duration-200"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Discuss Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

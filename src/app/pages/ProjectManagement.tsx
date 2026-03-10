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

export const ProjectManagement = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Project Management & Execution" breadcrumb="Project Management" />

    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Project Management and Execution</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Managing Complexity. <span style={{ color: '#c8a84b' }}>Delivering Results.</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Complexity of processes connected with project execution and the variety of activities involved — tasks and resources planning, co-ordination between client-authorities-vendors, scheduling and cost control, progress control — demand a structured and experienced team.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC has assembled a team of engineers and technicians, mainly from own personal sources, which can solve various professional level problems connected with planning, design, procurement and construction.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              The project management covers: Progress reporting and Quality control. The project team is led by a Project Manager (PM) who is responsible for the entire work regarding quality, economy and agreed time schedule, including: monthly progress reports, modifications of the project concept, and common project meetings with the Client.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Project Management Services We Offer</h3>
              <ul className="space-y-3">
                {[
                  'Project Planning & Scheduling',
                  'Cost Estimates',
                  'SOW / ITT Activities Support',
                  'Independent Review of Detailed Engineering Design Works',
                  'Setting up Project Organization and Management Structures',
                  'Setting up Project Controls and Procedures',
                  'Pre-commissioning & Commissioning Support',
                  'Contracts Administration',
                  'Cost Monitoring and Cost Control',
                  'Owner\'s Engineer',
                ].map(s => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="text-[#c8a84b] text-sm mt-0.5">✓</span>
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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
            Key Project <span style={{ color: '#c8a84b' }}>Activities</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '📅', title: 'Planning & Scheduling', desc: 'Comprehensive project planning from inception to completion. Gantt charts, resource allocation, milestone tracking, and critical path analysis to ensure on-time delivery.' },
            { icon: '📑', title: 'Reporting & Control', desc: 'Monthly progress reports, quality control checkpoints, cost variance analysis, and executive briefings to keep all stakeholders aligned.' },
            { icon: '🏗️', title: 'Construction & Commissioning', desc: 'On-site construction management, equipment installation supervision, pre-commissioning activities, start-up support, and operator training.' },
            { icon: '💼', title: 'Contract Administration', desc: 'Managing contracts between clients, sub-contractors, and vendors. Claim management, variation orders, and dispute resolution.' },
            { icon: '💰', title: 'Cost Monitoring', desc: 'Real-time cost tracking against budget, forecasting, cost-to-complete analysis, and value engineering recommendations to optimize spend.' },
            { icon: '🤝', title: 'Coordination & Communication', desc: 'Facilitating effective communication between clients, authorities, vendors, and sub-contractors. Common project meetings and conformity reviews.' },
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
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

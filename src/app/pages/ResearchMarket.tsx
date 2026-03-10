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

export const ResearchMarket = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Research & Market Intelligence" breadcrumb="Research & Market Intelligence" />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Research and Market Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Products Management, Market Intelligence <span style={{ color: '#c8a84b' }}>& Due Diligence</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Global Experts Consultoria's market research is one of our core businesses and strengths. We provide discerning information that will help clients solve issues and achieve objectives. Our reports come with elaborate executive summaries that help rejuvenate, build, and reposition brands and businesses.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Whether quantitative, qualitative research methodologies or both, the output of our research projects and efforts have seen our clients acquire leadership roles in their respective sectors.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We apply standard practices in research project management, scope definition, design of concepts/objectives, questionnaires, data analysis, and engagement of personnel to run the projects.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC data gathering helps to unlock opportunities for organisations to shape change with new ways of working. Our strategic research and analytics provide clients with the necessary tools to gain vital insight into market forces, key players within the industry, and evolving trends — empowering data-driven, strategic decision-making.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl mb-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Our Market Research Services</h3>
              <div className="grid grid-cols-1 gap-2">
                {['Political and Election opinion poll and trends', 'Consumers Research', 'Social Research', 'Customer Satisfaction Survey', 'New Product Testing and implementation', 'Pricing Studies', 'Product Evaluation Study', 'Impact Assessment', 'Awareness and Usage Study', 'Advert and campaign evaluation', 'Opinion Poll', 'Continuous Assessment', 'Quality of Service Research'].map(s => (
                  <div key={s} className="flex items-center gap-2.5 p-2.5 rounded-lg" style={{ background: 'rgba(200,168,75,0.04)' }}>
                    <span className="text-[#c8a84b] text-xs">✓</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{s}</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
            <h3 className="font-bold text-white mb-5 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Methodology</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>The methodology we adopt, depending on the type of research, includes:</p>
            <ul className="space-y-2">
              {['Face-to-face interviews', 'Group Interview', 'Social and Religious Center sampling', 'Online surveys', 'Mobile survey', 'Focus Group Discussions (FGDs)', 'In-depth Interviews (IDIs)', 'Telephone aided interview', 'Audits', 'Desk research'].map(m => (
                <li key={m} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: '#c8a84b' }}>→</span> {m}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
            <h3 className="font-bold text-white mb-5 text-xl" style={{ fontFamily: 'Syne, sans-serif' }}>Tools Used</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>Most common tools in some of our research projects are:</p>
            <ul className="space-y-2">
              {['Semi/fully structured questionnaires', 'FGD Moderating guide', 'IDI guide', 'Mobile equipment (Android phones, tablet, etc)', 'Statistical analysis software', 'Data visualization platforms', 'Market intelligence dashboards'].map(t => (
                <li key={t} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: '#c8a84b' }}>→</span> {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
            Commission Research <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

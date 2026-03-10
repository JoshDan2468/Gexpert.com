import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const articles = [
  { title: 'GEC provides Technical, Safety and Quality Assurance Services during Construction Activities', category: 'Engineering', date: 'January 2024', excerpt: 'GEC is committed to providing world class technical services during all construction activities, ensuring that quality, safety and compliance standards are met at every stage.' },
  { title: 'Optimizing Oil & Gas Value Chain: Local Content Development Strategies', category: 'Oil & Gas', date: 'February 2024', excerpt: 'Measures are suggested to enhance better operation, local content development, and to reduce OPEX and CAPEX costs for exploration, drilling and production sustainability.' },
  { title: 'Digital Twin Technology: Transforming Asset Integrity Management in Africa', category: 'Technology', date: 'March 2024', excerpt: 'BEASY and CENOSCO solutions are empowering industry leaders across Africa to predict the future and reduce cost through advanced computer simulation.' },
  { title: 'Edge Computing in the Oil & Gas Industry: An Always-On World', category: 'Digitalization', date: 'April 2024', excerpt: 'Stratus solutions collect and analyze data at the source — the edge of your core business processes — enabling real-time decisions and actionable results.' },
  { title: 'ISO 9001:2015 and the Case for Rigorous Quality Management in Consultancy', category: 'Quality', date: 'May 2024', excerpt: 'GEC\'s Quality Management System developed in line with ISO 9001:2015 edition, with efficient processes supporting construction, procurement and material handling activities.' },
  { title: 'Renewable Energy in Africa: Opportunities for Solar, Wind and EV Integration', category: 'Renewables', date: 'June 2024', excerpt: 'With over 25 years of expertise, GEC\'s renewable energy partners are delivering solar panels, inverters, and EV charging infrastructure across African markets.' },
];

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Articles</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Articles</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

export const Insights = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div key={article.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl flex flex-col group cursor-pointer transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.08)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200,168,75,0.08)')}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider" style={{ background: 'rgba(200,168,75,0.1)', color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{article.category}</span>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{article.date}</span>
              </div>
              <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#c8a84b] transition-colors" style={{ fontFamily: 'Syne, sans-serif' }}>{article.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>{article.excerpt}</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

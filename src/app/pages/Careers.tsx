import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const PageHeader = () => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Careers</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Careers at GEC</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

export const Careers = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader />
    <section className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
              <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Join Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Work with <span style={{ color: '#c8a84b' }}>Global Experts</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
              GEC is led by strong-willed experienced managers who have worked in major international and local business and management consulting firms with experience in managing multi-disciplinary teams.
            </p>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              We value our people, encourage their development, and reward their performance. Join a team with presence across Africa, USA, and globally, working on complex engineering, management and research challenges.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🌍', label: 'Global Presence', val: '10+ Countries' },
                { icon: '🧠', label: 'Combined Experience', val: '100+ Years' },
                { icon: '📈', label: 'Growing Team', val: 'Multi-Disciplinary' },
                { icon: '🤝', label: 'Culture', val: 'Respect & Teamwork' },
              ].map(stat => (
                <div key={stat.label} className="p-4 rounded-xl" style={{ background: 'rgba(200,168,75,0.05)', border: '1px solid rgba(200,168,75,0.1)' }}>
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
                  <div className="text-sm font-bold text-white">{stat.val}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
              <h3 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>Areas We Recruit In</h3>
              <ul className="space-y-3">
                {['Process / Chemical Engineering', 'Civil / Structural Engineering', 'Mechanical / Piping Engineering', 'Electrical / Instrumentation Engineering', 'Project Management & Controls', 'Business Development & Advisory', 'Market Research & Analytics', 'HSE / Safety Engineering', 'IT / Digitalization & Automation', 'Finance, Legal & Administration'].map(role => (
                  <li key={role} className="flex items-center gap-3 py-2 px-4 rounded-lg"
                    style={{ background: 'rgba(200,168,75,0.04)', borderLeft: '2px solid rgba(200,168,75,0.3)' }}>
                    <span className="text-[#c8a84b] text-xs">✓</span>
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center py-16 px-8 rounded-2xl" style={{ background: 'rgba(200,168,75,0.04)', border: '1px solid rgba(200,168,75,0.12)' }}>
          <div className="text-5xl mb-5">📧</div>
          <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Send Us Your CV
          </h3>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We are always looking for talented, experienced professionals to join our multi-disciplinary team. Send your CV and a cover letter to our team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:info@globalexpertsconsultoria.com?subject=Job Application"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all"
              style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.3)' }}>
              Send Application <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider hover:text-[#c8a84b] transition-colors"
              style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)', fontFamily: 'Syne, sans-serif' }}>
              Contact HR
            </Link>
          </div>
          <p className="mt-6 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Email: info@globalexpertsconsultoria.com | globalexpertsconsultoria@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  </div>
);

import { Hero } from '../components/sections/Hero';
import { ServicesShowcase } from '../components/sections/ServicesShowcase';
import { AnimatedCounter } from '../components/sections/AnimatedCounter';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { IMAGES, PROJECTS, INSIGHTS } from '../data/content';

const stats = [
  { label: 'Projects Delivered Globally', value: 850, suffix: '+' },
  { label: 'Years of Industry Expertise', value: 25, suffix: '+' },
  { label: 'Engineering Specialists', value: 300, suffix: '+' },
  { label: 'Countries Served', value: 40, suffix: '+' },
];

const industries = [
  { name: 'Oil & Gas', icon: '🛢️', image: IMAGES.oilGas },
  { name: 'Energy & Power', icon: '⚡', image: IMAGES.energy },
  { name: 'Infrastructure', icon: '🏗️', image: IMAGES.infrastructure },
  { name: 'Petrochemicals', icon: '🧪', image: IMAGES.petrochems },
  { name: 'Mining', icon: '⛏️', image: IMAGES.mining },
  { name: 'Renewables', icon: '🌱', image: IMAGES.renewables },
  { name: 'Marine & Offshore', icon: '🚢', image: IMAGES.marine },
  { name: 'Manufacturing', icon: '🏭', image: IMAGES.manufacturing },
];

const whyUs = [
  'Proven track record in 40+ countries worldwide',
  'Multi-disciplinary team of 300+ certified experts',
  'Cutting-edge digital engineering capabilities',
  'Client-centric approach with measurable results',
  '24/7 global support & rapid deployment',
  'ISO 9001 | ISO 14001 | ISO 45001 Certified',
];

const pillars = [
  { icon: '🎯', title: 'Precision First', desc: 'Every deliverable meets the highest technical standards.' },
  { icon: '🌍', title: 'Global Reach', desc: 'Active presence in 40+ countries spanning 6 continents.' },
  { icon: '🏆', title: 'Proven Track Record', desc: '850+ projects on time and on budget since 2001.' },
  { icon: '🔬', title: 'Innovation Driven', desc: 'Integrating digital twins, AI and advanced analytics.' },
];

const SL = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
    <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{text}</span>
  </div>
);

export const Home = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.15);
  const { ref: industryRef, isVisible: industryVisible } = useScrollAnimation(0.1);
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation(0.15);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.1);
  const { ref: insightsRef, isVisible: insightsVisible } = useScrollAnimation(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.2);

  return (
    <div style={{ background: '#080d08' }}>
      <Hero />
      <ServicesShowcase />
      <AnimatedCounter stats={stats} />

      {/* ABOUT */}
      <section ref={aboutRef as React.RefObject<HTMLElement>} className="py-28" style={{ background: 'rgba(1,36,1,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={aboutVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '520px' }}>
                <ImageWithFallback src={IMAGES.aboutEngineers} alt="GEC engineering team" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(1,36,1,0.4) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 text-center shadow-2xl" style={{ background: '#c8a84b' }}>
                <strong className="block text-4xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#012401' }}>25+</strong>
                <span className="text-sm font-semibold" style={{ color: '#012401' }}>Years of Expertise</span>
              </div>
              <div className="absolute top-6 left-6 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{ background: 'rgba(1,36,1,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200,168,75,0.3)' }}>
                <span className="text-xl">🏅</span>
                <div>
                  <div className="text-xs font-bold text-white">ISO Certified</div>
                  <div className="text-[10px]" style={{ color: '#c8a84b' }}>9001 · 14001 · 45001</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={aboutVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
              <SL text="Who We Are" />
              <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                A Partner Built for<br /><span style={{ color: '#c8a84b' }}>Complex Challenges</span>
              </h2>
              <div className="w-14 h-0.5 mb-8" style={{ background: 'linear-gradient(90deg, #c8a84b, transparent)' }} />
              <p className="text-lg leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Global Experts Consultoria is a premier engineering and management consultancy delivering world-class technical solutions to the energy, infrastructure, and industrial sectors globally.
              </p>
              <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.72)' }}>
                Founded on the principle that engineering excellence requires both deep expertise and practical execution, we combine seasoned specialist knowledge with cutting-edge methodologies to drive measurable outcomes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {pillars.map((p, i) => (
                  <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} animate={aboutVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <div className="text-sm font-semibold text-white mb-1">{p.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{p.desc}</div>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 mt-8 font-semibold text-sm" style={{ color: '#c8a84b', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section ref={industryRef as React.RefObject<HTMLElement>} className="py-28" style={{ background: '#080d08' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SL text="Industries We Serve" />
              <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                Deep Expertise Across<br /><span style={{ color: '#c8a84b' }}>Critical Sectors</span>
              </h2>
            </div>
            <Link to="/industries" className="inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-lg font-semibold text-sm" style={{ border: '1.5px solid rgba(200,168,75,0.4)', color: 'rgba(255,255,255,0.8)' }}>
              All Industries <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, scale: 0.93 }} animate={industryVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.06 }}>
                <Link to="/industries" className="group block relative rounded-2xl overflow-hidden" style={{ height: '200px' }}>
                  <ImageWithFallback src={ind.image} alt={ind.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(1,36,1,0.2) 100%)' }} />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="text-2xl mb-2">{ind.icon}</div>
                    <div className="font-bold text-white text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{ind.name}</div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'rgba(1,36,1,0.5)' }}>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#c8a84b' }}>Learn More →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section ref={whyRef as React.RefObject<HTMLElement>} className="py-28" style={{ background: 'rgba(1,36,1,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={whyVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
              <SL text="Our Approach" />
              <h2 className="font-extrabold text-white leading-tight mb-8" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                Why Leading Companies<br /><span style={{ color: '#c8a84b' }}>Choose Global Experts</span>
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.li key={item} initial={{ opacity: 0, x: -20 }} animate={whyVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.08 }} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: '#c8a84b' }} />
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm"
                style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                <span>Learn About Us</span><ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={whyVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '480px' }}>
                <ImageWithFallback src={IMAGES.aboutFacility} alt="Engineering facility" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'rgba(1,36,1,0.3)' }} />
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[{ num: '98%', label: 'Client Satisfaction' }, { num: '$2B+', label: 'Project Value' }, { num: '40+', label: 'Countries' }].map(stat => (
                  <div key={stat.label} className="rounded-xl p-4 text-center"
                    style={{ background: 'rgba(1,36,1,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200,168,75,0.2)' }}>
                    <div className="font-black text-xl" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>{stat.num}</div>
                    <div className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section ref={projectsRef as React.RefObject<HTMLElement>} className="py-28" style={{ background: '#080d08' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SL text="Our Work" />
              <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                Project <span style={{ color: '#c8a84b' }}>Highlights</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-lg font-semibold text-sm" style={{ border: '1.5px solid rgba(200,168,75,0.4)', color: 'rgba(255,255,255,0.8)' }}>
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((proj, i) => (
              <motion.div key={proj.id} initial={{ opacity: 0, y: 30 }} animate={projectsVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 }}
                className="group rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative overflow-hidden" style={{ height: '210px' }}>
                  <ImageWithFallback src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider" style={{ background: 'rgba(200,168,75,0.9)', color: '#012401' }}>{proj.industry}</div>
                </div>
                <div className="p-7">
                  <h3 className="font-bold text-white mb-3 text-lg leading-snug" style={{ fontFamily: 'Syne, sans-serif' }}>{proj.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{proj.description.slice(0, 130)}...</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>📍 {proj.location}</span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                      style={{ border: '1px solid rgba(200,168,75,0.4)', color: '#c8a84b' }}>→</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section ref={insightsRef as React.RefObject<HTMLElement>} className="py-28" style={{ background: 'rgba(1,36,1,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <SL text="Knowledge Hub" />
              <h2 className="font-extrabold text-white leading-tight" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 3.5vw, 52px)' }}>
                Insights & <span style={{ color: '#c8a84b' }}>Perspectives</span>
              </h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 shrink-0 px-6 py-3 rounded-lg font-semibold text-sm" style={{ border: '1.5px solid rgba(200,168,75,0.4)', color: 'rgba(255,255,255,0.8)' }}>
              All Insights <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={insightsVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
              className="lg:col-span-3 group rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <ImageWithFallback src={INSIGHTS[0].image} alt={INSIGHTS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                <div className="absolute top-4 left-4 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider" style={{ background: 'rgba(200,168,75,0.9)', color: '#012401' }}>Featured</div>
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#c8a84b' }}>{INSIGHTS[0].category}</div>
                <h3 className="font-bold text-white text-xl leading-snug mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{INSIGHTS[0].title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>{INSIGHTS[0].excerpt}</p>
                <div className="flex items-center justify-between text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <span>{INSIGHTS[0].date} · {INSIGHTS[0].readTime}</span>
                  <span className="font-semibold" style={{ color: '#c8a84b' }}>Read Article →</span>
                </div>
              </div>
            </motion.div>
            <div className="lg:col-span-2 flex flex-col gap-4">
              {INSIGHTS.slice(1, 4).map((ins, i) => (
                <motion.div key={ins.id} initial={{ opacity: 0, x: 30 }} animate={insightsVisible ? { opacity: 1, x: 0 } : {}} transition={{ delay: (i + 1) * 0.12 }}
                  className="group flex gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback src={ins.image} alt={ins.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#c8a84b' }}>{ins.category}</div>
                    <h4 className="font-semibold text-white text-sm leading-snug mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{ins.title}</h4>
                    <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{ins.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef as React.RefObject<HTMLElement>} className="py-28 relative overflow-hidden text-center">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={ctaVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto px-6">
          <SL text="Get In Touch" />
          <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 5vw, 64px)' }}>
            Ready to Solve Your<br /><span style={{ color: '#c8a84b' }}>Most Complex Challenges?</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Our team of experts is ready to discuss your project needs and deliver tailored solutions that drive real results.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm"
              style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span>Start a Conversation</span><ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-sm"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              View Our Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

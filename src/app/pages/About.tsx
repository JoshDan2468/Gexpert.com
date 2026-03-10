import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Eye } from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { IMAGES } from '../data/content';

const SL = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
    <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{text}</span>
  </div>
);

const timeline = [
  { year: '2001', event: 'Founded in Houston, Texas with a vision to deliver world-class engineering consultancy to the global energy sector.' },
  { year: '2005', event: 'Expanded internationally with offices in London and Dubai, serving clients across Latin America, Europe and the Middle East.' },
  { year: '2010', event: 'Surpassed 100 project milestone; established dedicated asset integrity and maintenance optimization practices.' },
  { year: '2015', event: 'Launched renewable energy division and digital engineering practice to support the energy transition.' },
  { year: '2020', event: 'Introduced AI-powered analytics and digital twin services; expanded to Singapore and West Africa.' },
  { year: '2025', event: '850+ projects completed across 40+ countries, with 300+ engineering specialists serving clients worldwide.' },
];

const team = [
  { name: 'Carlos Martinez', role: 'Chief Executive Officer', image: IMAGES.ceo, info: '25+ years of engineering leadership across oil & gas, energy and infrastructure sectors globally.' },
  { name: 'Dr. Sarah Chen', role: 'Chief Technology Officer', image: IMAGES.cto, info: 'PhD in Systems Engineering. Pioneer in digital twin and AI-driven asset management technologies.' },
  { name: 'David Thompson', role: 'VP of Operations', image: IMAGES.vpo, info: '20+ years in project management, PMC services and multi-billion dollar capital project delivery.' },
  { name: 'Maria Rodrigues', role: 'VP of Engineering', image: IMAGES.vpe, info: 'Specialist in asset integrity, structural engineering and life extension for offshore and industrial assets.' },
];

const certs = [
  { code: 'ISO 9001:2015', title: 'Quality Management', icon: '🏅', desc: 'Certified quality management system ensuring consistent delivery excellence across all services and locations.' },
  { code: 'ISO 14001:2015', title: 'Environmental Management', icon: '🌿', desc: 'Commitment to minimizing environmental impact in our operations and supporting sustainable project outcomes.' },
  { code: 'ISO 45001:2018', title: 'Occupational Health & Safety', icon: '🛡️', desc: 'Rigorous safety management system protecting our people and clients across all project environments.' },
  { code: 'API Q1 / Q2', title: 'Petroleum Industry Quality', icon: '⚙️', desc: 'API quality management standard for engineering and consulting services to the oil & gas sector.' },
];

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We hold ourselves to the highest technical and professional standards in everything we deliver.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent relationships with clients, partners, and each other — always.' },
  { icon: '💡', title: 'Innovation', desc: 'Continuously seeking better solutions through technology, creativity, and collaboration.' },
  { icon: '🌍', title: 'Responsibility', desc: 'Accountable to our clients, communities, and the planet for the impact of our work.' },
];

export const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.1);
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.1);
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation(0.1);
  const { ref: certRef, isVisible: certVisible } = useScrollAnimation(0.2);

  return (
    <div style={{ background: '#080d08' }}>
      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #012401, #024502)' }}>
        <ParticlesBackground count={35} color="rgba(200,168,75,0.4)" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(200,168,75,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,168,75,0.03) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <SL text="Our Story" />
              <h1 className="font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 72px)' }}>
                About Global Experts<br /><span style={{ color: '#c8a84b' }}>Consultoria</span>
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                For over 25 years, we have been transforming complex engineering challenges into exceptional outcomes — delivering world-class consultancy solutions that drive innovation, safety, and excellence across the globe.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden" style={{ height: '360px' }}>
              <ImageWithFallback src={IMAGES.aboutTeam} alt="GEC global team" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(1,36,1,0.3) 0%, transparent 60%)' }} />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[{ n: '850+', l: 'Projects' }, { n: '40+', l: 'Countries' }, { n: '300+', l: 'Experts' }].map(s => (
                  <div key={s.l} className="rounded-xl p-3 text-center" style={{ background: 'rgba(1,36,1,0.85)', backdropFilter: 'blur(10px)', border: '1px solid rgba(200,168,75,0.2)' }}>
                    <div className="font-black text-lg" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>{s.n}</div>
                    <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section ref={missionRef as React.RefObject<HTMLElement>} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { Icon: Target, title: 'Our Mission', text: 'To deliver innovative, sustainable, and value-driven engineering solutions that empower our clients to achieve operational excellence while maintaining the highest standards of safety, quality, and integrity.' },
              { Icon: Eye, title: 'Our Vision', text: 'To be the global leader in engineering consultancy, recognized for innovation, expertise, and commitment to creating a sustainable future through cutting-edge technology and exceptional service delivery.' },
            ].map(({ Icon, title, text }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} animate={missionVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="p-10 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'rgba(200,168,75,0.1)' }}>
                  <Icon className="w-7 h-7" style={{ color: '#c8a84b' }} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h2>
                <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section ref={valuesRef as React.RefObject<HTMLElement>} className="py-24" style={{ background: 'rgba(1,36,1,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <SL text="What Drives Us" />
            <h2 className="font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 48px)' }}>
              Our Core <span style={{ color: '#c8a84b' }}>Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} animate={valuesVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-4xl mb-5">{v.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef as React.RefObject<HTMLElement>} className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="mb-14 text-center">
            <SL text="Our Journey" />
            <h2 className="font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 48px)' }}>
              25 Years of <span style={{ color: '#c8a84b' }}>Engineering Excellence</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,168,75,0.4), transparent)' }} />
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} animate={timelineVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 }}
                className={`relative flex gap-8 mb-10 ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full top-5 -translate-x-1/2 z-10" style={{ background: '#c8a84b', boxShadow: '0 0 0 4px rgba(200,168,75,0.2)' }} />
                <div className={`ml-14 md:ml-0 max-w-sm p-6 rounded-2xl ${i % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto'}`}
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="font-black text-3xl mb-3" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>{item.year}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section ref={teamRef as React.RefObject<HTMLElement>} className="py-24" style={{ background: 'rgba(1,36,1,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <SL text="Our Leadership" />
            <h2 className="font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 48px)' }}>
              Meet the <span style={{ color: '#c8a84b' }}>Leadership Team</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} animate={teamVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12 }}
                className="group rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative overflow-hidden" style={{ height: '280px' }}>
                  <ImageWithFallback src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(1,36,1,0.8) 0%, transparent 50%)' }} />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{member.name}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#c8a84b' }}>{member.role}</div>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{member.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section ref={certRef as React.RefObject<HTMLElement>} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <SL text="Our Credentials" />
            <h2 className="font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 48px)' }}>
              Certifications & <span style={{ color: '#c8a84b' }}>Accreditations</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certs.map((cert, i) => (
              <motion.div key={cert.code} initial={{ opacity: 0, scale: 0.95 }} animate={certVisible ? { opacity: 1, scale: 1 } : {}} transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.12)' }}>
                <div className="text-4xl mb-4">{cert.icon}</div>
                <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: '#c8a84b' }}>{cert.code}</div>
                <h3 className="font-bold text-white mb-3 text-base" style={{ fontFamily: 'Syne, sans-serif' }}>{cert.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

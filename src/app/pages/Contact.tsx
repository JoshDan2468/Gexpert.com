import { useState } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { ParticlesBackground } from '../components/ParticlesBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { IMAGES } from '../data/content';

const SL = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
    <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>{text}</span>
  </div>
);

const offices = [
  { city: 'Houston', country: 'USA (HQ)', address: '1200 Energy Corridor Blvd, Suite 400\nHouston, TX 77042', phone: '+1 (800) 456-7890', image: IMAGES.houston },
  { city: 'London', country: 'United Kingdom', address: '22 Bishopsgate, Level 30\nLondon, EC2N 4BQ', phone: '+44 20 7946 0180', image: IMAGES.london },
  { city: 'Dubai', country: 'UAE', address: 'DIFC Gate Building, Level 8\nDubai, UAE', phone: '+971 4 370 5100', image: IMAGES.dubai },
  { city: 'Singapore', country: 'Singapore', address: '1 Marina Boulevard, #28-00\nSingapore 018989', phone: '+65 6580 9100', image: IMAGES.singapore },
];

const infoCards = [
  { Icon: Mail, title: 'Email Us', value: 'info@globalexpertsconsultoria.com', sub: 'We reply within 24 hours' },
  { Icon: Phone, title: 'Call Us', value: '+1 (800) 456-7890', sub: 'Mon–Fri, 8am–6pm CST' },
  { Icon: MapPin, title: 'Headquarters', value: 'Houston, Texas', sub: '+ 3 international offices' },
  { Icon: Clock, title: 'Emergency Line', value: '+1 (800) 456-7999', sub: '24/7 for existing clients' },
];

const SERVICES_LIST = ['Engineering Consulting', 'Project Management', 'Asset Integrity', 'Maintenance Optimization', 'Technical Advisory', 'Digital Engineering'];

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const { ref: offRef, isVisible: offVisible } = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', borderRadius: '10px', fontSize: '14px', outline: 'none',
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white',
  };

  return (
    <div style={{ background: '#080d08' }}>
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #012401, #024502)' }}>
        <ParticlesBackground count={25} color="rgba(200,168,75,0.4)" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <SL text="Get In Touch" />
            <h1 className="font-bold text-white leading-tight mb-6" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(40px, 5vw, 72px)' }}>
              Let's Discuss<br /><span style={{ color: '#c8a84b' }}>Your Project</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Whether you have an immediate project need or a longer-term challenge to explore, our team is ready to listen and respond with tailored, expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map(({ Icon, title, value, sub }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(200,168,75,0.1)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#c8a84b' }} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{title}</div>
                <div className="font-bold text-white text-sm mb-1">{value}</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + IMAGE */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <SL text="Send a Message" />
              <h2 className="font-extrabold text-white mb-8" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(26px, 2.5vw, 38px)' }}>
                Tell Us About<br /><span style={{ color: '#c8a84b' }}>Your Challenge</span>
              </h2>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-10 rounded-2xl text-center"
                  style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-bold text-white text-xl mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)' }}>Thank you for reaching out. A member of our team will be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Full Name *</label>
                      <input style={inputStyle} placeholder="John Smith" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Email Address *</label>
                      <input type="email" style={inputStyle} placeholder="john@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Company</label>
                      <input style={inputStyle} placeholder="Your company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Phone Number</label>
                      <input style={inputStyle} placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Service of Interest</label>
                    <select style={inputStyle} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select a service...</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>How Can We Help? *</label>
                    <textarea rows={5} style={{ ...inputStyle, resize: 'none' }} placeholder="Describe your project or challenge..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-sm transition-all"
                    style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    <span>Send Message</span><ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office image */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden mb-8" style={{ height: '380px' }}>
                <ImageWithFallback src={IMAGES.contactOffice} alt="GEC Houston HQ" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(1,36,1,0.6) 0%, transparent 50%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-bold text-white text-xl mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Houston Headquarters</div>
                  <div className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>1200 Energy Corridor Blvd · Houston, TX</div>
                </div>
              </div>
              <div className="p-7 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(200,168,75,0.1), rgba(200,168,75,0.04))', border: '1px solid rgba(200,168,75,0.2)' }}>
                <div className="font-bold text-white text-lg mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>What to Expect</div>
                {['We respond within 24 business hours', 'An expert will be assigned to your enquiry', 'Initial consultation is always complimentary', 'Strict confidentiality of all project information'].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: '#c8a84b' }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL OFFICES */}
      <section ref={offRef as React.RefObject<HTMLElement>} className="py-24" style={{ background: 'rgba(1,36,1,0.08)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-14">
            <SL text="Our Offices" />
            <h2 className="font-extrabold text-white" style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(28px, 3vw, 48px)' }}>
              Global <span style={{ color: '#c8a84b' }}>Presence</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <motion.div key={office.city} initial={{ opacity: 0, y: 25 }} animate={offVisible ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="relative overflow-hidden" style={{ height: '160px' }}>
                  <ImageWithFallback src={office.image} alt={office.city} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)' }} />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-bold text-white text-lg leading-none" style={{ fontFamily: 'Syne, sans-serif' }}>{office.city}</div>
                    <div className="text-xs" style={{ color: '#c8a84b' }}>{office.country}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs mb-2 leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,255,255,0.6)' }}>{office.address}</div>
                  <div className="text-xs font-semibold" style={{ color: '#c8a84b' }}>{office.phone}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

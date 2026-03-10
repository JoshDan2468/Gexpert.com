import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => (
  <footer style={{ background: '#012401', borderTop: '1px solid rgba(200,168,75,0.1)' }}>
    {/* CTA Band */}
    <div style={{ borderBottom: '1px solid rgba(200,168,75,0.12)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Providing World Class Engineering,<br />
            <span style={{ color: '#c8a84b' }}>Project Management & Consultancy.</span>
          </motion.h2>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Link to="/contact"
            className="flex items-center gap-3 px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:-translate-y-1 transition-all duration-200"
            style={{ background: '#c8a84b', color: '#012401', fontFamily: 'Syne, sans-serif', boxShadow: '0 8px 30px rgba(200,168,75,0.35)' }}>
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>

    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10">
              <svg viewBox="0 0 42 42" fill="none"><polygon points="21,2 40,12 40,30 21,40 2,30 2,12" stroke="#c8a84b" strokeWidth="1.5" fill="none"/><circle cx="21" cy="21" r="4" fill="#c8a84b"/></svg>
            </div>
            <div>
              <div className="text-white font-bold text-[14px] tracking-[0.08em]" style={{ fontFamily: 'Syne, sans-serif' }}>GLOBAL EXPERTS</div>
              <div className="text-[9px] tracking-[0.25em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Consultoria</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            A global company with presence in Lagos, Mozambique, Sierra Leone, Ghana, Uganda, Namibia, Houston and Oklahoma.
          </p>
          <div className="space-y-2.5">
            <a href="mailto:info@globalexpertsconsultoria.com"
              className="flex items-center gap-2 text-xs hover:text-[#c8a84b] transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#c8a84b' }} />
              info@globalexpertsconsultoria.com
            </a>
            <a href="tel:+2348178349193"
              className="flex items-center gap-2 text-xs hover:text-[#c8a84b] transition-colors"
              style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#c8a84b' }} />
              (+234) 8178349193
            </a>
            <div className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#c8a84b' }} />
              31 Ademola Street, off Awolowo Road, Ikoyi, Lagos
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Our Services</h3>
          <ul className="space-y-2">
            {[
              ['Engineering Services', '/engineering-services'],
              ['Business Processes', '/business-processes'],
              ['Research & Development', '/research-development'],
              ['Research & Market Intelligence', '/research-market-intelligence'],
              ['Oil & Gas Management', '/oil-gas-management'],
              ['Project Management', '/project-management'],
            ].map(([name, path]) => (
              <li key={name}>
                <Link to={path} className="text-xs hover:text-[#c8a84b] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Our Products</h3>
          <ul className="space-y-2">
            {[
              ['Digitalization & Edge Computing', '/products#digitalization'],
              ['Digital Twin Services', '/products#digital-twin'],
              ['Electrical Equipment & Safety', '/products#electrical'],
              ['Flowmeters & Sensors', '/products#flowmeters'],
              ['NDT & Laser Scanning', '/products#ndt'],
              ['Renewable Energy', '/products#renewable'],
              ['Thermal Monitoring', '/products#thermal'],
              ['Valves, Flanges & Pumps', '/products#valves'],
            ].map(([name, path]) => (
              <li key={name}>
                <Link to={path} className="text-xs hover:text-[#c8a84b] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company + Offices */}
        <div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-white mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Company</h3>
          <ul className="space-y-2 mb-5">
            {[['About Us', '/about'], ['Our Partners', '/partners'], ['Articles', '/insights'], ['Quality Policy', '/quality-policy'], ['HSE Policy', '/hse-policy'], ['Contact Us', '/contact']].map(([n, p]) => (
              <li key={n}><Link to={p} className="text-xs hover:text-[#c8a84b] transition-colors" style={{ color: 'rgba(255,255,255,0.55)' }}>{n}</Link></li>
            ))}
          </ul>
          <h4 className="font-bold text-xs uppercase tracking-wider text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Our Offices</h4>
          <div className="space-y-1.5">
            {['🇳🇬 Lagos, Nigeria (HQ)', '🇬🇭 Accra, Ghana', '🇸🇱 Freetown, Sierra Leone', '🇺🇬 Kampala, Uganda', '🇲🇿 Maputo, Mozambique', '🇳🇦 Windhoek, Namibia', '🇺🇸 Houston & Oklahoma, USA'].map((o) => (
              <div key={o} className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{o}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          © 2025 GExperts Consultoria Limited. All rights reserved.
        </p>
        <div className="flex gap-5">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>Mon–Fri: 8am – 5pm WAT</span>
          <a href="mailto:info@globalexpertsconsultoria.com"
            className="text-xs hover:text-[#c8a84b] transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)' }}>info@globalexpertsconsultoria.com</a>
        </div>
      </div>
    </div>
  </footer>
);

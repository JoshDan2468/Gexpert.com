import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Our Services', path: '/services',
    submenu: [
      { name: 'Engineering Services', path: '/engineering-services', icon: '⚙️', desc: 'EPC, FEED, detailed design & field dev.' },
      { name: 'Business Processes', path: '/business-processes', icon: '📋', desc: 'Advisory, registration & tender support' },
      { name: 'Research & Development', path: '/research-development', icon: '🔬', desc: 'FEA, CFD, construction engineering' },
      { name: 'Research & Market Intelligence', path: '/research-market-intelligence', icon: '📊', desc: 'Market analytics & due diligence' },
      { name: 'Oil & Gas Management', path: '/oil-gas-management', icon: '🛢️', desc: 'Value chain cost & compliance' },
      { name: 'Project Management & Execution', path: '/project-management', icon: '🏗️', desc: 'End-to-end project delivery' },
    ],
  },
  {
    name: 'Guiding Policies', path: '/quality-policy',
    submenu: [
      { name: 'Quality Policy', path: '/quality-policy', icon: '✅', desc: 'ISO 9001:2015 QMS framework' },
      { name: 'HSE Policy', path: '/hse-policy', icon: '🦺', desc: 'Integrated health, safety & environment' },
    ],
  },
  {
    name: 'Our Products', path: '/products',
    submenu: [
      { name: 'Digitalization & Edge Computing', path: '/products#digitalization', icon: '💻', desc: 'Smart digital transformation' },
      { name: 'Digital Twin Services', path: '/products#digital-twin', icon: '🌐', desc: 'Real-time asset mirroring' },
      { name: 'Electrical Equipment & Safety', path: '/products#electrical', icon: '⚡', desc: 'Industrial electrical solutions' },
      { name: 'Flowmeters & Sensors', path: '/products#flowmeters', icon: '📡', desc: 'Precision measurement tools' },
      { name: 'NDT Products & Laser Scanning', path: '/products#ndt', icon: '🔍', desc: 'Non-destructive testing innovation' },
      { name: 'Renewable Energy', path: '/products#renewable', icon: '🌱', desc: 'Solar, wind & clean energy' },
      { name: 'Safety / HSE', path: '/products#safety', icon: '🛡️', desc: 'Personal & site safety equipment' },
      { name: 'Thermal Monitoring', path: '/products#thermal', icon: '🌡️', desc: 'Thermographic inspection tech' },
      { name: 'Valves, Flanges & Pumps', path: '/products#valves', icon: '🔩', desc: 'Industrial fluid control systems' },
    ],
  },
  { name: 'Articles', path: '/insights' },
  { name: 'Our Partners', path: '/partners' },
  { name: 'Contact Us', path: '/contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled ? 'rgba(1,36,1,0.97)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(200,168,75,0.15)' : 'none',
          height: isScrolled ? '68px' : '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10">
              <svg viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="21,2 40,12 40,30 21,40 2,30 2,12" fill="none" stroke="#c8a84b" strokeWidth="1.5"/>
                <polygon points="21,8 34,15 34,27 21,34 8,27 8,15" fill="rgba(200,168,75,0.06)" stroke="rgba(200,168,75,0.35)" strokeWidth="1"/>
                <motion.circle cx="21" cy="21" r="4" fill="#c8a84b"
                  animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}/>
                <line x1="21" y1="8" x2="21" y2="17" stroke="#c8a84b" strokeWidth="1" opacity="0.6"/>
                <line x1="21" y1="25" x2="21" y2="34" stroke="#c8a84b" strokeWidth="1" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-[14px] tracking-[0.08em]" style={{ fontFamily: 'Syne, sans-serif' }}>GLOBAL EXPERTS</span>
              <span className="text-[9px] tracking-[0.25em] uppercase font-medium" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Consultoria</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-1 px-3 py-2 text-[12.5px] font-medium tracking-wide relative group transition-colors duration-200"
                  style={{
                    color: location.pathname === item.path ? '#c8a84b' : 'rgba(255,255,255,0.82)',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <motion.span animate={{ rotate: activeSubmenu === item.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-3 h-3 opacity-60" />
                    </motion.span>
                  )}
                  <motion.span
                    className="absolute bottom-1 left-3 right-3 h-px"
                    style={{ background: '#c8a84b' }}
                    initial={{ scaleX: location.pathname === item.path ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </Link>
                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 p-3 rounded-2xl"
                      style={{
                        background: 'rgba(1,36,1,0.98)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(200,168,75,0.15)',
                        minWidth: '340px',
                        zIndex: 100,
                      }}
                    >
                      {item.submenu.map((sub) => (
                        <Link key={sub.name} to={sub.path}
                          className="flex items-start gap-3 p-2.5 rounded-xl transition-colors duration-200"
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,168,75,0.08)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                          <span className="text-base mt-0.5 flex-shrink-0">{sub.icon}</span>
                          <div>
                            <div className="text-white text-[12.5px] font-semibold leading-tight">{sub.name}</div>
                            <div className="text-[11px] mt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.4)' }}>{sub.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="xl:hidden p-2 text-white" aria-label="Toggle menu">
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 overflow-y-auto py-24 px-8"
            style={{ background: 'rgba(1,36,1,0.98)', backdropFilter: 'blur(30px)' }}
          >
            <button className="absolute top-6 right-6 text-white p-2" onClick={() => setIsMobileOpen(false)}>
              <X className="w-7 h-7" />
            </button>
            <div className="space-y-3">
              {navItems.map((item, i) => (
                <motion.div key={item.name} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={item.path}
                    className="block text-white text-2xl font-bold py-2 hover:text-[#c8a84b] transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif' }}>
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link key={sub.name} to={sub.path}
                          className="block text-sm py-1 hover:text-[#c8a84b] transition-colors"
                          style={{ color: 'rgba(255,255,255,0.55)' }}>
                          {sub.icon} {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

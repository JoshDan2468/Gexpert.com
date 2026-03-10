import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const PageHeader = ({ title }: { title: string }) => (
  <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(160deg, #012401 0%, #080d08 60%)' }}>
    <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(200,168,75,0.07) 0%, transparent 70%)' }} />
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: 'rgba(200,168,75,0.7)', fontFamily: 'Syne Mono, monospace' }}>Home / Our Products</div>
        <h1 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h1>
        <div className="w-16 h-1 mt-5 rounded-full" style={{ background: '#c8a84b' }} />
      </motion.div>
    </div>
  </section>
);

const products = [
  {
    id: 'digitalization',
    icon: '💻',
    title: 'Digitalization and Edge Computing',
    subtitle: 'You may not know it but your world already runs on Stratus',
    body: `No matter the industry, companies are under unprecedented pressure to optimize business performance and efficiency. Automation and modernization are key – and downtime or lack of security are not an option. You work in an "Always On World."

Stratus solutions collect and analyze data at the source – the Edge of your core business processes. Whether you manage an assembly line, an oil and gas pipeline, water treatment plant, a smart building process, or biotechnology and device organization, you need to turn data into actionable results.

Our solutions and platforms are simple to install and implement, they operate autonomously with constant availability in rugged environments, and can protect your data, security, and reputation – at the Edge of your business. Stratus solutions are Simple, Protected, Autonomous.`,
    list: ['Oil & Gas', 'Pharmaceutical', 'Food & Beverage', 'Water & Wastewater', 'Power & Utilities', 'Retail', 'Transportation', 'Smart Building'],
    listTitle: 'Industries Optimizing the Edge',
  },
  {
    id: 'digital-twin',
    icon: '🌐',
    title: 'Digital Twin Service / Asset Integrity Management',
    subtitle: 'We Empower our customers to Predict the Future and Reduce Cost',
    body: `BEASY and CENOSCO are internationally recognised leaders in computer simulation and digital twin for corrosion control, galvanic corrosion, signature management, defect assessment, and crack growth simulation.

Our innovative suite of software and services are used by an unrivalled range of international organisations and industries to transform their leading-edge design concepts into innovative solutions that work.`,
    subsections: [
      { title: 'BEASY', text: 'With a team of experienced engineers, we empower industry leaders with world class support through our commitment to innovation. We endeavour to create a meaningful impact by advancing software packages that cater for Cathodic Protection and Corrosion Control, offering consultancy services, and providing engineering solutions.' },
      { title: 'CENOSCO', text: 'Cenosco brings the digital revolution to asset integrity management. Our simple-to-use and fast-performing solutions are reducing risks and improving productivity for businesses all over the world. Our cloud-based platform delivers the smart and sustainable approach to maximizing asset productivity and instrumentation safety.' },
    ],
  },
  {
    id: 'electrical',
    icon: '⚡',
    title: 'Electrical Equipment & Safety',
    subtitle: 'Industrial grade electrical solutions for demanding environments',
    body: `GEC supplies a comprehensive range of electrical equipment and safety solutions for industrial, commercial, and energy sector applications. Our electrical product portfolio covers everything from medium and low voltage equipment to advanced safety systems engineered for critical environments.`,
    list: ['Medium & Low Voltage Equipment', 'Switchgear & Control Panels', 'Cable & Wiring Systems', 'Industrial Lighting Solutions', 'Electrical Safety Devices', 'Power Distribution Units'],
    listTitle: 'Our Electrical Products',
  },
  {
    id: 'flexible-tank',
    icon: '🛢️',
    title: 'Flexible Tank',
    subtitle: 'Portable, reliable containment solutions',
    body: `GEC supplies high-quality flexible tank solutions for the storage and transportation of liquids across various industries. These collapsible tanks offer a practical and cost-effective alternative to rigid storage solutions, especially in remote or emergency-response scenarios.`,
    list: ['Fuel & Diesel Storage', 'Water Containment', 'Chemical Storage', 'Aviation Fuel Bladders', 'Emergency Response Tanks'],
    listTitle: 'Applications',
  },
  {
    id: 'flowmeters',
    icon: '📡',
    title: 'Flowmeters and Sensors',
    subtitle: 'Flow Measuring Technology and Calibration',
    body: `With a special focus on quality and precision, we develop and produce reliable flow measurement technology for our customers worldwide.

Thanks to our competent and motivated employees, extensive application knowledge as well as a high vertical range of manufacture, we also realize individual customer requirements quickly and flexibly at any time.`,
    list: ['Flowmeters', 'Pulse Amplifiers', 'Flow Pod Evaluation Electronic', 'Evaluation Electronics'],
    listTitle: 'We Handle',
  },
  {
    id: 'ndt',
    icon: '🔍',
    title: 'NDT Products Innovation & Laser Scanning',
    subtitle: 'APEX FI & QENAD — Provider of inspection, training, and certification services',
    body: `These companies were established to meet the expanding and dynamic domain of the inspection industry. The current transformation towards advanced NDT techniques inspection as well as fitness for services for more safe and economic inspection approaches has placed a demand for an integrated and comprehensive service provider promoting those latest approaches.

Our team holds inspection related qualifications awarded by industry recognized international organizations including PCN, CSWIP, NACE, API, ASNT, IRATA, LEAA, and others. We adopt a constant development strategy, relying on scientific approaches in developing new tools and techniques to meet dynamic market demands.`,
    list: ['Asset Integrity Solutions', 'Tank Calibration & Measurements', '3D Laser Scanning', 'NDT ISO9712 Examination & Certification', 'Failure Analysis and Forensic Engineering'],
    listTitle: 'We Handle',
  },
  {
    id: 'renewable',
    icon: '🌱',
    title: 'Renewable Energy',
    subtitle: 'Renewable Energy Capabilities',
    body: `To play a major role in achieving energy conservation & energy efficiency with least possible investment, developing logical thinking towards Industrial safety and be a solution provider to environmental sustainability.

Our expertise of over 25 years as well as working on various industry requirements has enabled us to innovate and develop. Our commitment and dedication is to target and achieve 100% customer satisfaction with delivering the best and most efficient products.`,
    list: ['Solar Panels', 'Inverters', 'EV Charging Ports', 'Battery Storage Systems', 'Grid Integration Services'],
    listTitle: 'Our Products Include',
  },
  {
    id: 'safety',
    icon: '🛡️',
    title: 'Safety / HSE',
    subtitle: 'Comprehensive safety and health solutions',
    body: `GEC provides a wide range of HSE products and safety equipment for industrial and construction environments. Our safety solutions are designed to protect workers, assets, and the environment while complying with international safety standards and regulations.`,
    list: ['Personal Protective Equipment (PPE)', 'Gas Detection Systems', 'Fire Suppression Equipment', 'Fall Protection Systems', 'Emergency Response Equipment', 'Safety Signage & Barriers'],
    listTitle: 'Safety Products',
  },
  {
    id: 'forecourt',
    icon: '⛽',
    title: 'Software and Hardware Forecourt Automation',
    subtitle: 'Integrated fuel retail and forecourt management systems',
    body: `GEC supplies advanced forecourt automation software and hardware solutions for the petroleum retail industry. Our systems enable fuel stations, depots, and petroleum distribution networks to automate operations, improve accuracy, and enhance customer experience.`,
    list: ['Point-of-Sale (POS) Systems', 'Fuel Management Software', 'Tank Gauging Systems', 'Payment & Loyalty Solutions', 'Remote Monitoring Platforms', 'Inventory Management Systems'],
    listTitle: 'Solutions Offered',
  },
  {
    id: 'test-equipment',
    icon: '🔧',
    title: 'Test Equipment',
    subtitle: 'Precision testing and measurement instruments',
    body: `GEC supplies high-precision test and measurement equipment for engineering, industrial, and laboratory applications. Our equipment portfolio is sourced from world-class manufacturers and meets the most demanding calibration and accuracy requirements.`,
    list: ['Calibration Instruments', 'Non-Destructive Testing Equipment', 'Pressure & Temperature Gauges', 'Electrical Test Equipment', 'Vibration & Acoustic Analyzers'],
    listTitle: 'Equipment Categories',
  },
  {
    id: 'thermal',
    icon: '🌡️',
    title: 'Thermal Monitoring',
    subtitle: 'Continuous Thermal Monitoring & Safety — Alternative to IR thermography surveys',
    body: `Continuous Thermal Monitoring & Safety (CTM) is a leading-edge solution that provides alternatives to infrared (IR) thermography surveys by EXERTHERM.

CTM is the next technology step from periodic maintenance that is important for implementing condition-based maintenance practices. It is a solution that enables data capture for analysis, allowing trends to inform predictive maintenance, enhance personnel safety and extend critical electrical equipment reliability.

CTM supplements or complements traditional periodic IR imaging surveys and other maintenance practices, enabling electrical maintenance teams to predict failures, safeguard electrical equipment, and optimize performance.`,
    list: ['Condition-Based Maintenance', 'Predictive Failure Analysis', 'Electrical Equipment Safety', 'Real-Time Temperature Monitoring', 'Personnel Safety Enhancement'],
    listTitle: 'CTM Capabilities',
  },
  {
    id: 'valves',
    icon: '🔩',
    title: 'Valves, Flanges and Pumps',
    subtitle: 'Turn-key suppliers & solution providers — Manual & Pneumatic Valves',
    body: `One of the best balanced turn-key suppliers & solution providers. Our portfolio includes Materials, Machines, Tools, Spare parts, Inspection Technologies, Special Oils, Electric Vehicle Charge Points, instrumentation automation and electrical requirements, as well as gas and water fittings.`,
    list: ['Manual & Pneumatic Valves', 'Industrial Flanges', 'Process Pumps', 'Gas & Water Fittings', 'Spare Parts & Consumables', 'EV Charge Points', 'Instrumentation & Automation'],
    listTitle: 'Products & Components',
  },
];

export const Products = () => (
  <div style={{ background: '#080d08', color: 'white' }}>
    <PageHeader title="Our Products" />
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Product Grid Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)' }}>
            GEC supplies and distributes a comprehensive portfolio of world-class products across energy, safety, instrumentation, digitalization, and infrastructure sectors.
          </p>
        </motion.div>

        {/* Quick Nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {products.map((p) => (
            <a key={p.id} href={`#${p.id}`}
              className="text-xs px-4 py-2 rounded-full border transition-all duration-200 hover:text-white hover:border-[#c8a84b]"
              style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}>
              {p.icon} {p.title.split(' ')[0]}{p.title.split(' ').length > 1 ? ' ' + p.title.split(' ').slice(1, 3).join(' ') : ''}
            </a>
          ))}
        </div>

        <div className="space-y-24">
          {products.map((product, i) => (
            <motion.div key={product.id} id={product.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px" style={{ background: '#c8a84b' }} />
                    <span className="text-[11px] tracking-[0.22em] uppercase" style={{ color: '#c8a84b', fontFamily: 'Syne Mono, monospace' }}>Product</span>
                  </div>
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{product.title}</h2>
                  <p className="text-sm mb-5 italic" style={{ color: '#c8a84b' }}>{product.subtitle}</p>
                  <div className="space-y-3 mb-6">
                    {product.body.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{para}</p>
                    ))}
                  </div>
                  {product.subsections && (
                    <div className="space-y-4 mb-6">
                      {product.subsections.map((sub) => (
                        <div key={sub.title} className="p-5 rounded-xl" style={{ background: 'rgba(200,168,75,0.05)', border: '1px solid rgba(200,168,75,0.1)' }}>
                          <h4 className="font-bold text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{sub.title}</h4>
                          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <Link to="/contact" className="inline-flex items-center gap-2 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors"
                    style={{ color: '#c8a84b', fontFamily: 'Syne, sans-serif' }}>
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  {product.list && (
                    <div className="p-8 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(200,168,75,0.1)' }}>
                      <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif', color: '#c8a84b' }}>{product.listTitle}</h4>
                      <ul className="space-y-3">
                        {product.list.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c8a84b' }} />
                            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* Visual block */}
                  <div className="mt-6 h-48 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, rgba(1,36,1,0.8), rgba(8,13,8,0.6))`, border: '1px solid rgba(200,168,75,0.08)' }}>
                    <span className="text-7xl opacity-40">{product.icon}</span>
                  </div>
                </div>
              </div>
              {i < products.length - 1 && <div className="mt-24 w-full h-px" style={{ background: 'rgba(200,168,75,0.06)' }} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// LuxeLandingPage.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import construction from '../assets/construction1.webp'

/* ---------- Brand Palette ---------- */
const palette = {
  navy:  '#001937',
  gold:  '#C5A46D',
  sand:  '#FAF7EF',
  smoke: '#F4F4F6',
};

/* ---------- Re-usable Components ---------- */
const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-md bg-white/60 shadow-lg rounded-3xl ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ title, sub }) => (
  <div className="text-center mb-20 max-w-2xl mx-auto">
    <h2 className="font-playfair text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
      {title}
    </h2>
    {sub && (
      <p className="mt-4 text-lg text-slate-500 leading-relaxed font-inter">
        {sub}
      </p>
    )}
  </div>
);

const Button = ({ children, variant = 'solid', ...props }) => {
  const base = 'inline-flex items-center gap-2 px-8 py-3 rounded-full text-lg font-semibold transition-colors active:scale-95';
  const variants = {
    solid:   `${base} text-white bg-[${palette.navy}] hover:bg-[${palette.gold}]`,
    outline: `${base} border-2 border-[${palette.navy}] text-[${palette.navy}] hover:text-white hover:bg-[${palette.navy}]`,
  };
  return (
    <button className={variants[variant]} {...props}>
      {children} <ArrowRight className="w-5 h-5" />
    </button>
  );
};

/* ---------- Framer-Motion Helpers ---------- */
const fade = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/* ---------- Page ---------- */
export default function LuxeLandingPage() {
  return (
    <main className="font-inter antialiased text-slate-700">
      {/* ======================== HERO ======================== */}
      <header className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
  {/* Fullscreen Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={construction}
      alt="UAE construction site"
      className="w-full h-full object-cover brightness-75"
    />
    {/* Optional diagonal cut */}
    <div className="absolute top-0 left-0 w-full h-full bg-[${palette.navy}] clip-diagonal opacity-60 pointer-events-none" />
  </div>

  {/* Foreground Text Content */}
  <motion.div
    initial="hidden"
    animate="show"
    variants={fade}
    className="relative z-10 px-8 py-20 text-center max-w-3xl"
  >
    <h1 className="font-playfair text-5xl md:text-6xl lg:text-[72px] leading-tight text-white mb-8">
      Crafting Landmark <br />
      <span className={`text-[${palette.gold}]`}>Futures</span>
    </h1>
    <p className="mb-10 text-lg text-slate-200">
      From highways that cut across dunes to skyline-defining bridges,
      Rayyan-Al-Arab transforms bold visions into enduring reality.
    </p>
    <Button>Discuss Your Project</Button>
  </motion.div>
</header>

      {/* ======================== VALUE PILLARS ======================== */}
      <section className="py-28 bg-[${palette.smoke}] relative overflow-hidden">
        {/* Organic blob */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[${palette.gold}] opacity-20 rounded-full blur-[160px]" />

        <SectionTitle
          title="Why Build With Us"
          sub="A fusion of precision engineering, future-driven technology and sustainable ethos."
        />

        <div className="max-w-6xl mx-auto px-6 grid gap-14 md:grid-cols-2 lg:grid-cols-3">
          {[
            ['📈', 'Predictive Delivery', 'AI-driven scheduling keeps the timeline transparent and on-track.'],
            ['🌱', 'Ethical Materials', 'Regionally-sourced, low-carbon supplies for lighter footprints.'],
            ['🤝', 'Trusted Partnerships', 'Two-decade legacy with public & private sector giants.'],
          ].map(([icon, title, desc]) => (
            <GlassCard key={title} className="p-10 text-center">
              <span className="text-5xl">{icon}</span>
              <h3 className="mt-6 mb-3 text-xl font-semibold text-slate-800">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ======================== SERVICES ======================== */}
      <section className="py-32 bg-[${palette.sand}]">
        <SectionTitle title="Signature Expertise" />

        <motion.div
          className="grid max-w-6xl mx-auto px-6 gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            ['🛣️', 'Mega Highways'],
            ['🏗️', 'Prestige Bridges'],
            ['🚄', 'Hi-Speed Rail'],
            ['💧', 'Sustainable Waterways'],
          ].map(([icon, label]) => (
            <motion.div
              key={label}
              variants={fade}
              className="relative group"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src={`/images/${label.split(' ')[1].toLowerCase()}.jpg`}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <GlassCard className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] p-6 text-center shadow-xl">
                <h4 className="font-semibold text-lg">{label}</h4>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="py-32 bg-[${palette.navy}] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[${palette.navy}] via-[#013356] to-[#024b8c] opacity-90" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="relative z-10 px-6"
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 font-extrabold">
            Let’s Shape Tomorrow—Together
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-slate-200">
            Engage our multidisciplinary team to pioneer resilient,
            future-ready infrastructure across the UAE.
          </p>
          <Button variant="outline">Start Your Journey</Button>
        </motion.div>
        {/* Decorative blob */}
        <div className="absolute -bottom-48 right-20 w-[700px] h-[700px] bg-[${palette.gold}] opacity-25 rounded-full blur-[180px]" />
        </section>
        <Footer></Footer>

    </main>

  );
}

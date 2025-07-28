/*  src/pages/HomePage.jsx
    ————————————————————————————————————————
    Modern, glassmorphism-inspired homepage for
    Rayyan Al-Arab General Contracting Co.
    Internationalised with react-i18next.
*/

import { motion } from "framer-motion";
import {
  FaEye,
  FaBullseye,
  FaRegBuilding,
  FaBolt,
  FaTools,
  FaTemperatureHigh,
  FaHardHat,
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPlay
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
const loadClientLogos = async () => {
const imageModules = import.meta.glob("../assets/*.webp", { eager: true });
return Object.values(imageModules).map((mod) => mod.default);
};

export default function HomePage() {
  const navigate = useNavigate();
  const handleNav = (path) => navigate(path);
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    loadClientLogos().then(setClientLogos);
  }, []);

  /* ───────────────────────────────
     Static data (now via i18n keys)
  */
  const services = [
    {
      title: t("services.electrical.title"),
      desc: t("services.electrical.desc"),
      icon: <FaBolt className="text-yellow-400 text-4xl" />,
      bullets: t("services.electrical.bullets", { returnObjects: true })
    },
    {
      title: t("services.plumbing.title"),
      desc: t("services.plumbing.desc"),
      icon: <FaTools className="text-blue-600 text-4xl" />,
      bullets: t("services.plumbing.bullets", { returnObjects: true })
    },
    {
      title: t("services.structural.title"),
      desc: t("services.structural.desc"),
      icon: <FaRegBuilding className="text-purple-500 text-4xl" />,
      bullets: t("services.structural.bullets", { returnObjects: true })
    },
    {
      title: t("services.hvac.title"),
      desc: t("services.hvac.desc"),
      icon: <FaTemperatureHigh className="text-red-500 text-4xl" />,
      bullets: t("services.hvac.bullets", { returnObjects: true })
    },
    {
      title: t("services.generalConstruction.title"),
      desc: t("services.generalConstruction.desc"),
      icon: <FaHardHat className="text-orange-400 text-4xl" />,
      bullets: t("services.generalConstruction.bullets", { returnObjects: true })
    },
    {
      title: t("services.safety.title"),
      desc: t("services.safety.desc"),
      icon: <FaShieldAlt className="text-teal-500 text-4xl" />,
      bullets: t("services.safety.bullets", { returnObjects: true })
    }
  ];

  const clients = [
    "Saudi Aramco",
    "Royal Commission – Jubail & Yanbu",
    "Royal Commission – Jazan",
    "Ministry of Housing",
    "Ministry of Municipal & Rural Affairs",
    "Ministry of Water & Electricity"
  ];

  const stats = [
    { number: "500+", label: t("stats.projectsCompleted") },
    { number: "20+", label: t("stats.yearsExperience") },
    { number: "95%", label: t("stats.clientSatisfaction") }
  ];

  /* ───────────────────────────────
     Motion helpers
  */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" }
    })
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.3 }
    }
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  /* ───────────────────────────────
     JSX
  */
  return (
    <div className="font-[Inter] min-h-screen bg-gradient-to-br from-[#e7e9f1] via-white to-[#f6f8fc] text-gray-900 scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: `url(${skyline})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-800/70 to-blue-600/50 animate-pulse-slow" />

        {/* Main hero content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-6xl mx-auto px-4 py-20"
        >
          <motion.div
            variants={heroTextVariants}
            className="text-center p-12 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-yellow-400/10 rounded-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center px-6 py-2 rounded-full bg-yellow-400/20 backdrop-blur-md border border-yellow-400/30 text-yellow-300 text-sm font-semibold mb-8"
              >
                {t("hero.badge")}
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={heroTextVariants}
                className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-tight"
              >
                {t("hero.title.part1")}{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                  {t("hero.title.part2")}
                </span>
                <br />
                {t("hero.title.part3")}
              </motion.h1>

              {/* Subtitle & tags */}
              <motion.div variants={heroTextVariants} className="max-w-4xl mx-auto mb-12">
                <p className="text-2xl md:text-3xl text-blue-100 font-light mb-6">
                  {t("hero.subtitle")}
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-lg text-white/90">
                  {["electrical", "plumbing", "hvac", "structural", "generalConstruction"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm"
                      >
                        {t(`hero.serviceTags.${tag}`)}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Arabic company name */}
              <motion.p
                variants={heroTextVariants}
                className="text-xl text-yellow-300 font-semibold mb-12 tracking-wide"
              >
                {t("hero.companyNameArabic")}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={heroTextVariants}
                className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/projects")}
                  className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-3">
                    {t("hero.cta.viewProjects")}
                    <FaPlay className="text-sm" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate("/contact")}
                  className="group px-10 py-5 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white rounded-full text-lg font-bold shadow-2xl hover:bg-white/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    {t("hero.cta.freeConsultation")}
                    <FaPhoneAlt className="text-sm group-hover:text-yellow-400 transition-colors" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={heroTextVariants}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <SectionHeader
        headline={t("about.title")}
        subline={t("about.subtitle")}
        fadeUp={fadeUp}
      />
      <AboutCards fadeUp={fadeUp} t={t} />

      {/* Services Section */}
      <ServicesSection fadeUp={fadeUp} services={services} t={t} />

      {/* Clients Section */}
      <ClientsSection fadeUp={fadeUp} clients={clients} t={t} />

      {/* Contact Section */}
      <ContactSection fadeUp={fadeUp} t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}

/* ───────────────────────────────
   Sub-components rewritten for i18n
*/
function SectionHeader({ headline, subline, fadeUp }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl font-bold text-center text-blue-900 mb-6"
        >
          {headline}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          {subline}
        </motion.p>
      </div>
    </section>
  );
}

function AboutCards({ fadeUp, t }) {
  const cards = [
    {
      icon: <FaEye />,
      title: t("about.vision.title"),
      text: t("about.vision.text"),
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <FaBullseye />,
      title: t("about.mission.title"),
      text: t("about.mission.text"),
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <FaRegBuilding />,
      title: t("about.experience.title"),
      text: t("about.experience.text"),
      color: "from-amber-600 to-amber-800"
    }
  ];
  return (
    <div className="container mx-auto px-4 -mt-24">
      <div className="grid md:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive contracting solutions delivered with precision, innovation, and excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={srv.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                  {srv.title}
                </h3>
                <p className="text-gray-700 mb-6 text-center">{srv.desc}</p>
                <ul className="space-y-2">
                  {srv.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

 {/* Clients Section with full card marquee */}
{/* Clients Section with Logos in Marquee Style */}
<section className="py-24 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl font-bold text-center text-blue-900 mb-6"
        >
          Trusted by Saudi Arabia's Leaders
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          Partnering with the Kingdom's most prestigious organizations
        </motion.p>

        {/* Marquee Logo Row */}
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-12"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 70,
            }}
          >
            {[...clientLogos, ...clientLogos].map((imgSrc, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex-shrink-0 bg-white p-6 rounded-2xl shadow-md border border-gray-200 w-64 h-40 flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`Client logo ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
function ServicesSection({ fadeUp, services, t }) {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.title}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group relative p-8 rounded-2xl bg-white/80 backdrop-blur shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                {srv.title}
              </h3>
              <p className="text-gray-700 mb-6 text-center">{srv.desc}</p>
              <ul className="space-y-2">
                {srv.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection({ fadeUp, clients, t }) {
  return (
    <section className="py-24 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl font-bold text-center text-blue-900 mb-6"
        >
          {t("clients.title")}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
        >
          {t("clients.subtitle")}
        </motion.p>

        <div className="relative w-full overflow-x-hidden">
          <motion.div
            className="flex gap-8"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 22
            }}
          >
            {[...clients, ...clients].map((c, idx) => (
              <div
                key={c + idx}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center min-w-[260px] max-w-xs"
              >
                <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {c}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("clients.partnerTag")}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ fadeUp, t }) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-amber-100">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl font-bold text-center text-blue-900 mb-16"
        >
          {t("contact.title")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon="📍"
            title={t("contact.office.title")}
            lines={t("contact.office.address", { returnObjects: true })}
          />
          <ContactCard
            icon={<FaPhoneAlt />}
            title={t("contact.phone.title")}
            big="+966 12 545 933"
            lines={t("contact.phone.hours", { returnObjects: true })}
            color="bg-yellow-500"
          />
          <ContactCard
            icon={<FaEnvelope />}
            title={t("contact.email.title")}
            big="info@alrayyanalarab.com"
            lines={[t("contact.email.response")]}
            color="bg-gray-700"
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-16 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
          >
            {t("contact.cta")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="bg-[#232946] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Brand t={t} />
            <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
              {t("footer.companyDescription")}
            </p>
          </div>

          <FooterList
            heading={t("footer.quickLinks.title")}
            items={t("footer.quickLinks.items", { returnObjects: true })}
          />
          <FooterList
            heading={t("footer.services.title")}
            items={t("footer.services.items", { returnObjects: true })}
          />
          <div>
            <h4 className="font-bold mb-4 text-yellow-400">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Al Aziziyah, Jeddah</p>
              <p>+966 12 545 933</p>
              <p>info@alrayyanalarab.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t("footer.brand.name")} {t("footer.brand.type")}.{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactCard({ icon, title, big, lines, color = "bg-blue-700" }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="text-center p-8 bg-white/80 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div
        className={`w-20 h-20 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
      {big && <p className="text-blue-700 text-2xl font-bold mb-2">{big}</p>}
      {lines?.map((l) => (
        <p key={l} className="text-gray-600 text-sm">
          {l}
        </p>
      ))}
    </motion.div>
  );
}

function FooterList({ heading, items }) {
  return (
    <div>
      <h4 className="font-bold mb-4 text-yellow-400">{heading}</h4>
      <ul className="space-y-3 text-sm">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Brand({ t }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center font-bold text-lg">
        RA
      </span>
      <div>
        <h4 className="font-bold text-xl">{t("footer.brand.name")}</h4>
        <p className="text-sm text-gray-400">{t("footer.brand.type")}</p>
      </div>
    </div>
  );
}

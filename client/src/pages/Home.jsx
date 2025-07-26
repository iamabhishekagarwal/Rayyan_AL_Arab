/*  src/pages/HomePage.jsx
    ————————————————————————————————————————
    Modern, glassmorphism-inspired homepage for
    Rayyan Al-Arab General Contracting Co.
    Built with React 18, Tailwind CSS v3, and
    Framer-Motion v10.
*/

import React from "react";
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
  FaPlay,
  FaChevronDown,
} from "react-icons/fa";
import skyline from "../assets/skyLineBG2.jpg";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleNav = (path) => navigate(path);

  /* ───────────────────────────────────────────
     Static data
  */
  const services = [
    {
      title: "Electrical Services",
      desc: "Complete electrical installations, power distribution, lighting, backup systems, and smart automation with up to 40% energy savings.",
      icon: <FaBolt className="text-yellow-400 text-4xl" />,
      bullets: [
        "Power distribution & LV panels",
        "Intelligent lighting systems",
        "Emergency backup & UPS",
        "Building automation (BMS)",
        "24/7 emergency support",
      ],
    },
    {
      title: "Plumbing & Pipelines",
      desc: "Professional pipeline design, water-management, and 10-year corrosion-resistant solutions for residential and industrial facilities.",
      icon: <FaTools className="text-blue-600 text-4xl" />,
      bullets: [
        "Water supply & treatment",
        "Drainage & sewage networks",
        "Gas pipeline installation",
        "Grey-water recycling",
        "Eco-flow fixtures",
      ],
    },
    {
      title: "Structural Work",
      desc: "Seismic-resistant foundations, concrete super-structures, and premium steel framing—backed by a 25-year structural warranty.",
      icon: <FaRegBuilding className="text-purple-500 text-4xl" />,
      bullets: [
        "Pile & raft foundations",
        "Post-tension slabs",
        "Steel frame erection",
        "Masonry & brickwork",
        "Structural inspections",
      ],
    },
    {
      title: "HVAC Systems",
      desc: "Desert-ready HVAC delivering 30% energy savings, central plants, VRF, and smart IoT climate control.",
      icon: <FaTemperatureHigh className="text-red-500 text-4xl" />,
      bullets: [
        "Chillers & AHUs",
        "Ventilation design (ASHRAE)",
        "VRF / VRV systems",
        "Energy-recovery wheels",
        "Smart thermostats",
      ],
    },
    {
      title: "General Construction",
      desc: "Turn-key contracting, renovations, and fast-track design-build projects with on-time delivery guarantees.",
      icon: <FaHardHat className="text-orange-400 text-4xl" />,
      bullets: [
        "Design-build delivery",
        "Interior fit-out",
        "Civil & finishing works",
        "Project management",
        "Turnkey hand-over",
      ],
    },
    {
      title: "Safety & Compliance",
      desc: "ISO-certified HSE programs, QA/QC, and full regulatory compliance for every project we execute.",
      icon: <FaShieldAlt className="text-teal-500 text-4xl" />,
      bullets: [
        "ISO 9001 / 45001 systems",
        "Permit & code compliance",
        "Site safety audits",
        "Environmental reporting",
        "Digital QA dashboards",
      ],
    },
  ];

  const clients = [
    "Saudi Aramco",
    "Royal Commission – Jubail & Yanbu",
    "Royal Commission – Jazan",
    "Ministry of Housing",
    "Ministry of Municipal & Rural Affairs",
    "Ministry of Water & Electricity",
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "20+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  /* ───────────────────────────────────────────
     Motion helpers
  */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  /* ───────────────────────────────────────────
     JSX
  */
  return (
    <div className="font-[Inter] min-h-screen bg-gradient-to-br from-[#e7e9f1] via-white to-[#f6f8fc] text-gray-900 scroll-smooth">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
          style={{ backgroundImage: `url(${skyline})` }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-800/70 to-blue-600/50 animate-pulse-slow" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-blue-400/30 rounded-lg blur-lg"
            animate={{
              y: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-400/25 rounded-full blur-lg"
            animate={{
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-6xl mx-auto px-4 py-20"
        >
          {/* Hero Card with Enhanced Glassmorphism */}
          <motion.div
            variants={heroTextVariants}
            className="text-center p-12 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-yellow-400/10 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center px-6 py-2 rounded-full bg-yellow-400/20 backdrop-blur-md border border-yellow-400/30 text-yellow-300 text-sm font-semibold mb-8"
              >
                🏆 Saudi Arabia's Trusted Construction Partner
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                variants={heroTextVariants}
                className="text-6xl md:text-8xl font-black tracking-tight text-white mb-8 leading-tight"
              >
                Building{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                  Excellence
                </span>
                <br />
                Across Saudi Arabia
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.div
                variants={heroTextVariants}
                className="max-w-4xl mx-auto mb-12"
              >
                <p className="text-2xl md:text-3xl text-blue-100 font-light mb-6">
                  Premier Construction & Engineering Solutions
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-lg text-white/90">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                    ⚡ Electrical
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                    🔧 Plumbing
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                    🌡️ HVAC
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                    🏗️ Structural
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                    🏢 General Construction
                  </span>
                </div>
              </motion.div>

              {/* Arabic Text */}
              <motion.p
                variants={heroTextVariants}
                className="text-xl text-yellow-300 font-semibold mb-12 tracking-wide"
              >
                مؤسسة ريان العرب للمقاولات العامة
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={heroTextVariants}
                className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNav("/projects")}
                  className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-3">
                    View Our Projects
                    <FaPlay className="text-sm" />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNav("/contact")}
                  className="group px-10 py-5 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white rounded-full text-lg font-bold shadow-2xl hover:bg-white/30 hover:border-yellow-400/50 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    Free Consultation
                    <FaPhoneAlt className="text-sm group-hover:text-yellow-400 transition-colors" />
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                variants={heroTextVariants}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <FaChevronDown className="text-xl" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-white" />
        <div className="container mx-auto px-4 relative">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-bold text-center text-blue-900 mb-6"
          >
            About Rayyan Al-Arab
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          >
            Leading Saudi Arabia's construction evolution with innovative solutions and unmatched expertise
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaEye />,
                title: "Vision 2030 Alignment",
                text: "Deliver iconic infrastructure that accelerates the Kingdom's Vision 2030 while championing sustainability and innovation.",
                color: "from-blue-600 to-blue-800",
              },
              {
                icon: <FaBullseye />,
                title: "Mission of Quality",
                text: "Innovate, build, and maintain the highest standards of safety, efficiency, and client satisfaction across all projects.",
                color: "from-purple-600 to-purple-800",
              },
              {
                icon: <FaRegBuilding />,
                title: "20 Years in the Field",
                text: "500+ completed projects, 95% repeat-client ratio, and a flawless safety record across diverse sectors.",
                color: "from-amber-600 to-amber-800",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="group p-8 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800">{card.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-amber-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
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

    {/* Marquee Row */}
    <div className="relative w-full overflow-x-hidden">
      <motion.div
        className="flex gap-8"
        style={{ width: "max-content" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 22, // Adjust for scroll speed
        }}
      >
        {/* Repeat two sets for smooth loop */}
        {[...clients, ...clients].map((c, idx) => (
          <div
            key={c + idx}
            className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center min-w-[260px] max-w-xs"
          >
            <h3 className="font-bold text-lg text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
              {c}
            </h3>
            <p className="text-gray-500 text-sm">Strategic infrastructure partner</p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>



      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-100 via-white to-amber-100">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-bold text-center text-blue-900 mb-16"
          >
            Get in Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ContactCard
              icon="📍"
              title="Visit Our Office"
              lines={[
                "Al Ameer Majid St.",
                "Al Aziziyah District, Jeddah",
                "Saudi Arabia",
              ]}
            />
            <ContactCard
              icon={<FaPhoneAlt />}
              title="Call Us"
              big="+966 12 545 933"
              lines={["Business hours 09-18", "Emergency 24/7"]}
              color="bg-yellow-500"
            />
            <ContactCard
              icon={<FaEnvelope />}
              title="Email Us"
              big="info@alrayyanalarab.com"
              lines={["Replies within 24 hrs"]}
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
              onClick={() => handleNav("/contact")}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-16 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Request Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#232946] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <Brand />
              <p className="mt-4 text-gray-400 text-sm max-w-xs leading-relaxed">
                Building excellence with innovation and trust across Saudi Arabia's infrastructure landscape.
              </p>
            </div>

            <FooterList
              heading="Quick Links"
              items={["About Us", "Projects", "Services", "Contact"]}
            />
            <FooterList
              heading="Services"
              items={[
                "Electrical",
                "HVAC",
                "Structural",
                "General Construction",
              ]}
            />
            <div>
              <h4 className="font-bold mb-4 text-yellow-400">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Al Aziziyah, Jeddah</p>
                <p>+966 12 545 933</p>
                <p>info@alrayyanalarab.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Rayyan Al-Arab General Contracting Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ————————————————————————————————————————
   Helper Components
*/
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

function Brand() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center font-bold text-lg">
        RA
      </span>
      <div>
        <h4 className="font-bold text-xl">Rayyan Al-Arab</h4>
        <p className="text-sm text-gray-400">General Contracting</p>
      </div>
    </div>
  );
}

/* ————————————————————————————————————————
   Add these custom animations to your Tailwind config:
   
   module.exports = {
     theme: {
       extend: {
         animation: {
           'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         }
       }
     }
   }
———————————————————————————————————————— */

import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "./../assets/skyLineBG2.jpg";
export default function HomePage() {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [activeTab, setActiveTab] = useState();

  const tabs = ["Home", "About Us", "Our Projects", "Services", "Contact"];

  const projects = [
    "Saudi Aramco",
    "Royal Commission - Jubail, Yanbu & Jizan",
    "Ministry of Housing",
    "Ministry of Municipal & Rural Affairs",
    "Ministry of Water & Electricity",
    "Ministry of Transportation",
  ];

  const services = [
    {
      title: "Electrical Services",
      description:
        "Complete electrical installations, wiring, panel upgrades, and maintenance for all project types. Power distribution systems, lighting installations, emergency backup systems, and smart automation.",
      features: [
        "Power distribution systems",
        "Lighting installations",
        "Emergency backup systems",
        "Smart home automation",
      ],
    },
    {
      title: "Plumbing & Pipelines",
      description:
        "Professional plumbing installations, pipeline systems, and water management solutions tailored to meet modern infrastructure needs.",
      features: [
        "Water supply systems",
        "Drainage & sewage systems",
        "Gas pipeline installation",
        "Water treatment systems",
      ],
    },
    {
      title: "Structural Work",
      description:
        "Foundation work, concrete structures, steel framing, and all structural construction needs met with precision and durability.",
      features: [
        "Foundation & concrete work",
        "Steel frame construction",
        "Masonry & brickwork",
        "Structural inspections",
      ],
    },
    {
      title: "HVAC Systems",
      description:
        "Heating, ventilation, and air conditioning systems for optimal climate control, designed with efficiency and sustainability.",
      features: [
        "Central air systems",
        "Ventilation design",
        "Energy-efficient solutions",
        "Smart HVAC integrations",
      ],
    },
    {
      title: "General Construction",
      description:
        "Complete construction services including renovations, additions, and new builds, tailored to each client's vision.",
      features: [
        "Interior & exterior work",
        "Renovations & remodeling",
        "Project management",
        "Turnkey solutions",
      ],
    },
    {
      title: "Safety & Compliance",
      description:
        "Ensuring all work meets safety standards and building codes with proper certifications and documentation.",
      features: [
        "Building code compliance",
        "Safety inspections",
        "Quality assurance",
        "Environmental compliance",
      ],
    },
  ];

  return (
    <div className="bg-slate-50 text-gray-800 min-h-screen">
      {/* Enhanced Navigation */}
      <header className="bg-white shadow-lg border-b-2 border-blue-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RA</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  Rayyan Al-Arab
                </h1>
                <p className="text-sm text-amber-600 font-medium">
                  مؤسسة ريان العرب للمقاوالت العامة
                </p>
              </div>
            </motion.div>

            <nav className="hidden md:flex space-x-8">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-gray-600 hover:text-blue-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </nav>

            <div className="flex space-x-3">
              {["English", "العربية"].map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => setCurrentLanguage(lang)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    currentLanguage === lang
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {lang}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </header>
      {/* Enhanced Hero Section */}
      <motion.section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* Optional: A semi-transparent dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building a{" "}
              <span className="text-amber-400 dark:text-amber-300">
                Stronger Future
              </span>
              , Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Excellence in Electrical, Plumbing, Structural, HVAC & General
              Contracting Services across Saudi Arabia
            </p>
            <p className="text-lg text-amber-300 mb-8 font-medium">
              مؤسسة ريان العرب للمقاوالت العامة - شريكك الموثوق في البناء
              والتطوير
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3, backgroundColor: "#1d4ed8" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Projects
              </motion.button>
              <motion.button
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-700 hover:bg-blue-50 transition-all duration-300 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-white/10"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Enhanced About Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">
              About Rayyan Al-Arab
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With decades of experience in Saudi Arabia's construction
              industry, we have established ourselves as a trusted partner for
              major government and private sector projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold" title="Vision">
                  V
                </span>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading construction company in Saudi Arabia,
                delivering world-class infrastructure projects that contribute
                to the Kingdom's Vision 2030.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 hover:from-amber-100 hover:to-amber-200 dark:hover:from-amber-800 dark:hover:to-amber-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold" title="Mission">
                  M
                </span>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                To provide exceptional construction services through innovation,
                quality craftsmanship, and unwavering commitment to safety and
                sustainability.
              </p>
            </motion.div>

            {/* About Card */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold" title="About">
                  A
                </span>
              </div>
              <h4 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">
                About Us
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                A premier construction company serving major clients across
                Saudi Arabia with comprehensive contracting solutions and
                unmatched expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Major Clients Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-blue-900 mb-6">
              Major Clients & Projects
            </h3>
            <p className="text-xl text-gray-700">
              Trusted by Saudi Arabia's leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                    <span className="text-amber-600 text-sm">→</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {project}
                </h4>
                <p className="text-gray-600 text-sm">
                  Major infrastructure and construction projects delivered with
                  excellence
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Enhanced Services Section */}
      {/* <section className="py-20 bg-slate-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">
              Major Clients & Projects
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Trusted by Saudi Arabia's leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03, y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center group-hover:bg-amber-200 dark:group-hover:bg-amber-700 transition-colors">
                    <span className="text-amber-600 dark:text-amber-300 text-sm">
                      →
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {project}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Major infrastructure and construction projects delivered with
                  excellence
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-blue-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-700">
              Ready to start your next project? Contact our experts today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Visit Our Office
              </h4>
              <p className="text-gray-700">
                Al Ameer Majid Street
                <br />
                Al Aziziyah District, Jeddah
                <br />
                Saudi Arabia
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Call Us</h4>
              <p className="text-gray-700 text-2xl font-bold text-blue-700">
                +966 12 545 933
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Available during business hours
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Email Us</h4>
              <p className="text-blue-700 font-semibold">
                info@alrayyanalarab.com
              </p>
              <p className="text-sm text-gray-600 mt-2">
                We'll respond within 24 hours
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-blue-700 text-white px-12 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3, backgroundColor: "#1d4ed8" }}
              whileTap={{ scale: 0.95 }}
            >
              Request Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RA</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Rayyan Al-Arab</h4>
                  <p className="text-sm text-gray-400">
                    General Contracting Co.
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Building excellence across Saudi Arabia with trusted expertise
                and innovation.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-blue-300">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-blue-300">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Electrical Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    HVAC Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Structural Work
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    General Construction
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-blue-300">Contact Info</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Al Aziziyah District, Jeddah</p>
                <p>+966 12 545 933</p>
                <p>info@alrayyanalarab.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Rayyan Al-Arab General
              Contracting Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

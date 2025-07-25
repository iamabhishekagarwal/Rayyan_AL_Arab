import React from "react";

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Prestigious Clients", value: "75+" },
  { label: "Awards", value: "12" },
];

const services = [
  { title: "Residential Construction", desc: "Custom homes and apartment complexes designed and built to the highest standards." },
  { title: "Commercial Projects", desc: "Offices, retail spaces, and mixed-use developments tailored to business needs." },
  { title: "Industrial Facilities", desc: "Robust structures designed for manufacturing, logistics, and heavy industry." },
  { title: "Infrastructure Development", desc: "Roads, bridges, utilities, and public works enabling regional growth." },
  { title: "MEP (Mechanical, Electrical, Plumbing)", desc: "Full-scale engineering systems ensuring safety and efficiency." },
  { title: "HVAC Installation", desc: "Climate control solutions customized for all building types." },
  { title: "Project Management", desc: "End-to-end coordination ensuring timely and on-budget delivery." },
  { title: "Design & Build Solutions", desc: "Integrated services from concept through completion." },
];

const values = [
  { title: "Integrity", desc: "We uphold the highest standards of honesty and ethics in all our projects and partnerships." },
  { title: "Quality", desc: "We are committed to delivering durable, high-caliber structures that surpass expectations." },
  { title: "Innovation", desc: "We embrace new technologies and creative processes to drive value and efficiency." },
  { title: "Safety", desc: "Protecting our people and the communities we serve is our top priority on every project." },
  { title: "Sustainability", desc: "We implement environmentally responsible practices for a greener future." },
];

const testimonials = [
  {
    quote: "Rayyan Al-Arab delivered our new headquarters ahead of schedule with exceptional quality—exceeding every expectation.",
    author: "CEO, Major Saudi Arab Corporation",
  },
  {
    quote: "From planning to execution, the team maintained open communication, flexibility, and full transparency.",
    author: "Infrastructure Client, UAE",
  },
];

const processSteps = [
  "Consultation: Understanding client goals, site conditions, and budget constraints.",
  "Planning & Design: Developing detailed blueprints optimized for safety and sustainability.",
  "Permitting & Approvals: Coordinating with authorities to secure necessary permits on time.",
  "Construction & Execution: Deploying expert teams and premium materials to build with precision.",
  "Quality Assurance: Rigorous inspections and testing throughout every phase to ensure standards.",
  "Handover & Support: Providing comprehensive training and post-completion maintenance services.",
];

const AboutSection = () => (
  <section className="relative py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 overflow-hidden">
    {/* Decorative backgrounds */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 w-2/3 h-80 bg-gradient-to-tr from-blue-100 via-blue-200 to-transparent rounded-b-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-80 bg-gradient-to-bl from-yellow-100 via-yellow-200 to-transparent rounded-t-full opacity-20"></div>
    </div>

    {/* Main content */}
    <div className="relative max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 drop-shadow tracking-tight">
          About Us
        </h2>
        <p className="mx-auto text-lg md:text-xl text-gray-600 max-w-2xl">
          Rayyan Al-Arab General Contracting Co. is a trusted name in the construction industry, delivering excellence across Saudi Arabia and the UAE through innovative solutions and dedicated expertise.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        <div className="bg-blue-100/80 border border-blue-200 rounded-2xl shadow-lg p-8 group hover:scale-105 hover:bg-blue-200 transition duration-300 backdrop-blur">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-blue-600 mr-3">01</span>
            <h3 className="text-2xl font-semibold text-gray-800">Who We Are</h3>
          </div>
          <p className="text-gray-700">
            With a strong foundation in engineering, construction, and infrastructure, we provide end-to-end services for residential, commercial, and industrial sectors. Our reputation is built on quality, integrity, and client satisfaction.
          </p>
          <p className="text-gray-700 mt-4">
            Our diverse team includes experienced engineers, architects, project managers, and skilled tradespeople who collaborate to ensure every project is executed flawlessly.
          </p>
        </div>
        <div className="bg-green-100/80 border border-green-200 rounded-2xl shadow-lg p-8 group hover:scale-105 hover:bg-green-200 transition duration-300 backdrop-blur">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-green-600 mr-3">02</span>
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          </div>
          <p className="text-gray-700">
            To deliver reliable, high-quality, and cost-effective construction and engineering solutions while ensuring safety, sustainability, and client satisfaction at every stage of the project.
          </p>
          <p className="text-gray-700 mt-4">
            We strive to lead the region in innovation and sustainable building practices, setting new benchmarks for excellence in the construction industry.
          </p>
        </div>
        <div className="bg-yellow-100/80 border border-yellow-200 rounded-2xl shadow-lg p-8 group hover:scale-105 hover:bg-yellow-200 transition duration-300 backdrop-blur">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-yellow-600 mr-3">03</span>
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          </div>
          <p className="text-gray-700">
            We proudly serve prestigious clients across major sectors in Saudi Arabia and the UAE, contributing to the region's development through strategic infrastructure and building projects.
          </p>
          <p className="text-gray-700 mt-4">
            Our mission is to combine technical expertise, innovation, and client collaboration to build lasting structures that support economic and social growth.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-14">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">Why Choose Us?</h3>
        <p className="text-center mx-auto max-w-2xl text-gray-700 mb-6">
          Our proven track record, highly skilled workforce, and unwavering commitment to quality make us the partner of choice for clients seeking reliability, professionalism, and innovative project solutions.
        </p>
        <ul className="max-w-3xl mx-auto text-gray-700 space-y-2 list-disc px-6 md:px-0">
          <li>Extensive expertise spanning residential, commercial, industrial, and infrastructure projects.</li>
          <li>Strong focus on client requirements, delivering personalized and transparent services.</li>
          <li>Commitment to sustainability and adherence to strict safety standards.</li>
          <li>Use of cutting-edge technology and project management methodologies.</li>
          <li>Comprehensive services covering design, engineering, construction, and post-project support.</li>
        </ul>
      </div>

      {/* Our Core Values */}
      <div className="mb-14">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white bg-opacity-60 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">{v.title}</h4>
              <p className="text-gray-700 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-gray-700">
          {services.map(({ title, desc }) => (
            <div key={title} className="bg-white bg-opacity-30 rounded-lg p-4 shadow hover:bg-white hover:bg-opacity-60 transition">
              <h4 className="font-semibold text-blue-700 mb-2">{title}</h4>
              <p className="text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Achievements */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Key Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-white bg-opacity-60 rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-green-700 mb-1">{value}</div>
              <div className="text-gray-800 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Process */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Our Process</h3>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Testimonials */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Testimonials</h3>
        <div className="space-y-8">
          {testimonials.map(({ quote, author }, i) => (
            <figure key={i} className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-800 italic text-lg leading-relaxed">“{quote}”</blockquote>
              <figcaption className="mt-4 text-green-700 font-semibold text-right">— {author}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-14">
        <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Ready to build the future?
        </p>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
          Contact us to discover how Rayyan Al-Arab General Contracting Co. can bring your vision to life, safely and sustainably.
        </p>
        <a
          href="mailto:contact@rayyanalarab.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default AboutSection;

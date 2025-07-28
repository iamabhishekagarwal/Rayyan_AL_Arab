// AboutSection.jsx
import React from "react";
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Prestigious Clients", value: "75+" },
  { label: "Awards Won", value: "12" },
];

const services = [
  {
    icon: BuildingOffice2Icon,
    title: "Residential Construction",
    desc: "Custom homes and apartment complexes designed to the highest standards.",
  },
  {
    icon: BriefcaseIcon,
    title: "Commercial Projects",
    desc: "Offices, retail spaces, and mixed-use developments tailored to business needs.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Industrial Facilities",
    desc: "Robust structures engineered for heavy industry and logistics.",
  },
  {
    icon: LightBulbIcon,
    title: "Design & Build Solutions",
    desc: "Integrated concept-to-completion delivery for maximum efficiency.",
  },
];

const values = [
  {
    icon: ShieldCheckIcon,
    title: "Integrity",
    desc: "We uphold the highest standards of honesty in every partnership.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Quality",
    desc: "Durable, high-caliber structures that surpass expectations.",
  },
  {
    icon: LightBulbIcon,
    title: "Innovation",
    desc: "New technologies and creative processes drive value.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safety",
    desc: "Protecting people and communities is our top priority.",
  },
  {
    icon: BriefcaseIcon,
    title: "Sustainability",
    desc: "Environmentally responsible practices for a greener future.",
  },
];

const steps = [
  "Consultation: Understanding goals, site, and budget.",
  "Planning & Design: Detailed blueprints for safety and sustainability.",
  "Permitting & Approvals: Seamless coordination with authorities.",
  "Building & Execution: Expert teams and premium materials.",
  "Quality Assurance: Rigorous inspections at every phase.",
  "Handover & Support: Training and post-completion maintenance.",
];

const AboutSection = () => (
  <section
    id="about"
    className="relative min-h-screen py-20 px-4 sm:px-8 lg:px-28 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 text-gray-800 overflow-hidden"
  >
    {/* Decorative backgrounds */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-2/3 h-80 bg-gradient-to-tr from-blue-100 via-blue-200 to-transparent rounded-b-full opacity-30 animate-fadeInDown" />
      <div className="absolute bottom-0 right-0 w-2/3 h-80 bg-gradient-to-bl from-yellow-100 via-yellow-200 to-transparent rounded-t-full opacity-20 animate-fadeInUp" />
      <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-yellow-400 rounded-full opacity-10 blur-2xl animate-pulse" />
    </div>

    <div className="relative max-w-7xl mx-auto z-10">
      {/* Header */}
      <header className="mb-16 text-center">
        <p className="text-base md:text-lg font-bold uppercase tracking-widest text-emerald-600">
          Building Tomorrow’s Skylines
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-blue-900 font-serif drop-shadow-sm tracking-tight sm:text-5xl animate-fadeIn">
          About Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed animate-fadeIn">
          Rayyan Al-Arab General Contracting Co. delivers excellence across Saudi Arabia and the UAE through innovative construction solutions.
        </p>
      </header>

      {/* Pillars */}
      <div className="grid gap-8 md:grid-cols-3 mt-12 md:mt-20">
        {[
          ["01", "Who We Are", "We provide end-to-end services for residential, commercial, and industrial sectors with a reputation built on quality, integrity, and client satisfaction."],
          ["02", "Our Vision", "To deliver reliable, cost-effective engineering solutions while ensuring safety, sustainability, and customer delight at every project stage."],
          ["03", "Our Mission", "Combining technical expertise, innovation, and collaboration to build lasting structures that fuel economic and social growth."],
        ].map(([no, title, copy]) => (
          <article
            key={title}
            className="relative rounded-2xl bg-white bg-opacity-70 shadow-xl p-8 transition hover:-translate-y-1 hover:shadow-emerald-200 animate-fadeInUp"
          >
            <span className="absolute -top-5 left-6 px-3 py-1 text-sm font-bold rounded-full bg-yellow-300 text-gray-800 shadow">
              {no}
            </span>
            <h3 className="text-xl font-sans font-bold text-blue-900 mb-2">{title}</h3>
            <p className="mt-3 text-gray-700">{copy}</p>
          </article>
        ))}
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map(({ label, value }, i) => (
          <div
            key={label}
            className="flex flex-col items-center rounded-2xl bg-white bg-opacity-70 px-6 py-8 shadow-md animate-fadeInUp"
            style={{ animationDelay: `${0.15 * (i + 1)}s` }}
          >
            <p className="text-3xl font-extrabold text-emerald-600">{value}</p>
            <p className="mt-2 text-center text-sm font-medium text-gray-700">{label}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="mt-24">
        <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">Core Services</h3>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl bg-white bg-opacity-70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-blue-200 animate-fadeInUp"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <Icon className="h-10 w-10 text-blue-600 mb-3 transition group-hover:text-yellow-400" />
              <h4 className="mt-1 text-lg font-semibold text-blue-900">{title}</h4>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-24">
        <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">Core Values</h3>
        <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="rounded-2xl bg-white bg-opacity-70 p-6 text-center shadow-lg hover:shadow-yellow-200 animate-fadeInUp"
              style={{ animationDelay: `${0.09 * (i + 1)}s` }}
            >
              <Icon className="mx-auto h-7 w-7 text-yellow-400 mb-2" />
              <h5 className="mt-1 font-semibold text-blue-900">{title}</h5>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative mx-auto mt-28 max-w-3xl">
        <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">Our Process</h3>
        <ol className="relative mt-12 border-l-4 border-yellow-300 pl-12">
  {steps.map((step, idx) => (
    <li key={step} className="relative mb-10 animate-fadeInUp">
      <span className="absolute -left-6 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white ring-4 ring-white shadow-md">
        {idx + 1}
      </span>
      <p className="text-lg text-gray-700">{step}</p>
    </li>
  ))}
</ol>
      </section>

      {/* Testimonials */}
      <section className="mx-auto mt-28 max-w-4xl">
        <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">Testimonials</h3>
        <div className="mt-10 space-y-8">
          {[
            [
              "Rayyan Al-Arab delivered our new headquarters ahead of schedule with exceptional quality—exceeding every expectation.",
              "CEO, Major GCC Corporation",
            ],
            [
              "From planning to execution, the team maintained open communication, flexibility, and full transparency.",
              "Infrastructure Client, UAE",
            ],
          ].map(([quote, author], i) => (
            <figure
              key={author}
              className="rounded-2xl bg-white bg-opacity-80 p-8 shadow-lg animate-fadeInUp"
              style={{ animationDelay: `${0.14 * (i + 1)}s` }}
            >
              <blockquote className="text-lg italic text-blue-900">“{quote}”</blockquote>
              <figcaption className="mt-4 text-right font-semibold text-emerald-600">— {author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-28 text-center animate-fadeInUp">
        <p className="text-3xl font-extrabold font-serif text-blue-900">Ready to Build the Future?</p>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-700">
          Contact us to discover how Rayyan Al-Arab can bring your vision to life—safely and sustainably.
        </p>
        <a
          href="mailto:contact@rayyanalarab.com"
          className="mt-8 inline-flex items-center px-10 py-4 rounded-full bg-yellow-400 text-blue-900 font-bold text-lg shadow-lg hover:bg-emerald-600 hover:text-white transition"
        >
          Get in Touch
        </a>
      </footer>
    </div>

    {/* Animation styles */}
    <style>{`
      @keyframes fadeInUp {
        0%   { opacity: 0; transform: translateY(40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      @keyframes fadeInDown {
        0%   { opacity: 0; transform: translateY(-40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      @keyframes fadeIn {
        0%   { opacity: 0;}
        100% { opacity: 1;}
      }
      @keyframes pulse {
        0%,100%{ opacity: 1;}
        50% { opacity: .5;}
      }
      .animate-fadeInUp {
        animation: fadeInUp 0.9s cubic-bezier(0.25, 0.44, 0.45, 1) both;
      }
      .animate-fadeInDown {
        animation: fadeInDown 0.8s cubic-bezier(0.25, 0.44, 0.45, 1) both;
      }
      .animate-fadeIn {
        animation: fadeIn 1.2s both;
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;
      }
    `}</style>
  </section>
);

export default AboutSection;

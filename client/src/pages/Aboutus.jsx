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
  /* Outer bg flips automatically when html has class="dark" */
  <section
    id="about"
    className="relative overflow-hidden bg-slate-50 py-20 text-slate-800 dark:bg-navy-950 dark:text-slate-100"
  >
    {/* Background crane image with dark overlay */}
    <div
      className="absolute inset-0 -z-10 bg-[url('/images/hero-crane.jpg')] bg-cover bg-center opacity-10 dark:opacity-5"
      aria-hidden="true"
    />
    <div className="absolute inset-0 -z-20 bg-white/70 dark:bg-gunmetal/90 backdrop-blur-sm" />

    {/* Wrapper */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Building Tomorrow’s Skylines
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-navy-900 dark:text-slate-50 sm:text-5xl">
          About Us
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Rayyan Al-Arab General Contracting Co. delivers excellence across
          Saudi Arabia and the UAE through innovative construction solutions.
        </p>
      </header>

      {/* Pillars */}
      <div className="grid gap-8 md:grid-cols-3">
        {[
          [
            "01",
            "Who We Are",
            "We provide end-to-end services for residential, commercial, and industrial sectors with a reputation built on quality, integrity, and client satisfaction.",
          ],
          [
            "02",
            "Our Vision",
            "To deliver reliable, cost-effective engineering solutions while ensuring safety, sustainability, and customer delight at every project stage.",
          ],
          [
            "03",
            "Our Mission",
            "Combining technical expertise, innovation, and collaboration to build lasting structures that fuel economic and social growth.",
          ],
        ].map(([no, title, copy]) => (
          <article
            key={title}
            className="relative rounded-xl bg-white/90 p-8 shadow-md transition hover:-translate-y-1 hover:shadow-emerald-500/20 dark:bg-gunmetal"
          >
            <span className="absolute -top-5 left-6 rounded bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-800 dark:bg-yellow-500">
              {no}
            </span>
            <h3 className="text-xl font-semibold text-navy-900 dark:text-emerald-400">
              {title}
            </h3>
            <p className="mt-4 text-slate-700 dark:text-slate-300">{copy}</p>
          </article>
        ))}
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded bg-white/90 px-6 py-8 shadow dark:bg-gunmetal"
          >
            <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {value}
            </p>
            <p className="mt-2 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="mt-24">
        <h3 className="text-center text-3xl font-bold text-navy-900 dark:text-slate-50">
          Core Services
        </h3>
        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col rounded-lg bg-white/90 p-6 shadow transition hover:-translate-y-1 hover:shadow-emerald-500/20 dark:bg-gunmetal"
            >
              <Icon className="h-8 w-8 text-emerald-600 transition group-hover:text-yellow-400 dark:text-emerald-400" />
              <h4 className="mt-4 font-semibold text-navy-900 dark:text-slate-50">
                {title}
              </h4>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-28">
        <h3 className="text-center text-3xl font-bold text-navy-900 dark:text-slate-50">
          Core Values
        </h3>
        <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-lg bg-white/90 p-6 text-center shadow transition hover:shadow-emerald-500/20 dark:bg-gunmetal"
            >
              <Icon className="mx-auto h-6 w-6 text-yellow-400" />
              <h5 className="mt-4 font-semibold text-navy-900 dark:text-slate-50">
                {title}
              </h5>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative mx-auto mt-28 max-w-3xl">
        <h3 className="text-center text-3xl font-bold text-navy-900 dark:text-slate-50">
          Our Process
        </h3>
        <ol className="relative mt-12 border-l-2 border-yellow-400 pl-8 dark:border-yellow-500">
          {steps.map((step, idx) => (
            <li key={step} className="mb-10 ml-4" style={{ listStyle: "none" }}>
              <span
                className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs text-white ring-4 ring-white dark:bg-emerald-500 dark:ring-gunmetal"
                aria-hidden="true"
              >
                {idx + 1}
              </span>
              <p className="text-lg text-slate-800 dark:text-slate-300">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mx-auto mt-28 max-w-4xl">
        <h3 className="text-center text-3xl font-bold text-navy-900 dark:text-slate-50">
          Testimonials
        </h3>
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
          ].map(([quote, author]) => (
            <figure
              key={author}
              className="rounded-lg bg-white/90 p-8 shadow-lg dark:bg-gunmetal"
            >
              <blockquote className="text-lg italic text-slate-700 dark:text-slate-300">
                “{quote}”
              </blockquote>
              <figcaption className="mt-4 text-right font-semibold text-emerald-600 dark:text-emerald-400">
                — {author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <footer className="mt-28 text-center">
        <p className="text-3xl font-bold text-navy-900 dark:text-slate-50">
          Ready to Build the Future?
        </p>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-700 dark:text-slate-300">
          Contact us to discover how Rayyan Al-Arab can bring your vision to
          life—safely and sustainably.
        </p>
        <a
          href="mailto:contact@rayyanalarab.com"
          className="mt-8 inline-flex items-center rounded-full bg-yellow-400 px-10 py-4 font-semibold text-slate-900 transition hover:bg-emerald-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:bg-yellow-500"
        >
          Get in Touch
        </a>
      </footer>
    </div>
  </section>
);

export default AboutSection;

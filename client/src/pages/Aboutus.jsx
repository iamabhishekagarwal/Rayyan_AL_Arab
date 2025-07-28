import React from "react";
import { useTranslation } from "react-i18next";
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  const { t } = useTranslation();

  // Translation keys for arrays
  const statsKeys = ["experience", "projects", "clients", "awards"];
  const servicesKeys = ["residential", "commercial", "industrial", "design"];
  const valuesKeys = ["integrity", "quality", "innovation", "safety", "sustainability"];
  const stepsKeys = ["consultation", "planning", "permitting", "building", "quality", "handover"];
  const testimonialsKeys = ["testimonial1", "testimonial2"];
  const pillarsKeys = ["who_we_are", "our_vision", "our_mission"];

  // Icon mapping for services
  const serviceIcons = {
    residential: BuildingOffice2Icon,
    commercial: BriefcaseIcon,
    industrial: WrenchScrewdriverIcon,
    design: LightBulbIcon,
  };

  // Icon mapping for values
  const valueIcons = {
    integrity: ShieldCheckIcon,
    quality: WrenchScrewdriverIcon,
    innovation: LightBulbIcon,
    safety: ShieldCheckIcon,
    sustainability: BriefcaseIcon,
  };

  return (
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
            {t("About.header.tagline")}
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-blue-900 font-serif drop-shadow-sm tracking-tight sm:text-5xl animate-fadeIn">
            {t("About.header.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg md:text-xl leading-relaxed animate-fadeIn">
            {t("About.header.description")}
          </p>
        </header>

        {/* Pillars */}
        <div className="grid gap-8 md:grid-cols-3 mt-12 md:mt-20">
          {pillarsKeys.map((key, index) => (
            <article
              key={key}
              className="relative rounded-2xl bg-white bg-opacity-70 shadow-xl p-8 transition hover:-translate-y-1 hover:shadow-emerald-200 animate-fadeInUp"
            >
              <span className="absolute -top-5 left-6 px-3 py-1 text-sm font-bold rounded-full bg-yellow-300 text-gray-800 shadow">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-sans font-bold text-blue-900 mb-2">
                {t(`About.pillars.${key}.title`)}
              </h3>
              <p className="mt-3 text-gray-700">
                {t(`About.pillars.${key}.description`)}
              </p>
            </article>
          ))}
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {statsKeys.map((key, i) => (
            <div
              key={key}
              className="flex flex-col items-center rounded-2xl bg-white bg-opacity-70 px-6 py-8 shadow-md animate-fadeInUp"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <p className="text-3xl font-extrabold text-emerald-600">
                {t(`About.stats.${key}.value`)}
              </p>
              <p className="mt-2 text-center text-sm font-medium text-gray-700">
                {t(`About.stats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>

        {/* Services */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">
            {t("About.services.title")}
          </h3>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
            {servicesKeys.map((key, i) => {
              const Icon = serviceIcons[key];
              return (
                <div
                  key={key}
                  className="group flex flex-col rounded-2xl bg-white bg-opacity-70 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-blue-200 animate-fadeInUp"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <Icon className="h-10 w-10 text-blue-600 mb-3 transition group-hover:text-yellow-400" />
                  <h4 className="mt-1 text-lg font-semibold text-blue-900">
                    {t(`About.services.items.${key}.title`)}
                  </h4>
                  <p className="mt-2 text-sm text-gray-700">
                    {t(`About.services.items.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Values */}
        <section className="mt-24">
          <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">
            {t("About.values.title")}
          </h3>
          <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {valuesKeys.map((key, i) => {
              const Icon = valueIcons[key];
              return (
                <article
                  key={key}
                  className="rounded-2xl bg-white bg-opacity-70 p-6 text-center shadow-lg hover:shadow-yellow-200 animate-fadeInUp"
                  style={{ animationDelay: `${0.09 * (i + 1)}s` }}
                >
                  <Icon className="mx-auto h-7 w-7 text-yellow-400 mb-2" />
                  <h5 className="mt-1 font-semibold text-blue-900">
                    {t(`About.values.items.${key}.title`)}
                  </h5>
                  <p className="mt-2 text-sm text-gray-700">
                    {t(`About.values.items.${key}.description`)}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="relative mx-auto mt-28 max-w-3xl">
          <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">
            {t("About.process.title")}
          </h3>
          <ol className="relative mt-12 space-y-8">
            {stepsKeys.map((key, idx) => (
              <li
                key={key}
                className="relative flex items-start gap-6 animate-fadeInUp"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white ring-4 ring-white shadow-md">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t(`About.process.steps.${key}`)}
                  </p>
                </div>
                {/* Connecting line except for last item */}
                {idx < stepsKeys.length - 1 && (
                  <div className="absolute left-5 top-10 h-8 w-0.5 bg-yellow-300"></div>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Testimonials */}
        <section className="mx-auto mt-28 max-w-4xl">
          <h3 className="text-center text-3xl font-extrabold font-serif text-blue-900 drop-shadow-sm">
            {t("About.testimonials.title")}
          </h3>
          <div className="mt-10 space-y-8">
            {testimonialsKeys.map((key, i) => (
              <figure
                key={key}
                className="rounded-2xl bg-white bg-opacity-80 p-8 shadow-lg animate-fadeInUp"
                style={{ animationDelay: `${0.14 * (i + 1)}s` }}
              >
                <blockquote className="text-lg italic text-blue-900">
                  "{t(`About.testimonials.items.${key}.quote`)}"
                </blockquote>
                <figcaption className="mt-4 text-right font-semibold text-emerald-600">
                  — {t(`About.testimonials.items.${key}.author`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer className="mt-28 text-center animate-fadeInUp">
          <p className="text-3xl font-extrabold font-serif text-blue-900">
            {t("About.cta.title")}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-700">
            {t("About.cta.description")}
          </p>
          <a
            href="mailto:contact@rayyanalarab.com"
            className="mt-8 inline-flex items-center px-10 py-4 rounded-full bg-yellow-400 text-blue-900 font-bold text-lg shadow-lg hover:bg-emerald-600 hover:text-white transition"
          >
            {t("About.cta.button")}
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
};

export default AboutSection;

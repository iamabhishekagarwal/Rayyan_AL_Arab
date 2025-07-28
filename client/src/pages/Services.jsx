import React from "react";
import { useTranslation } from "react-i18next";

const serviceKeys = [
  "electrical",
  "plumbing",
  "structural",
  "hvac",
  "general",
  "safety",
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 min-h-screen overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-80 bg-gradient-to-tr from-blue-100 via-blue-200 to-transparent rounded-b-full opacity-30 animate-fadeInDown"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-80 bg-gradient-to-bl from-yellow-100 via-yellow-200 to-transparent rounded-t-full opacity-20 animate-fadeInUp"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow mb-4 animate-fadeIn">
            {t("Services.title")}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate-fadeIn delay-100">
            {t("Services.subtitle")}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceKeys.map((key, idx) => {
            const title = t(`Services.categories.${key}.title`);
            const summary = t(`Services.categories.${key}.summary`);
            const items = t(`Services.categories.${key}.items`, {
              returnObjects: true,
            });

            return (
              <article
                key={key}
                style={{ animationDelay: `${100 + idx * 100}ms` }}
                className="bg-white bg-opacity-60 border border-blue-100 rounded-3xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-opacity-80 hover:scale-105 animate-fadeInUp"
              >
                <h2 className="text-xl font-bold text-blue-800 mb-3 tracking-wide">
                  {title}
                </h2>
                <p className="mb-4 text-gray-800 text-base">{summary}</p>

                {/* Array of list items returned by i18next */}
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  {items.map((item, i) => (
                    <li
                      key={i}
                      className="transition duration-200 hover:text-blue-600 pl-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      {/* Animations (unchanged) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadeInUp   { animation: fadeInUp   .7s cubic-bezier(.25,.4,.45,1) both; }
        .animate-fadeInDown { animation: fadeInDown .7s cubic-bezier(.25,.4,.45,1) both; }
        .animate-fadeIn     { animation: fadeIn     1.5s cubic-bezier(.25,.4,.45,1) both; }
      `}</style>
    </section>
  );
};

export default Services;

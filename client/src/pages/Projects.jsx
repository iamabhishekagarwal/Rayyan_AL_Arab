import React from "react";
import { useTranslation } from "react-i18next";

const projectKeys = [
  "aramco",
  "royal_commission", 
  "housing",
  "municipal",
  "water_electricity",
  "transportation"
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-32 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 min-h-screen overflow-hidden">
      {/* Decorative Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-2/3 h-80 bg-gradient-to-tr from-blue-100 via-blue-200 to-transparent rounded-b-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-80 bg-gradient-to-bl from-yellow-100 via-yellow-200 to-transparent rounded-t-full opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow mb-4">
            {t("Projects.title")}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t("Projects.subtitle")}
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectKeys.map((key) => {
            const title = t(`Projects.items.${key}.title`);
            const description = t(`Projects.items.${key}.description`);

            return (
              <article
                key={key}
                className="bg-white bg-opacity-60 border border-blue-100 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:bg-white hover:bg-opacity-80 transition-transform duration-300"
              >
                <h2 className="text-xl font-bold text-blue-800 mb-3 tracking-wide">
                  {title}
                </h2>
                <p className="text-gray-800 text-base leading-relaxed">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

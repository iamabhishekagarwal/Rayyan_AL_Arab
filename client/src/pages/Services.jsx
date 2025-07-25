import React from "react";

const services = [
  {
    title: "Electrical Services",
    summary: "Complete electrical installations, wiring, panel upgrades, and maintenance for all project types. We ensure efficient energy distribution and safe installations for residential, commercial, and industrial projects.",
    items: [
      "Power distribution systems",
      "Lighting installations (indoor, outdoor, decorative & industrial)",
      "Emergency backup systems (generators, UPS)",
      "Electrical panel upgrades & load balancing",
      "Smart home & automation systems",
      "Electrical safety inspections and certifications",
    ],
  },
  {
    title: "Plumbing & Pipelines",
    summary: "Professional plumbing installations, pipeline systems, and water management solutions tailored to meet modern infrastructure needs.",
    items: [
      "Water supply systems (residential, commercial, industrial)",
      "Drainage & sewage systems with clog protection",
      "Gas pipeline installation & leak detection",
      "Water treatment & filtration systems",
      "Rainwater harvesting & greywater recycling",
      "Plumbing repairs, retrofits, and maintenance",
    ],
  },
  {
    title: "Structural Work",
    summary: "Foundation work, concrete structures, steel framing, and all structural construction needs are met with precision and durability.",
    items: [
      "Foundation & concrete work (slabs, footings, driveways)",
      "Steel frame construction (residential & commercial)",
      "Masonry & brickwork (walls, columns, decorative features)",
      "Reinforcement and formwork installation",
      "Retrofitting and seismic strengthening",
      "Structural inspections & certifications",
    ],
  },
  {
    title: "HVAC Systems",
    summary: "Heating, ventilation, and air conditioning systems for optimal climate control, designed with efficiency and sustainability in mind.",
    items: [
      "Central air systems (residential & commercial)",
      "Ventilation design for air quality & circulation",
      "Energy-efficient solutions & green HVAC upgrades",
      "Split, VRF, and ductless systems",
      "Preventive maintenance & system diagnostics",
      "Smart HVAC integrations & automation",
    ],
  },
  {
    title: "General Construction",
    summary: "Complete construction services including renovations, additions, and new builds, tailored to each client’s vision and needs.",
    items: [
      "Interior & exterior work (flooring, drywall, painting)",
      "Renovations & remodeling (kitchens, bathrooms, offices)",
      "Project management & site supervision",
      "Turnkey construction solutions",
      "Budgeting & procurement support",
      "Skilled labor & subcontractor coordination",
    ],
  },
  {
    title: "Safety & Compliance",
    summary: "Ensuring all work meets safety standards and building codes with proper certifications and transparent documentation.",
    items: [
      "Building code compliance consulting",
      "Safety inspections & audits (pre- and post-construction)",
      "Quality assurance and risk mitigation",
      "Worker safety training & PPE enforcement",
      "Fire safety systems & emergency protocols",
      "Environmental compliance & waste management",
    ],
  },
];

const Services = () => (
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
          Our Services
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed animate-fadeIn delay-100">
          Comprehensive engineering, construction, and infrastructure services delivered with quality, safety, and sustainability at the forefront.
        </p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ title, summary, items }, idx) => (
          <article
            key={title}
            style={{ animationDelay: `${100 + idx * 100}ms` }}
            className={`bg-white bg-opacity-60 border border-blue-100 rounded-3xl shadow-xl p-8 transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-opacity-80 hover:scale-105 animate-fadeInUp`}
          >
            <h2 className="text-xl font-bold text-blue-800 mb-3 tracking-wide">
              {title}
            </h2>
            <p className="mb-4 text-gray-800 text-base">{summary}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {items.map((item, i) => (
                <li key={i} className="transition duration-200 hover:text-blue-600 pl-1">{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
    <style>{`
    @keyframes fadeInUp {
      from {opacity: 0; transform: translateY(40px);}
      to {opacity: 1; transform: translateY(0);}
    }
    @keyframes fadeInDown {
      from {opacity: 0; transform: translateY(-40px);}
      to {opacity: 1; transform: translateY(0);}
    }
    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
    .animate-fadeInUp {animation: fadeInUp 0.7s cubic-bezier(.25,.4,.45,1) both;}
    .animate-fadeInDown {animation: fadeInDown 0.7s cubic-bezier(.25,.4,.45,1) both;}
    .animate-fadeIn {animation: fadeIn 1.5s cubic-bezier(.25,.4,.45,1) both;}
    `}</style>
  </section>
);

export default Services;

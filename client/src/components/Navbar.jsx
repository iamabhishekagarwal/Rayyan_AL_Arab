import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../components/i18n";

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState();
  const [currLang,setCurrLang]=useState("العربية");
  const tabs = [
    { key: "NavBarhome", route: "/" },
    { key: "NavBarabout", route: "/about" },
    { key: "NavBarprojects", route: "/projects" },
    { key: "NavBarservices", route: "/services" },
    { key: "NavBarcontact", route: "/contact" },
  ];

  const handleTabs = (tabKey) => {
    setActiveTab(tabKey);
    const tab = tabs.find((t) => t.key === tabKey);
    if (tab) navigate(tab.route);
  };

  const changeLanguage = (lng) => {
    setCurrLang(lng=="English"?"English":"");
    i18n.changeLanguage(lng=="English"?"ar":"en");
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
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
                {t("company_name")}
              </h1>
              <p className="text-sm text-amber-600 font-medium">
                {t("subtitle")}
              </p>
            </div>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {tabs.map(({ key }) => (
              <motion.button
                key={key}
                onClick={() => handleTabs(key)}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-600 hover:text-blue-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(key)}
              </motion.button>
            ))}
          </nav>
          <div className="flex space-x-3">
            <motion.button
              onClick={() => changeLanguage()}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                i18n.language === "en"
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {"to "+currLang}
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

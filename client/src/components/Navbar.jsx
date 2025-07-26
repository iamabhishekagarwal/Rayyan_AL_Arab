import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
const tabs = ["Home", "About Us", "Our Projects", "Services", "Contact"];
const [currentLanguage, setCurrentLanguage] = useState("English");
const [activeTab, setActiveTab] = useState();
const navigate = useNavigate()
    const handleTabs=((tab)=>{
        setActiveTab(tab)
        const index = tabs.indexOf(tab);
        if(index == 0) navigate("/")
        if(index == 1) navigate("/about")
        if(index == 2) navigate("/projects")
        if(index == 3) navigate("/services")
        if(index == 4) navigate("/contact")
    })

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
                  onClick={() => handleTabs(tab)}
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
      </header>  )
}

export default Navbar
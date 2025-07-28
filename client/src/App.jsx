import { Route, Routes, BrowserRouter } from "react-router-dom";
import Maintenance from "./pages/Maintenance";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import { I18nextProvider } from "react-i18next";
function App() {
  return (
    <BrowserRouter>
      <I18nextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/maintenance" element={<Maintenance></Maintenance>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<Aboutus></Aboutus>} />
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  );
}

export default App;

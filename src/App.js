import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Staff from "./pages/Staff";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-out-cubic",
    });

    window.addEventListener("resize", AOS.refresh);

    return () => {
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  useDocTitle("Fine Line Barbershop LLC");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

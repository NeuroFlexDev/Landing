import React, { useRef } from "react";
import "./App.css";
import { Header } from "./Header/Header.jsx";
import { AboutPage } from "./About/AboutPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import { ServicePage } from "./SevicePage/ServicePage.jsx";
import { ContactPage } from "./ContactPage/ContactPage.jsx"

function App() {
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  // Функции прокрутки до разных разделов
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToService = () => {
    serviceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="main-container">
      <Header
        scrollToAbout={scrollToAbout}
        scrollToService={scrollToService}
        scrollToContact={scrollToContact}
      />
      <MainPage scrollToAbout={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={serviceRef}>
        <ServicePage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </div>
  );
}

export default App;

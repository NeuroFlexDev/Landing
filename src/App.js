import React, { useRef } from "react";
import "./App.css";
import { Header } from "./Header/Header.jsx";
import { AboutPage } from "./About/AboutPage.jsx";
import { MainPage } from "./MainPage/MainPage.jsx";
import { ServicePage } from "./SevicePage/ServicePage.jsx";
import { ContactPage } from "./ContactPage/ContactPage.jsx"

function App() {
  const aboutRef = useRef(null);

  // Функция прокрутки до AboutPage
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      <Header />
      <MainPage scrollToAbout={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <ServicePage />
      <ContactPage />
    </div>
  );
}

export default App;

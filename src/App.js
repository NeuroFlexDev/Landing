import React, { useRef } from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { AboutPage } from "./About/AboutPage";
import { MainPage } from "./MainPage/MainPage";
import { ServicePage } from "./SevicePage/ServicePage";

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
    </div>
  );
}

export default App;

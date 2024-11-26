import React, { useState, useEffect } from "react";
import "./Header.css";

export const Header = ({ scrollToAbout, scrollToService, scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отображения меню

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useEffect для отслеживания прокрутки
  useEffect(() => {
    // Функция для добавления/удаления класса scrolled
    const handleScroll = () => {
      const header = document.querySelector('.Header-div');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', handleScroll);

    // Убираем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Header-div">
      <h1 id="Logotype">Neuroflex</h1>
      <button className="burger-menu" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
      <nav>
        <div className={`nav-buttons ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-div" onClick={scrollToAbout}>
            <p>О компании</p>
          </div>
          <div className="nav-div" onClick={scrollToService}>
            <p>Услуги</p>
          </div>
          {/* <div className="nav-div">
            <p>Портфолио</p>
          </div>
          <div className="nav-div">
            <p>Отзывы</p>
          </div> */}
          <div className="nav-div" onClick={scrollToContact}>
            <p>Контакты</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header-div">
      <h1 id="Logotype">Neuroflex</h1>
      <nav>
        <div className="nav-buttons">
          <div className="nav-div">
            <p>О компании</p>
          </div>
          <div className="nav-div">
            <p>Услуги</p>
          </div>
          <div className="nav-div">
            <p>Портфолио</p>
          </div>
          <div className="nav-div">
            <p>Отзывы</p>
          </div>
          <div className="nav-div">
            <p>Контакты</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

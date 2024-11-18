import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();

  return (
    <div className="Header-div">
      <nav>
        <Link to="/" className="Logotype"><h1 id="Logotype">Neuroflex</h1></Link>
        <div className="Company-info">
          <Link to="/about" className={location.pathname === "/about" ? "active" : "inactive"}>
            <p>О компании</p>
          </Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : "inactive"}>
            <p>Услуги</p>
          </Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : "inactive"}>
            <p>Портфолио</p>
          </Link>
          <Link to="/feedbacks" className={location.pathname === "/feedbacks" ? "active" : "inactive"}>
            <p>Отзывы</p>
          </Link>
          <Link to="contacts" className={location.pathname === "/contacts" ? "active" : "inactive"}>
            <p>Контакты</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

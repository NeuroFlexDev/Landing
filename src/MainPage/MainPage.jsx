import React from "react";
import "./MainPage.css";
import { ArrowDown } from "./ArrowDown";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="Innovation-text">
        <h1>Инновации в области машинного обучения для вашего бизнеса</h1>
        <p>
          Разрабатываем стартапы, решаем сложные задачи и проводим исследования
          в сфере ИИ и ML
        </p>
        <div className="Buttons-div">
          <button className="More-button">Узнать больше</button>
          <ArrowDown />
        </div>
      </div>
      <div className="Neuroflex-team">
        <div className="Neuroflex-team-left">
          <p>
            «NeuroFlex» — это команда профессионалов, специализирующихся на
            разработке и внедрении решений в сфере машинного обучения.
          </p>
        </div>
        <div className="Neuroflex-team-right">
          <p>
            <span>Наша миссия</span> — превращать сложные алгоритмы в
            практические инструменты, которые приносят реальную{" "}
            <span>пользу</span> и помогают решать задачи любой сложности. Мы
            находимся на переднем крае науки и технологий, чтобы каждый наш
            клиент мог использовать силу <span>машинного обучения</span> для
            своего успеха.
          </p>
        </div>
      </div>
    </div>
  );
};

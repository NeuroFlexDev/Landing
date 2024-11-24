import React from "react";
import "./ServicePage.css";
import { MicroscopeIcon } from "./Icons/MicroscopeIcon";

export const ServicePage = () => {
  return (
    <div className="ServicePage-div">
      <p id="services-p">Наши услуги</p>
      <div className="Service-blocks">
        <div className="Card-1">
          <MicroscopeIcon />
          <div>
            <p id="card-header">
              Исследования и разработки в области машинного обучения
            </p>
            <p id="card-description">
              Инновационные исследования для развития ML-технологий
            </p>
          </div>
        </div>

        <div className="Card-1">
          <MicroscopeIcon />
          <div>
            <p id="card-header">
              Исследования и разработки в области машинного обучения
            </p>
            <p id="card-description">
              Инновационные исследования для развития ML-технологий
            </p>
          </div>
        </div>

        <div className="Card-1">
          <MicroscopeIcon />
          <div>
            <p id="card-header">
              Исследования и разработки в области машинного обучения
            </p>
            <p id="card-description">
              Инновационные исследования для развития ML-технологий
            </p>
          </div>
        </div>

        <div className="Card-1">
          <MicroscopeIcon />
          <div>
            <p id="card-header">
              Исследования и разработки в области машинного обучения
            </p>
            <p id="card-description">
              Инновационные исследования для развития ML-технологий
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

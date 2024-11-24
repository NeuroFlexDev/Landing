import React from "react";
import "./ServicePage.css";
import { MicroscopeIcon } from "./Icons/MicroscopeIcon";
import { RobotIcon } from "./Icons/RobotIcon";
import { GraphicIcon } from "./Icons/GraphicIcon";
import { HumanIcon } from "./Icons/HumanIcon";

const services = [
  {
    icon: <MicroscopeIcon className="Card-Icon" />,
    title: "Исследования и разработки в области машинного обучения",
    description: "Инновационные исследования для развития ML-технологий",
  },
  {
    icon: <RobotIcon className="Card-Icon" />,
    title: "Разработка и внедрение ML-решений для бизнеса",
    description:
      "Разработка индивидуальных решений для бизнеса на базе машинного обучения",
  },
  {
    icon: <GraphicIcon className="Card-Icon" />,
    title: "Анализ данных и построение предсказательных моделей",
    description: "Анализируем данные для создания предсказательных моделей",
  },
  {
    icon: <HumanIcon className="Card-Icon" />,
    title: "Обучение и поддержка команд клиентов в ML",
    description: "Обучаем и поддерживаем команды клиентов в ML",
  },
];

export const ServicePage = () => {
  return (
    <div className="ServicePage-div">
      <p id="services-p">Наши услуги</p>
      <div className="Service-blocks">
        {services.map((service, index) => (
          <div key={index} className="Card">
            {service.icon}
            <p id="card-header">{service.title}</p>
            <p id="card-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

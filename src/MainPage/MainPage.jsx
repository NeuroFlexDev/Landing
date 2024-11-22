import React, { useState, useEffect, useRef } from "react";
import "./MainPage.css";
import { ArrowDown } from "./ArrowDown";

export const MainPage = () => {
  const [ballPositions, setBallPositions] = useState([]);
  const [lines, setLines] = useState([]);
  const ballRefs = useRef([]);

  // Генерация случайных позиций для шариков
  useEffect(() => {
    const generateBalls = () => {
      const positions = [];
      const rows = 3; // Количество строк
      const cols = 4; // Количество столбцов

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const cellWidth = screenWidth / cols;
      const cellHeight = screenHeight / rows;

      // Генерация позиций для каждого шарика
      for (let i = 0; i < 12; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        const size = Math.random() * 100 + 25; // Генерация случайного размера от 50px до 100px

        // Позиционирование шарика в пределах своей ячейки с небольшим случайным смещением
        const left = col * cellWidth + Math.random() * (cellWidth - size);
        const top = row * cellHeight + Math.random() * (cellHeight - size);

        positions.push({
          id: i,
          left: `${left}px`,
          top: `${top}px`,
          directionX: Math.random() > 0.5 ? 1 : -1,
          directionY: Math.random() > 0.5 ? 1 : -1,
          speedX: Math.random() * 2 + 2,
          speedY: Math.random() * 2 + 2,
          amplitudeX: Math.random() * 20 + 10,
          amplitudeY: Math.random() * 20 + 10,
          width: size,
          blur: Math.min(size / 2, Math.max(0, (100 - size) * 0.1)) + "px", // Блюр уменьшается с увеличением размера, максимум 30px
        });
      }
      setBallPositions(positions);
    };

    generateBalls(); // Генерация шариков при монтировании компонента

    return () => {
      ballRefs.current = [];
    };
  }, []);

  // Генерация случайной линии
  const generateLine = () => {
    const startBall = Math.floor(Math.random() * ballPositions.length);
    const endBall = Math.floor(Math.random() * ballPositions.length);

    if (startBall !== endBall) {
      const newLine = {
        startBall,
        endBall,
        opacity: 1,
        duration: Math.random() * 3 + 1, // длительность анимации от 4 до 7 секунд
        isVisible: true, // флаг для видимости
      };
      setLines((prevLines) => [...prevLines, newLine]);
    }
  };

  // Функция для обновления позиций шариков с анимацией покачивания
  const updatePositions = () => {
    const newPositions = ballPositions.map((ball) => {
      const offsetX = Math.sin((ball.offsetX += 0.05)) * ball.amplitudeX;
      const offsetY = Math.cos((ball.offsetY += 0.05)) * ball.amplitudeY;

      return {
        ...ball,
        left: `${parseFloat(ball.left) + offsetX}px`,
        top: `${parseFloat(ball.top) + offsetY}px`,
      };
    });

    setBallPositions(newPositions); // Обновляем позиции шариков
  };

  // Запуск обновления позиций и линий
  useEffect(() => {
    const interval = setInterval(() => {
      updatePositions(); // Запуск обновления анимации
    }, 1000 / 60); // 60 fps

    const lineGenerationInterval = setInterval(() => {
      generateLine(); // Генерация одной линии раз в 1 секунду
    }, 15); // интервал в 1 секунду

    // Очистка при размонтировании компонента
    return () => {
      clearInterval(interval);
      clearInterval(lineGenerationInterval);
    };
  }, [ballPositions]);

  // Функция для получения актуальных координат шариков с учётом прокрутки
  const getBallCenter = (ball) => {
    const ballElem = ballRefs.current[ball.id];
    if (ballElem) {
      const rect = ballElem.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      return {
        centerX: centerX + window.scrollX, // добавляем прокрутку
        centerY: centerY + window.scrollY, // добавляем прокрутку
      };
    }
    return { centerX: 0, centerY: 0 };
  };

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

      {/* Шарики на фоне */}
      <div className="Ball-container">
        {ballPositions.map((pos, index) => (
          <div
            key={pos.id}
            className="Ball"
            ref={(el) => (ballRefs.current[pos.id] = el)}
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.width, 
              filter: `blur(${pos.blur})`, // Применяем случайный блюр
              animation: `wobbleX ${pos.speedX}s infinite ease-in-out, wobbleY ${pos.speedY}s infinite ease-in-out`,
              animationDirectionX: pos.directionX === 1 ? "normal" : "reverse",
              animationDirectionY: pos.directionY === 1 ? "normal" : "reverse",
            }}
          />
        ))}

        {/* Линии (лучи) между шариками */}
        {lines.map((line, index) => {
          const startBall = ballPositions[line.startBall];
          const endBall = ballPositions[line.endBall];

          const { centerX: startX, centerY: startY } = getBallCenter(startBall);
          const { centerX: endX, centerY: endY } = getBallCenter(endBall);

          // Вычисление расстояния между центрами шариков
          const distance = Math.sqrt(
            Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
          );

          // Вычисление угла наклона линии
          const angle = Math.atan2(endY - startY, endX - startX);

          return (
            <div
              key={index}
              className="Line"
              style={{
                left: startX + "px",
                top: startY - 120 + "px", // смещение с учётом прокрутки
                transformOrigin: "top left",
                width: "0px", // Начальная ширина 0, чтобы линия могла "вырастать"
                height: "2px", // Высота линии
                position: "absolute",
                transform: `rotate(${angle}rad)`,
                animation: `line-animation ${line.duration}s ease-out`, // Анимация для роста линии
                opacity: line.opacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

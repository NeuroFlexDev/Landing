# NeuroFlex Landing Page



## 🚀 О проекте

NeuroFlex – это инновационный IT-проект, который объединяет людей с передовым мышлением в сфере технологий и развития нейросетей. Этот репозиторий содержит фронтенд лендинга, который презентует миссию и ценности NeuroFlex.

## 📂 Структура проекта

```bash
├── src/             # Исходный код
│   ├── components/  # UI-компоненты
│   ├── pages/       # Страницы
│   ├── assets/      # Статические файлы
│   ├── hooks/       # Кастомные хуки
│   ├── utils/       # Утилиты
├── public/          # Статические файлы
├── package.json     # Зависимости проекта
├── dockerfile       # Конфигурация Docker
├── .gitignore       # Игнорируемые файлы
└── README.md        # Документация проекта
```

## 🚀 Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/neuroflex/landing.git
   cd landing
   ```
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Запустите локальный сервер:**
   ```bash
   npm run dev
   ```
4. **Откройте в браузере:**
   ```
   http://localhost:5173
   ```

## 🐳 Запуск в Docker

1. **Соберите образ:**
   ```bash
   docker build -t neuroflex-landing .
   ```
2. **Запустите контейнер:**
   ```bash
   docker run -p 3000:3000 neuroflex-landing
   ```
3. **Открывайте в браузере:** `http://localhost:3000`

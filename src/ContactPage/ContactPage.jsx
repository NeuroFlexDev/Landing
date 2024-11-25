import React, { useState } from 'react';
import './ContactPage.css';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация полей
    if (!name || !email) {
      setMessage('Пожалуйста, заполните все поля.');
      return;
    }

    // Простая проверка на формат email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setMessage('Неверный формат email.');
      return;
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL || 'https://127.0.0.1:5000/send-email', { // Динамическое использование переменной окружения для URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        setMessage('Заявка отправлена успешно!');
        setName('');
        setEmail('');
      } else {
        setMessage('Произошла ошибка, попробуйте снова');
      }
    } catch (error) {
      setMessage('Произошла ошибка при отправке заявки');
    }
  };

  return (
    <div className="contact-page-container svg-background">
      <h1 className="contact-page-title">Свяжитесь с нами для консультации</h1>

      <form className="contact-page-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-page-input"
        />
        <input
          type="email"
          placeholder="Введите вашу почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-page-input"
        />
        <button type="submit" className="contact-page-button">Оставить заявку</button>
      </form>

      {message && <div className="message">{message}</div>}

      <div className="social-icons">
        <a href="https://t.me/neuroflex_tg" className="social-icon">
          <img src="./asserts/tg-icon.svg" alt="Telegram" />
        </a>
        <a href="#" className="social-icon">
          <img src="./asserts/vk-icon.svg" alt="VK" />
        </a>
        <a href="#" className="social-icon">
          <img src="./asserts/whatsapp.svg" alt="WhatsApp" />
        </a>
        <a href="mailto:nosignalx2k@neuroflex.bizml.ru" className="social-icon">
          <img src="./asserts/mail-icon.svg" alt="Email" />
        </a>
      </div>
    </div>
  );
};

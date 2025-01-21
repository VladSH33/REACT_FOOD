import React from 'react';
import ReactDOM from 'react-dom/client'; // Импорт для React 18
import './index.css'; // Стили
import App from './App'; // Основной компонент приложения

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
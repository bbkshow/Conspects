import React from 'react';
import './Service.css';

function Service() {
  return (
    <div className="service component__space" id="services">
      <div className="heading">
        <h1 className="heading">Услуги</h1>
        <p className="heading p__color">
          Разработка сайтов, мобильных приложений
        </p>
        <p className="heading p__color">и ВЭБ-сервисов для ваших задач</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div
              className="service__box pointer"
              onClick={() => {
                console.log('Click modal');
              }}
            >
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Сайты</h1>
                <p className="p service__text p__color">
                  Вы получите весь спектр услуг по разработке сайта для вашего
                  бизнеса.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Мобильные приложения</h1>
                <p className="p service__text p__color">
                  Мы разрабатываем, обеспечиваем техническую поддержку и
                  развиваем мобильные приложения.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">ВЭБ-сервисы</h1>
                <p className="p service__text p__color">
                  Ваш вэб-сервис будет интересным и полезным, у нас большой опыт
                  разработки в этом направлении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

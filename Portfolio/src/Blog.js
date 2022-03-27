import React from 'react';
import './Blog.css';
import Blog1 from './img/blog-01.jpg';
import Blog2 from './img/blog-02.jpg';
import Blog3 from './img/blog-03.jpg';

function Blog() {
  return (
    <div className="blog component__space" id="blog">
      <div className="heading">
        <h1 className="heading">Мои работы</h1>
        <p className="heading p__color">Эти проекты выпонены на React.js</p>
        <p className="heading p__color">
          с подключением библиотек Bootstrap и Material-UI
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Front-end разработка</h5>
                <h4 className="project__text">Сайт «Фотостудии Соколова»</h4>
                <a
                  href="https://www.instagram.com/sokolfoto1/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  Смотреть
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Front-end разработка</h5>
                <h4 className="project__text">Сайт портфолио</h4>
                <a
                  href="https://www.instagram.com/bbkshow1/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  Смотреть
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Front-end разработка</h5>
                <h4 className="project__text">Основные компоненты React.js</h4>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="blog project__btn btn"
                >
                  Смотреть
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

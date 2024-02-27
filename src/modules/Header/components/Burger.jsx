import React from "react";
import "./_burger.scss";

export default function Burger() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__toggle" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#busnes" className="navigation__link">
              Бизнес
            </a>
          </li>
          <li className="navigation__item">
            <a href="#about" className="navigation__link">
              О нас
            </a>
          </li>
          <li className="navigation__item">
            <a href="#prices" className="navigation__link">
              Цены
            </a>
          </li>
          <li className="navigation__item">
            <a href="#order" className="navigation__link">
              Оформить заказ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

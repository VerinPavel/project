import React from "react";
import "./_header.scss";
import Burger from "./components/Burger";

export default function Header() {
  return (
    <header>
      <div className="сontaner">
        <a className="сontaner__title" href="#">
          LoremIpsum.<span>Net</span>
        </a>
        <nav className="nav">
          <a href="#busnes">Бизнес</a>
          <a href="#about">О нас</a>
          <a href="#prices">Цены</a>
          <a href="#order">Оформить заказ</a>
        </nav>
        <Burger />
      </div>
    </header>
  );
}

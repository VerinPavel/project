import React from "react";
import "./_main.scss";

import BlueButton from "../../ui/BlueButton/BlueButton";
import WhiteButton from "../../ui/WhiteButton/WhiteButton";

export default function Main() {
  return (
    <section id="busnes" className="section">
      <div id="about" className="info">
        <h1>
          <span>Lorem ipsum</span> dolor sit <br /> amet consectetur
          <span> adipiscing</span>
        </h1>
        <div className="info__desc">
          <h4>At vero eos et accusamus et iusto odio dignissimos ducimus!</h4>
          <ul className="info__list">
            <li>Totam rem aperiam eaque ipsa</li>
            <li>Sit voluptatem accusantium doloremque laudantium</li>
            <li>Sed ut perspiciatis, unde omnis iste natus error</li>
          </ul>
        </div>
        <div className="info__btns">
          <BlueButton text="Заказать" />
          <WhiteButton text="Подробнее" />
        </div>
      </div>
    </section>
  );
}

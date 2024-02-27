import React from "react";
import "./_order.scss";

import FormIcons from "./components/FormIcons/FormIcons";
import Form from "./components/Form/Form";

export default function Order() {
  return (
    <section id="prices" className="order">
      <div className="order__container">
        <h2>
          Оформление <span> Заказа</span>
        </h2>
        <h6>Перед заполнением формы ознакомьтесь с нашей схемой работы!</h6>
        <FormIcons />
        <Form />
      </div>
    </section>
  );
}

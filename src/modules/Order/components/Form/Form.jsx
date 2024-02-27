import React, { useState } from "react";
import "./_form.scss";

import OrderButton from "../../../../ui/OrderButton/OrderButton";
import BlueButton from "../../../../ui/BlueButton/BlueButton";
import SelectOptions from "../SelectOptions/SelectOptions";

export default function Form() {
  const [inputValue, setInputValue] = useState(75);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Форма успешно отправлена");
  };

  return (
    <form id="order" className="form" onSubmit={(event) => handleSubmit(event)}>
      <SelectOptions />
      <input
        type="email"
        placeholder="Ваш e-mail"
        className="form__input"
        minLength={8}
        id="email"
        required
      />
      <input
        type="text"
        placeholder="Ваше имя"
        className="form__input"
        minLength={2}
        id="name"
        required
      />
      <div className="form__progres">
        <div className="progres__text">
          <p>Sed ut perspiciatis, unde omnis iste natus</p>
          <span>{inputValue} %</span>
        </div>
        <input
          type="range"
          onChange={(event) => handleInputChange(event.target.value)}
          value={inputValue}
        />
      </div>
      <OrderButton />
      <div className="form__btn">
        <BlueButton text="Отправить" />
      </div>
    </form>
  );
}

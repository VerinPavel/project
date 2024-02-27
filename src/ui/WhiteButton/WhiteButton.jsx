import React from "react";
import "./_whiteButto.scss";

export default function WhiteButton({ text }) {
  return (
    <button className="whiteBtn">
      <p>{text}</p>
    </button>
  );
}

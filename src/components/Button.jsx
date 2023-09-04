import React from "react";
import "./Button.css";

const Button = ({ color, children, handleClick }) => {
  return (
    <button className={color} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;

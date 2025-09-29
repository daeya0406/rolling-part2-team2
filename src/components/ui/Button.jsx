import React from "react";
import Icon from "../Icon";
import "./Button.scss";

function Button({
  label,
  size = "lg",
  variant = "primary",
  icon,
  disabled = false,
  className = "",
  onClick,
  ...props
}) {
  return (
    <button
      className={`btn btn--${size} btn--${variant} ${
        !label && icon && className !== "btn--icon-box"
          ? `btn--icon-${size}`
          : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && label && (
        // 아이콘 + 텍스트일 때
        <span className="btn__icon btn__icon--left">
          <Icon name={icon} />
        </span>
      )}

      {icon && !label && (
        // 아이콘만 있을 때
        <span className="btn__icon">
          <Icon name={icon} />
        </span>
      )}

      {label && <span className="btn__label">{label}</span>} 
    </button>
  );
}

export default Button;

import React from "react";
import Icon from "./Icon";
import "./button.scss";

/**
 * @param {Object} props - 컴포넌트에 전달되는 props
 * @param {string} props.label - 버튼 텍스트 (선택)
 * @param {'sm'|'md'|'lg'} [props.size='lg'] - 버튼 크기 (small, medium, large)
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary'] - 버튼 스타일 타입
 * @param {string} [props.icon] - 버튼에 표시할 아이콘 이름 (Icon 컴포넌트의 name prop과 동일)
 * @param {boolean} [props.disabled=false] - 버튼 비활성화 여부
 * @param {string} [props.className=""] - 추가로 적용할 클래스명 (선택)
 * @param {function} [props.onClick] - 클릭 이벤트 핸들러
 */

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
          ? `btn--icon btn--icon-${size}`
          : icon && label
          ? "btn--with-icon"
          : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <span className={`btn__icon ${label ? "btn__icon--left" : ""}`}>
          <Icon name={icon} />
        </span>
      )}

      {label && <span className="btn__label">{label}</span>}
    </button>
  );
}

export default Button;

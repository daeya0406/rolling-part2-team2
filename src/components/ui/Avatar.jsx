import { useState } from "react";
import "./Avatar.scss";

/**
 * 아바타 컴포넌트
 * @param {Object} props
 * @param {string} [props.src] - 이미지 URL (**필수**: isCount가 false일 때)
 * @param {string} [props.alt] - 이미지 대체 텍스트 (선택, 기본값: "")
 * @param {"small"|"medium"|"large"|"profile"} [props.size] - 아바타 크기 (선택, 기본값: "small")
 * @param {boolean} [props.isCount] - 카운트 표시 모드 여부 (선택, 기본값: false)
 * @param {number} [props.count] - 표시할 카운트 수 (선택, 기본값: 0)
 * @param {boolean} [props.isListMode] - 리스트 모드 여부 (선택, true시 흰색 border 적용)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택, 기본값: "")
 * @param {boolean} [props.selected] - 선택 상태 (선택, undefined시 내부 상태 사용)
 * @param {Function} [props.onClick] - 클릭 이벤트 핸들러 (선택, 있으면 선택 가능)
 */

function Avatar({
  src,
  alt = "",
  size = "small",
  isCount = false,
  count = 0,
  isListMode = false,
  className = "",
  selected,
  onClick,
}) {
  // 내부 선택 상태 관리
  const [internalSelected, setInternalSelected] = useState(false);

  // selected prop이 명시적으로 전달되었으면 그것을 사용하고, 없으면 내부 상태 사용
  const isSelected = selected !== undefined ? selected : internalSelected;

  const handleClick = () => {
    // selected prop이 전달되지 않았을 때만 내부 상태 토글
    if (selected === undefined && onClick) {
      setInternalSelected((prev) => !prev);
    }
    // 외부 onClick 콜백 호출
    if (onClick) {
      onClick();
    }
  };

  const avatarClasses = [
    "avatar",
    `avatar--${size}`,
    isCount ? "avatar--count" : "",
    isCount && isListMode ? "avatar--count--list" : "",
    onClick ? "avatar--selectable" : "",
    isSelected ? "avatar--selected" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isCount) {
    return (
      <div
        className={avatarClasses}
        onClick={onClick ? handleClick : undefined}
      >
        <span className="avatar__count-text">+{count}</span>
      </div>
    );
  }

  return (
    <div className={avatarClasses} onClick={onClick ? handleClick : undefined}>
      <img src={src} alt={alt} className="avatar__image" />
    </div>
  );
}

export default Avatar;

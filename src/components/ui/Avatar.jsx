import { useState } from "react";
import "./avatar.scss";

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
  // 이미지 로딩 상태 관리
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isSelected = selected !== undefined ? selected : internalSelected;

  const handleClick = () => {
    // selected prop이 전달되지 않았을 때만 내부 상태 토글
    if (selected === undefined && onClick) {
      setInternalSelected((prev) => !prev);
    }

    if (onClick) {
      onClick();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
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
        <span className="avatar--count-text">+{count}</span>
      </div>
    );
  }

  return (
    <div className={avatarClasses} onClick={onClick ? handleClick : undefined}>
      {/* 로딩 중일 때 스켈레톤 표시 */}
      {!imageLoaded && !imageError && src && (
        <div className="avatar--skeleton" />
      )}

      {/* 실제 이미지 */}
      {src && (
        <img
          src={src}
          alt={alt}
          className={`avatar--image ${
            imageLoaded ? "avatar--image--loaded" : ""
          }`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
      )}

      {/* 에러 시 또는 src가 없을 때 fallback */}
      {(imageError || !src) && <div className="avatar--fallback">👤</div>}
    </div>
  );
}

export default Avatar;

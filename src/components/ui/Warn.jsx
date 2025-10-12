import warnIcon from "@/assets/images/icons/warn.svg";
import warnBlackIcon from "@/assets/images/icons/warn-black.svg";
import "./warn.scss";

/**
 * 경고 메시지 컴포넌트
 * @param {Object} props
 * @param {string} [props.variant="small"] - 크기 변형 ("small" | "big" | "black")
 * @param {string} props.title - 경고 제목
 * @param {string} props.description - 경고 설명
 * @param {string} [props.className] - 추가 CSS 클래스
 */
function Warn({ variant = "small", title, description, className = "" }) {
  // 아이콘 선택: black variant일 때는 검은색 아이콘 사용
  const iconSrc = variant === "black" ? warnBlackIcon : warnIcon;

  return (
    <div className={`warn warn--${variant} ${className}`}>
      <img src={iconSrc} alt="경고" className="warn--icon" />
      <h2 className="warn--title">{title}</h2>
      <p className="warn--description">{description}</p>
    </div>
  );
}

export default Warn;

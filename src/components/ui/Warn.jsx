import warnIcon from "@/assets/images/icons/warn.svg";
import "./Warn.scss";

/**
 * 경고 메시지 컴포넌트
 * @param {Object} props
 * @param {string} [props.variant="small"] - 크기 변형 ("small" | "big")
 * @param {string} props.title - 경고 제목
 * @param {string} props.description - 경고 설명
 * @param {string} [props.className] - 추가 CSS 클래스
 */
function Warn({ variant = "small", title, description, className = "" }) {
  return (
    <div className={`warn warn--${variant} ${className}`}>
      <img src={warnIcon} alt="경고" className="warn--icon" />
      <h2 className="warn--title">{title}</h2>
      <p className="warn--description">{description}</p>
    </div>
  );
}

export default Warn;

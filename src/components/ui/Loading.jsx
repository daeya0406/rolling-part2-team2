import "./loading.scss";

// 로딩 스피너
export default function Loading({ size = "md", text }) {
  return (
    <div className={`loading size-${size}`}>
      <div className="spinner" aria-hidden="true" />
      // 텍스트 필요할 경우 추가
      {text && <span className="loading-text">{text}</span>}
    </div>
  );
}

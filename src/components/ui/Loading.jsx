import "./loading.scss";

export default function Loading({ size = "md", text }) {
  return (
    <div className={`loading size-${size}`}>
      <div className="spinner" aria-hidden="true" />
      {text && <span className="loading-text">{text}</span>}
    </div>
  );
}

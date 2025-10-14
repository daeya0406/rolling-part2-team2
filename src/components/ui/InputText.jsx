import "./input-text.scss";

// input 컴포넌트
export default function InputText({
  id,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  error,
}) {
  return (
    <div className="input-wrap">
      <input
        id={id}
        className={`input-text ${error ? "error" : ""}`}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {/* 값이 비었을 때 표시 */}
      {error && <p className="input-error-text">값을 입력해 주세요.</p>}
    </div>
  );
}

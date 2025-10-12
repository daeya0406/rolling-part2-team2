import "./inputText.scss";

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
      {error && <p className="input-error-text">값을 입력해 주세요.</p>}
    </div>
  );
}

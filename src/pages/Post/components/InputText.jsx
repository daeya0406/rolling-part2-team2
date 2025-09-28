import "./input-text.scss";

export default function InputText({ id, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      className="input-text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

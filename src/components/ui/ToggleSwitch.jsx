import { useState } from "react";
import "./toggle-switch.scss";

// 토글 스위치 버튼
export default function ToggleSwitch({
  checked = false,
  onChange,
  label = "",
}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <div className="toggle-switch-wrapper">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider"></span>
        {label && <span className="switch-label">{label}</span>}
      </label>
    </div>
  );
}

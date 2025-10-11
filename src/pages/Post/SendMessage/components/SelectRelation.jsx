import { useState, useRef, useEffect } from "react";
import "./select-relation.scss";
import arrowDown from "@/assets/images/icons/arrow-down.svg";

export default function SelectRelation({
  value,
  onChange,
  dropdownMode,
  options,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="select-relation" ref={containerRef}>
      <button
        type="button"
        className={`select-btn ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {value}
        <img src={arrowDown} className="arrow-down" alt="선택 버튼" />
      </button>
      {open && (
        <ul
          className={`dropdown ${
            dropdownMode === "blockDown" ? "block-down" : ""
          }`}
        >
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

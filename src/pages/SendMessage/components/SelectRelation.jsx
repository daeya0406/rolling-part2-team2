import { useState, useRef, useEffect } from "react";
import "./SelectRelation.scss";
import arrowDown from "@/assets/images/icons/arrow-down.svg";

// 선택 드롭다운
export default function SelectRelation({
  value,
  onChange,
  dropdownMode,
  options,
}) {
  const [open, setOpen] = useState(false); // 드롭다운 클릭 상태
  const containerRef = useRef(null); // 외부 클릭 감지

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

  // 옵션 선택
  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div className="select-relation" ref={containerRef}>
      <button
        type="button"
        className={`select-btn ${open ? "active" : ""}`} // 버튼 클릭 class 추가
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
              {" "}
              {/* 옵션 클릭 */}
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

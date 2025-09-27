import { useState } from "react";
import "./style.scss";

const COLORS = ["beige", "purple", "blue", "green"];

export default function Post() {
  const [name, setName] = useState("");
  const [tabBtn, setTabBtn] = useState("color"); // 'color' | 'image'
  const [bgColor, setBgColor] = useState("beige");

  return (
    <form className="write-wrap">
      <section>
        <h2 className="title">To.</h2>
        <input
          id="toName"
          placeholder="받는 사람 이름을 입력해 주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </section>

      <section>
        <div className="title-wrap">
          <h2>배경화면을 선택해 주세요.</h2>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <div className="tabs">
          <button
            type="button"
            className={tabBtn === "color" ? "tab active" : "tab"}
            onClick={() => setTabBtn("color")}
          >
            컬러
          </button>
          <button
            type="button"
            className={tabBtn === "image" ? "tab active" : "tab"}
            onClick={() => setTabBtn("image")}
          >
            이미지
          </button>
        </div>
        {tabBtn === "color" && (
          <ul className="color-grid">
            {COLORS.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className={`color-chip ${c}`}
                  onClick={() => setBgColor(c)}
                  aria-pressed={bgColor === c}
                >
                  {bgColor === c && <span className="check">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        )}
        {tabBtn === "image" && (
          <ul className="image-grid">(배경화면 선택 API 연결 필요)</ul>
        )}
      </section>

      <button>생성하기</button>
    </form>
  );
}

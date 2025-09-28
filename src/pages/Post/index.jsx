import { useEffect, useState } from "react";
import { getBackgroundImages } from "@/apis/backgroundImages";
import "./style.scss";
import checkIcon from "@/assets/images/icons/check.svg";
import InputText from "./components/InputText";
import Loading from "@/components/ui/Loading";

const COLORS = ["beige", "purple", "blue", "green"];

export default function Post() {
  // 상태
  const [name, setName] = useState("");
  const [tabBtn, setTabBtn] = useState("color"); // 'color' | 'image'
  const [images, setImages] = useState([]);
  const [selectedBg, setSelectedBg] = useState({
    type: "color",
    value: "beige",
  });

  useEffect(() => {
    async function fetchImages() {
      try {
        const data = await getBackgroundImages();
        setImages(data.imageUrls);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImages();
  }, []);

  function handleSelect(type, value) {
    setSelectedBg({ type, value });
  }

  const MAX_NAME_LEN = 20;
  const trimmedName = name.trim();
  const isNameValid =
    trimmedName.length > 0 && trimmedName.length <= MAX_NAME_LEN;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isNameValid) return;

    const payload = {
      to: trimmedName,
      background: selectedBg,
    };
    console.log("submit payload:", payload);
    // TODO: API 전송
  }

  return (
    <form className="write-wrap">
      <section>
        <h2 className="title">To.</h2>
        <InputText
          id="toName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="받는 사람 이름을 입력해 주세요"
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
        {/* 컬러 탭 */}
        {tabBtn === "color" && (
          <ul className="color-grid">
            {COLORS.map((c) => {
              const active =
                selectedBg.type === "color" && selectedBg.value === c;
              return (
                <li key={c}>
                  <button
                    type="button"
                    className={`color-chip ${c} ${active ? "active" : ""}`}
                    onClick={() => handleSelect("color", c)}
                    aria-pressed={active}
                  >
                    {active && (
                      <span className="check">
                        <img src={checkIcon} alt="체크" />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* 이미지 탭 */}
        {tabBtn === "image" && (
          <ul className="image-grid">
            {images.map((url, idx) => {
              const active =
                selectedBg.type === "image" && selectedBg.value === url;
              return (
                <li className="image-chip" key={url || idx}>
                  <button
                    type="button"
                    className={`image-btn ${active ? "active" : ""}`}
                    onClick={() => handleSelect("image", url)}
                    aria-pressed={active}
                  >
                    <img src={url} alt={`배경 ${idx}`} />
                    {active && (
                      <span className="check">
                        <img src={checkIcon} alt="체크" />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
      <Loading text="이미지를 불러오는 중..." />
      <button type="submit" disabled={!isNameValid}>
        생성하기
      </button>
    </form>
  );
}

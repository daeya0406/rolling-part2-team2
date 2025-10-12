import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBackgroundImages } from "@/apis/getBackgroundImages";
import { postRecipient } from "@/apis/postRecipient";
import "./style.scss";
import checkIcon from "@/assets/images/icons/check.svg";
import InputText from "../../components/ui/InputText";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

const COLORS = ["beige", "purple", "blue", "green"];

export default function Post() {
  const navigate = useNavigate();

  // 상태
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [tabBtn, setTabBtn] = useState("color"); // 'color' | 'image'
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // 초기 로딩 true
  const [loadedImages, setLoadedImages] = useState([]); // 로드된 이미지 관리

  const [selectedBg, setSelectedBg] = useState({
    type: "color",
    value: COLORS[0],
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getBackgroundImages();
        setImages(data.imageUrls || []);
        if (data.imageUrls && data.imageUrls.length > 0 && tabBtn === "image") {
          setSelectedBg({ type: "image", value: data.imageUrls[0] });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (tabBtn === "image") fetchImages();
  }, [tabBtn]);

  const handleNameFocus = () => {
    if (nameTouched) {
      setNameTouched(false);
    }
  };

  const handleTabClick = (tab) => {
    setTabBtn(tab);
    if (tab === "color") {
      setSelectedBg({ type: "color", value: COLORS[0] });
    } else if (tab === "image" && images.length > 0) {
      setSelectedBg({ type: "image", value: images[0] });
    }
  };

  const handleSelect = (type, value) => {
    setSelectedBg({ type, value });
  };

  const MAX_NAME_LEN = 20;
  const trimmedName = name.trim();
  const isNameValid =
    trimmedName.length > 0 && trimmedName.length <= MAX_NAME_LEN;
  const showNameError = nameTouched && !isNameValid;
  const handleNameBlur = () => setNameTouched(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameTouched(true);
    if (!isNameValid) return;

    const payload = {
      team: "19-2",
      name: trimmedName,
      backgroundColor:
        selectedBg.type === "color" ? selectedBg.value : COLORS[0],
      backgroundImageURL:
        selectedBg.type === "image" && selectedBg.value
          ? selectedBg.value
          : null,
    };

    try {
      const result = await postRecipient("19-2", payload);
      navigate(`/post/${result.id}`);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <form className="write-wrap" onSubmit={handleSubmit}>
      <section>
        <h2 className="title">To.</h2>
        <InputText
          id="toName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          placeholder="받는 사람 이름을 입력해 주세요"
          error={showNameError}
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
            onClick={() => handleTabClick("color")}
          >
            컬러
          </button>
          <button
            type="button"
            className={tabBtn === "image" ? "tab active" : "tab"}
            onClick={() => handleTabClick("image")}
          >
            이미지
          </button>
        </div>
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
        {tabBtn === "image" && (
          <>
            {images.length > 0 ? (
              <ul className="image-grid">
                {images.map((url, idx) => {
                  const active =
                    selectedBg.type === "image" && selectedBg.value === url;
                  const isLoaded = loadedImages.includes(url);

                  return (
                    <li className="image-chip" key={url || idx}>
                      <button
                        type="button"
                        className={`image-btn ${active ? "active" : ""}`}
                        onClick={() => handleSelect("image", url)}
                        aria-pressed={active}
                      >
                        <img
                          src={url}
                          alt={`배경 ${idx}`}
                          onLoad={() =>
                            setLoadedImages((prev) => [...prev, url])
                          }
                          className={isLoaded ? "fade-in-img" : "fade-out-img"}
                        />
                        {!isLoaded && (
                          <div className="image-loading-overlay">
                            <Loading size="lg" />
                          </div>
                        )}
                        {/* isLoaded 추가해서, 로딩 끝났을 때 체크 */}
                        {active && isLoaded && (
                          <span className="check">
                            <img src={checkIcon} alt="체크" />
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : loading ? (
              <ul className="image-grid">
                {[...Array(4)].map((_, idx) => (
                  <li className="image-chip image-loading" key={idx}>
                    <Loading size="lg" />
                  </li>
                ))}
              </ul>
            ) : (
              <p>이미지가 없습니다.</p>
            )}
          </>
        )}
      </section>
      <Button
        label="생성하기"
        className="button-submit"
        size="lg"
        variant="primary"
        disabled={!isNameValid}
      />
    </form>
  );
}

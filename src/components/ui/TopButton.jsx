import { useEffect, useState } from "react";
import topIcon from "@/assets/images/icons/top.svg";
import "./top-button.scss";

// 탑 버튼 컴포넌트
export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // 스크롤 감지
    function handleScroll() {
      setVisible(window.scrollY > 1);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 부드럽게 맨 위로 이동
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`top-button ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img src={topIcon} alt="맨 위로" />
    </button>
  );
}

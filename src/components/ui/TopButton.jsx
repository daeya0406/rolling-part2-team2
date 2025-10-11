import { useEffect, useState } from "react";
import topIcon from "@/assets/images/icons/top.svg";
import "./TopButton.scss";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 1);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

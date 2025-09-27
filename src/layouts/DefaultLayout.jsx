import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./default-layout.scss";
import topIcon from "@/assets/images/icons/top.svg";

export default function DefaultLayout() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      <Header />

      <main>
        <Outlet />

        <button
          className={`top-button ${showTop ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <img src={topIcon} alt="맨 위로" />
        </button>
      </main>
    </div>
  );
}

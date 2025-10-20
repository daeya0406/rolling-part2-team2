import { Outlet, useLocation, matchPath } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopButton from "../components/ui/TopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./default-layout.scss";

// 기본 레이아웃 컴포넌트
export default function DefaultLayout() {
  const location = useLocation(); // 현재 라우트 정보

  // 헤더 숨김 경로 설정
  const hideHeaderPaths = ["/post/:id", "/post/:id/edit"];
  const mobileHideHeader = hideHeaderPaths.some(
    (pattern) => matchPath(pattern, location.pathname) // 현재 경로가 숨김 경로에 해당하는지 확인
  );

  return (
    <div className="default-layout">
      {/* 조건에 따라 헤더 숨김 */}
      <Header className={mobileHideHeader ? "mobile-hide-header" : ""} />

      <main className="default-layout__main">
        <Outlet /> {/* 라우트 컴포넌트 렌더링 */}
        <TopButton />
      </main>

      <Footer />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

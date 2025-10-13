import { Outlet, useLocation, matchPath } from "react-router-dom";
import Header from "../components/Header";
import TopButton from "../components/ui/TopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./default-layout.scss";

export default function DefaultLayout() {
  const location = useLocation();

  const hideHeaderPaths = ["/post/:id", "/post/:id/edit"];
  const mobileHideHeader = hideHeaderPaths.some((pattern) =>
    matchPath(pattern, location.pathname)
  );

  return (
    <div>
      <Header className={mobileHideHeader ? "mobile-hide-header" : ""} />

      <main>
        <Outlet />
        <TopButton />
      </main>

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

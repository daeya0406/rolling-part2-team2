import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopButton from "../components/ui/TopButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DefaultLayout() {
  return (
    <div>
      <Header />

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

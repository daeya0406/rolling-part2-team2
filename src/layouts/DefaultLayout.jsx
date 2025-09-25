import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./default-layout.scss";

export default function DefaultLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

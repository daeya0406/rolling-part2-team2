import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TopButton from "../components/ui/TopButton";
import "./default-layout.scss";

export default function DefaultLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
        <TopButton />
      </main>
    </div>
  );
}

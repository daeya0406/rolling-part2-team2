import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import MainPage from "../pages/Main";

// 테스트용 페이지
import Components1 from "../pages/TestComponents1";
import Components2 from "../pages/TestComponents2";
import TypoPage from "../pages/TestTypo";
import ColorPage from "../pages/TestColor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <MainPage /> }, // /

      // test 페이지
      { path: "components1", element: <Components1 /> }, // /test1
      { path: "components2", element: <Components2 /> }, // /test2
      { path: "typo", element: <TypoPage /> }, // /typo
      { path: "color", element: <ColorPage /> }, // /color
    ],
  },
]);

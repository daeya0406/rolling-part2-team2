import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

// 테스트용 페이지
import Components1 from "../pages/Test/TestComponents1";
//import Components2 from "../pages/Test/TestComponents2";
import TypoPage from "../pages/Test/TestTypo";
import ColorPage from "../pages/Test/TestColor";

// 작업 페이지
import Post from "../pages/Post";
import RollingPaper from "../pages/RollingPaper";
import PostMessage from "../pages/Post/PostMessage";
import List from "../pages/List";
import MainPage from "../pages/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <MainPage /> }, // /

      // test 페이지
      { path: "components1", element: <Components1 /> }, // /test1
      { path: "typo", element: <TypoPage /> }, // /typo
      { path: "color", element: <ColorPage /> }, // /color

      // 페이지 작업
      { path: "post", element: <Post /> }, // /Post
      { path: "post/:id", element: <RollingPaper /> }, // /post/id
      { path: "post/:id/edit", element: <RollingPaper /> }, // /post/id/edit
      { path: "post/:id/message", element: <PostMessage /> }, // /post/id/message
      { path: "list", element: <List /> }, // /list
    ],
  },
]);

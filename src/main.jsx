import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import "./assets/scss/global.scss";
import "pretendard/dist/web/static/pretendard.css";
import { inject } from "@vercel/analytics";

inject();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

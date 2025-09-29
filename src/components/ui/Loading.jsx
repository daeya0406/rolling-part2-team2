import React from "react";
import "./Loading.scss";

export default function Loading({ size = "md" }) {
  return (
    <div className={`loading size-${size}`}>
      <div className="spinner" aria-hidden="true" />
      <span className="loading-text"></span>
    </div>
  );
}

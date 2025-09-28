import React from "react";
import "./Loading.scss";

export default function Loading({ text = "로딩 중..." }) {
  return (
    <div className="loading">
      <div className="spinner" aria-hidden="true" />
      <span className="loading-text">{text}</span>
    </div>
  );
}

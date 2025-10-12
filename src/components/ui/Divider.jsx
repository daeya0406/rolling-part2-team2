import React from "react";
import "./divider.scss";

/**
 * Divider 컴포넌트
 * @param {Object} props
 * @param {number} [props.width=1] - 구분선 너비 (px)
 * @param {number} [props.height=28] - 구분선 높이 (px)
 * @param {number} [props.marginX=0] - 좌우 마진 (px)
 * @param {string} [props.className] - 추가 CSS 클래스
 */
function Divider({ width = 1, height = 28, marginX = 0, className = "" }) {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    marginLeft: `${marginX}px`,
    marginRight: `${marginX}px`,
  };

  return <div className={`divider ${className}`} style={style} />;
}

export default Divider;

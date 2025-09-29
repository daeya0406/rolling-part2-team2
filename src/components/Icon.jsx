import React from "react";

// button 폴더 아이콘
import DeleteIcon from "./assets/icons/button/delete.svg";
import EmojiIcon from "./assets/icons/button/emoji.svg";
import ShareIcon from "./assets/icons/button/share.svg";

// common 폴더 아이콘
import ArrowLeftIcon from "./assets/icons/common/arrow-left.svg";
import ArrowRightIcon from "./assets/icons/common/arrow-right.svg";
import LogoIcon from "./assets/icons/common/logo.svg";

// toast 폴더 아이콘
import CloseIcon from "./assets/icons/toast/close.svg";
import SuccessIcon from "./assets/icons/toast/success.svg";

// 아이콘을 하나의 객체로 생성
const icons = {
  delete: DeleteIcon,
  emoji: EmojiIcon,
  share: ShareIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  logo: LogoIcon,
  close: CloseIcon,
  success: SuccessIcon,
};

function Icon({ name, size, className = "icon" }) {
  const src = icons[name];
  if (!src) return null;

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
    />
  );
}

export default Icon;

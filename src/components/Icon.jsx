import React from "react";

// button 폴더 아이콘 import
import AddIcon from "../assets/icons/button/add.svg?react";
import CheckIcon from "../assets/icons/button/check.svg?react";
import DeleteIcon from "../assets/icons/button/delete.svg?react";
import EmojiIcon from "../assets/icons/button/emoji.svg?react";
import ShareIcon from "../assets/icons/button/share.svg?react";

// common 폴더 아이콘 import
import ArrowDownIcon from "../assets/icons/common/arrow-down.svg?react";
import ArrowLeftIcon from "../assets/icons/common/arrow-left.svg?react";
import ArrowRightIcon from "../assets/icons/common/arrow-right.svg?react";
import ArrowTopIcon from "../assets/icons/common/arrow-top.svg?react";
import LogoIcon from "../assets/icons/common/logo.svg?react";

// option 폴더 아이콘 import
import ProfileIcon from "../assets/icons/option/profile.svg?react";

// toast 폴더 아이콘 import
import CloseIcon from "../assets/icons/toast/close.svg?react";
import SuccessIcon from "../assets/icons/toast/success.svg?react";

// 아이콘 모음 객체
const icons = {
  add: AddIcon,
  check: CheckIcon,
  delete: DeleteIcon,
  emoji: EmojiIcon,
  share: ShareIcon,
  arrowDown: ArrowDownIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowTop: ArrowTopIcon,
  logo: LogoIcon,
  profile: ProfileIcon,
  close: CloseIcon,
  success: SuccessIcon,
};

// Icon 컴포넌트
function Icon({ name, size = 24, className = "icon" }) {
  const IconComp = icons[name];
  if (!IconComp) return null;

  return <IconComp width={size} height={size} className={className} />;
}

export default Icon;

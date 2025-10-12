// button 관련 아이콘 (icons 폴더)
import DeleteIcon from "@/assets/images/icons/delete.svg";
import EmojiIcon from "@/assets/images/icons/emoji.svg";
import ShareIcon from "@/assets/images/icons/share.svg";
import AddIcon from "@/assets/images/icons/add.svg";
import IconCheck from "@/assets/images/icons/check.svg";

// 방향/네비게이션 아이콘
import ArrowLeftIcon from "@/assets/images/icons/arrow-left.svg";
import ArrowRightIcon from "@/assets/images/icons/arrow-right.svg";
import ArrowUpIcon from "@/assets/images/icons/arrow-top.svg";
import ArrowDownIcon from "@/assets/images/icons/arrow-down.svg";
import TopIcon from "@/assets/images/icons/top.svg";

// 공통 아이콘
import LogoIcon from "@/assets/images/common/logo.svg";
import ProfileIcon from "@/assets/images/common/profile.svg";

// 토스트 아이콘
import CloseIcon from "@/assets/images/toast/close.svg";
import SuccessIcon from "@/assets/images/toast/success.svg";

// 아이콘 매핑
const icons = {
  delete: DeleteIcon,
  emoji: EmojiIcon,
  share: ShareIcon,
  add: AddIcon,
  iconCheck: IconCheck,

  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowDownIcon,
  top: TopIcon,

  logo: LogoIcon,
  profile: ProfileIcon,

  close: CloseIcon,
  success: SuccessIcon,
};

function Icon({ name, size = 24, className = "icon" }) {
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

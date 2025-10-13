import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.scss";
import successIcon from "@/assets/images/toast/success.svg";
import closeIcon from "@/assets/images/toast/close.svg";
import errorIcon from "@/assets/images/toast/error.svg";
import warningIcon from "@/assets/images/toast/warning.svg";
import infoIcon from "@/assets/images/toast/info.svg";

/**
 * @param {string} message - 표시할 토스트 메시지 내용
 * @param {Object} [options={}] - 선택적 옵션 객체
 * @param {'success'|'error'|'warning'|'info'} [options.type='success'] - 토스트 type
 * @param {number} [options.autoClose=5000] - 자동 닫힘 시간 (ms)
 * @param {boolean} [options.hideProgressBar=false] - 진행바 숨김 여부
 * @param {boolean} [options.closeOnClick=true] - 클릭 시 닫기 여부
 * @param {boolean} [options.pauseOnHover=true] - 마우스 오버 시 일시정지 여부
 * @param {boolean} [options.draggable=true] - 드래그로 닫기 허용 여부
 * @param {string} [options.theme='dark'] - 테마 (light/dark)
 */

// eslint-disable-next-line
export const showToast = (message, { type = "success", ...options } = {}) => {
  const colorGroup = {
    success: { color: "var(--c-success)", icon: successIcon },
    error: { color: "var(--c-error)", icon: errorIcon },
    warning: { color: "var(--c-warning)", icon: warningIcon },
    info: { color: "var(--c-info)", icon: infoIcon },
  };

  const { toastColor, icon: iconSrc } = colorGroup[type] || colorGroup.success;

  // basicOptions: react-toastify 기본 설정
  const basicOptions = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
    progressStyle: {
      background: toastColor,
    },

    // 커스텀 아이콘 & 닫기 버튼
    icon: <img src={iconSrc} alt={type} className="toast__icon" />,
    closeButton: ({ closeToast }) => (
      <img
        src={closeIcon}
        alt="닫기"
        className="toast__close"
        onClick={closeToast}
        style={{ cursor: "pointer" }}
      />
    ),
  };

  switch (type) {
    case "success":
      toast.success(message, { ...basicOptions, ...options });
      break;
    case "error":
      toast.error(message, { ...basicOptions, ...options });
      break;
    case "warning":
      toast.warn(message, { ...basicOptions, ...options });
      break;
    case "info":
      toast.info(message, { ...basicOptions, ...options });
      break;
    default:
      toast(message, { ...basicOptions, ...options });
  }
};

// 앱 전체에서 토스트 메시지가 표시될 영역이고 1회 랜더링 됨
const Toast = () => (
  <ToastContainer
    position="bottom-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
  />
);

export default Toast;

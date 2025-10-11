import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.scss";
import successIcon from "../../assets/images/toast/success.svg";
import closeIcon from "../../assets/images/toast/close.svg";
import errorIcon from "../../assets/images/toast/error.svg";
import warningIcon from "../../assets/images/toast/warning.svg";
import infoIcon from "../../assets/images/toast/info.svg";

// showToast 함수를 호출할 때 메시지와 type 매개변수를 전달함
// eslint-disable-next-line
export const showToast = (message, { type = "success", ...options } = {}) => {
  // 타입별 컬러값과 아이콘 지정
  const colorGroup = {
    success: { color: "var(--c-success)", icon: successIcon },
    error: { color: "var(--c-error)", icon: errorIcon },
    warning: { color: "var(--c-warning)", icon: warningIcon },
    info: { color: "var(--c-info)", icon: infoIcon },
  };

  // 전달된 type이 colorGroup에 없으면 기본값(success)으로 나옴 (데이터 사용해서 방어코드 사용함)
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
    closeButton: <img src={closeIcon} alt="닫기" className="toast__close" />,
  };

  // 타입별 토스트 실행 (switch문 사용) 해서 타입별로 실행함
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

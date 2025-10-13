import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import "./confirm-modal.scss";

/**
 * 삭제 확인 모달 컴포넌트
 * @param {Object} props
 * @param {boolean} props.isOpen - 모달 열림 상태
 * @param {Function} props.onClose - 모달 닫기 핸들러
 * @param {Function} props.onConfirm - 확인 버튼 클릭 핸들러
 * @param {string} [props.title] - 모달 제목
 * @param {string} [props.message] - 확인 메시지
 * @param {string} [props.confirmText="삭제"] - 확인 버튼 텍스트
 * @param {string} [props.cancelText="취소"] - 취소 버튼 텍스트
 * @param {string} [props.confirmVariant="primary"] - 확인 버튼 변형
 * @param {string} [props.cancelVariant="secondary"] - 취소 버튼 변형
 */

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title = "정말 삭제하시겠습니까?",
  message = "삭제된 내용은 복구할 수 없습니다.",
  confirmText = "삭제",
  cancelText = "취소",
  confirmVariant = "primary",
  cancelVariant = "secondary",
}) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // 모달이 열릴 때 body 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      // 모달이 닫힐 때 body 스크롤 복원
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // 배경 클릭 시 모달 닫기
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // 확인 버튼 클릭 핸들러
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="confirm-modal-backdrop" onClick={handleBackdropClick}>
      <div className="confirm-modal-content">
        <div className="confirm-modal-header">
          <h2 className="confirm-modal-title">{title}</h2>
        </div>

        <div className="confirm-modal-body">
          <p className="confirm-modal-message">{message}</p>
        </div>

        <div className="confirm-modal-footer">
          <Button
            variant={cancelVariant}
            size="sm"
            label={cancelText}
            onClick={onClose}
            className="confirm-modal-cancel-btn"
          />
          <Button
            variant={confirmVariant}
            size="sm"
            label={confirmText}
            onClick={handleConfirm}
            className="confirm-modal-confirm-btn"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmModal;

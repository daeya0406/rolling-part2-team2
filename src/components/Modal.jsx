import { useEffect } from "react";
import { createPortal } from "react-dom";
import Avatar from "./ui/Avatar";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { formatDate } from "../utils/utils";
import "./Modal.scss";

/**
 * 메시지 상세 모달 컴포넌트
 * @param {Object} props
 * @param {boolean} props.isOpen - 모달 열림 상태
 * @param {Function} props.onClose - 모달 닫기 핸들러
 * @param {Object} props.message - 메시지 데이터
 * @param {string} props.message.sender - 보낸 사람 이름
 * @param {string} props.message.profileImageURL - 프로필 이미지 URL
 * @param {string} props.message.relationship - 관계 (동료, 가족, 지인 등)
 * @param {string} props.message.content - 메시지 내용
 * @param {string} props.message.createdAt - 작성 날짜
 * @param {string} props.message.font - 폰트 이름
 */
function Modal({ isOpen, onClose, message }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // 배경 클릭 시 모달 닫기
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !message) return null;

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {/* 날짜 - 오른쪽 상단 */}
        <div className="modal-date">{formatDate(message.createdAt)}</div>

        {/* 헤더 영역 */}
        <div className="modal-header">
          <div className="modal-sender-info">
            <Avatar
              src={message.profileImageURL}
              alt={message.sender}
              size="large"
            />
            <div className="modal-sender-details">
              <h3 className="modal-sender-name">
                From.{" "}
                <span className="modal-sender-name--highlight">
                  {message.sender}
                </span>
              </h3>
              <Badge relationship={message.relationship} />
            </div>
          </div>
        </div>

        {/* 메시지 내용 */}
        <div className="modal-body">
          <p
            className="modal-message-content"
            style={{
              fontFamily: message.font || "Pretendard",
            }}
          >
            {message.content}
          </p>
        </div>

        {/* 푸터 영역 - 버튼만 센터 배치 */}
        <div className="modal-footer">
          <Button
            onClick={onClose}
            label="확인"
            size="md"
            className="modal-footer-button"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;

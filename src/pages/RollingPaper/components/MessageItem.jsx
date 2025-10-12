import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/Modal";
import { formatDate } from "@/utils/utils";
import "./MessageItem.scss";
import AddIcon from "@/assets/images/icons/add.svg";
import Button from "@/components/ui/Button";

/**
 * 메시지 카드 컴포넌트 - 일반 메시지 표시 또는 새 메시지 추가 카드
 * @param {Object} props
 * @param {Object} [props.message] - 메시지 데이터 (일반 메시지 모드일 때 필수)
 * @param {string} props.message.sender - 발신자 이름
 * @param {string} props.message.profileImageURL - 프로필 이미지 URL
 * @param {string} props.message.relationship - 관계 (가족/지인/동료/친구)
 * @param {string} props.message.content - 메시지 내용
 * @param {string} props.message.createdAt - 생성 날짜 (ISO 형식)
 * @param {boolean} [props.isAddMessage=false] - 새 메시지 추가 카드 모드 여부
 * @param {Function} [props.onAddClick] - 커스텀 클릭 핸들러 (우선순위: onAddClick > toId 네비게이션)
 * @param {string|number} [props.toId] - 롤링페이퍼 ID (네비게이션: /post/{toId}/message)
 * @param {string} [props.className=""] - 추가 CSS 클래스명
 * @param {boolean} [props.isPostEditPage=false] - 페이지가 롤링페이퍼 수정 페이지인지 여부
 */

function MessageItem({
  message,
  isAddMessage = false,
  onAddClick,
  toId,
  className = "",
  isPostEditPage = false,
  onDeleteMessage,
}) {
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // React Router 네비게이션

  // 추가 메세지 클릭 핸들러
  const handleAddMessageClick = () => {
    if (onAddClick) {
      onAddClick();
    } else if (toId) {
      // toId에서 불필요한 슬래시 제거
      const cleanId = String(toId).replace(/\/+$/, "");
      // /post/{id}/message로 이동
      navigate(`/post/${cleanId}/message`);
    }
  };

  // 일반 메시지 클릭 핸들러 (모달 열기)
  const handleMessageClick = () => {
    if (!isAddMessage && message) {
      setIsModalOpen(true);
    }
  };

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // 편집 페이지에서는 추가 메시지 카드를 숨김
  if (isAddMessage && isPostEditPage) {
    return null;
  }

  return (
    <>
      <div
        className={`message-item ${
          isAddMessage ? "message-item--add-message" : ""
        } ${className}`}
        onClick={isAddMessage ? handleAddMessageClick : handleMessageClick}
        style={{ cursor: "pointer" }}
      >
        <div className="message-item--content">
          {isAddMessage ? (
            // 추가 메시지 모드
            <div className="message-item--add-content">
              <img
                className="message-item--plus-icon"
                src={AddIcon}
                alt="새 메시지 추가"
              />
            </div>
          ) : (
            // 일반 메시지
            <>
              <div className="message-item--header">
                <Avatar
                  src={message.profileImageURL}
                  alt={message.sender}
                  size="large"
                  className="message-item--avatar"
                />
                <div className="message-item--sender-info">
                  <span
                    className={
                      `message-item--sender-name` +
                      `${isPostEditPage ? "-edit" : ""}`
                    }
                  >
                    From.{" "}
                    <span className="message-item--sender-name--highlight">
                      {message.sender}
                    </span>
                  </span>
                  <Badge relationship={message.relationship} />
                  {isPostEditPage && (
                    <Button
                      icon="delete"
                      size="xs"
                      variant="outline"
                      className="message-item--sender-delete-button"
                      onClick={(e) => {
                        e.stopPropagation(); /* 클릭 이벤트 전파 방지 */
                        if (onDeleteMessage && message?.id) {
                          onDeleteMessage(message.id);
                        }
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="message-item--divider-underline"></div>
              <div
                className="message-item--text"
                style={{
                  fontFamily: message.font || "Pretendard",
                }}
                dangerouslySetInnerHTML={{ __html: message.content }}
              />
              <div className="message-item--footer">
                <span className="message-item--date">
                  {formatDate(message.createdAt)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 모달 - 일반 메시지일 때만 렌더링 */}
      {!isAddMessage && !isPostEditPage && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          message={message}
        />
      )}
    </>
  );
}

export default MessageItem;

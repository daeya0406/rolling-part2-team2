import Avatar from "./Avatar";
import Badge from "./Badge";
import { formatDate } from "../../utils/utils";
import "./MessageItem.scss";
import AddIcon from "../../assets/images/icons/add.svg";

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
 */

function MessageItem({
  message,
  isAddMessage = false,
  onAddClick,
  toId,
  className = "",
}) {
  // 추가 메세지 클릭 핸들러
  const handleAddMessageClick = () => {
    if (onAddClick) {
      onAddClick();
    } else if (toId) {
      // /post/{id}/message로 이동
      window.location.href = `/post/${toId}/message`;
    }
  };

  return (
    <div
      className={`message-item ${
        isAddMessage ? "message-item--add-message" : ""
      } ${className}`}
      onClick={isAddMessage ? handleAddMessageClick : undefined}
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
                <span className="message-item--sender-name">
                  From.{" "}
                  <span className="message-item--sender-name--highlight">
                    {message.sender}
                  </span>
                </span>
                <Badge relationship={message.relationship} />
              </div>
            </div>
            <div className="message-item--divider-underline"></div>
            <div className="message-item--text">{message.content}</div>
            <div className="message-item--footer">
              <span className="message-item--date">
                {formatDate(message.createdAt)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MessageItem;

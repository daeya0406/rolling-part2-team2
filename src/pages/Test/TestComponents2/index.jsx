import "./style.scss";
import Badge from "../../../components/ui/Badge";

export default function Test2() {
  // 샘플 데이터
  const rollingPapers = {
    id: 12111,
    name: "치맨",
    backgroundColor: "beige",
    backgroundImageURL:
      "http://res.cloudinary.com/dxho7f5dm/image/upload/v1749826133/images/%ED%8C%90%EB%8B%A4%20%EC%96%BC%EA%B5%B4_1749826133043.png",
    createdAt: "2025-06-13T14:48:54.644971Z",
    messageCount: 6,
    recentMessages: [
      {
        id: 23399,
        recipientId: 12111,
        sender: "김치영",
        profileImageURL: "https://picsum.photos/id/859/100/100",
        relationship: "가족",
        content:
          "코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!",
        font: "Noto Sans",
        createdAt: "2025-06-17T05:12:43.377063Z",
      },
      {
        id: 23319,
        recipientId: 12111,
        sender: "김치영",
        profileImageURL: "https://picsum.photos/id/494/100/100",
        relationship: "지인",
        content:
          "코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!",
        font: "Pretendard",
        createdAt: "2025-06-13T14:50:17.726398Z",
      },
      {
        id: 23318,
        recipientId: 12111,
        sender: "김치영",
        profileImageURL: "https://picsum.photos/id/547/100/100",
        relationship: "동료",
        content:
          "코드잇가 또다시 기술을 부리는 요술이네요. 건강, 채력 모두 조심 또 하세요!",
        font: "Pretendard",
        createdAt: "2025-06-13T14:49:29.803654Z",
      },
    ],
    reactionCount: 10,
    topReactions: [
      {
        id: 12712,
        emoji: "😆",
        count: 5,
      },
      {
        id: 12714,
        emoji: "😅",
        count: 3,
      },
      {
        id: 12713,
        emoji: "😍",
        count: 2,
      },
    ],
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\s/g, "")
      .replace(/\.$/, "");
  };

  return (
    <div className="test2-page-wrapper">
      <div className="header-service">
        <div className="header-content">
          <h1>To.{rollingPapers.name}</h1>
          <div className="avatar-group">
            <div className="avatar-images">
              {rollingPapers.recentMessages.slice(0, 3).map((message) => (
                <img
                  key={message.id}
                  src={message.profileImageURL}
                  alt={message.sender}
                />
              ))}
              {rollingPapers.messageCount > 3 && (
                <span className="avatar-count">
                  +{rollingPapers.messageCount - 3}
                </span>
              )}
            </div>
            <p>{rollingPapers.messageCount}명이 작성했어요!</p>
          </div>
          <div className="divider"></div>
          <div className="emoji-group">
            <div className="emoji-badges">
              {rollingPapers.topReactions.map((reaction) => (
                <span key={reaction.id} className="emoji-badge">
                  {reaction.emoji} {reaction.count}
                </span>
              ))}
              <span className="emoji-dropdown">▼</span>
            </div>
          </div>
          <button className="emoji-add-button">추가</button>
          <button className="share-button">공유하기</button>
        </div>
      </div>

      <section className="test2-container">
        <div className="contents-area">
          <div className="card-grid">
            {/* 새 메시지 추가 카드 */}
            <div className="card create-card">
              <div className="card-content">
                <div className="plus-icon">+</div>
              </div>
            </div>

            {/* 메시지 카드들 */}
            {rollingPapers.recentMessages.map((message) => (
              <div key={message.id} className="card message-card">
                <div className="message-content">
                  <div className="message-header">
                    <img
                      src={message.profileImageURL}
                      alt={message.sender}
                      className="profile-image"
                    />
                    <div className="sender-info">
                      <span className="sender-name">
                        From. {message.sender}
                      </span>
                      <Badge relationship={message.relationship} />
                    </div>
                  </div>
                  <div className="message-text">{message.content}</div>
                  <div className="message-footer">
                    <span className="message-date">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

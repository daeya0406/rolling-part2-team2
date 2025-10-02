import { useState, useEffect, useRef } from "react";
import "./style.scss";
import Badge from "../../../components/ui/Badge";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import Avatar from "../../../components/ui/Avatar";
import Reactions from "../../../components/ui/Reactions";
import MessageList from "../../../components/ui/MessageList";
import EmojiPicker from "emoji-picker-react";

function Test2() {
  // 테스트용 로딩 상태
  const [testLoading, setTestLoading] = useState(false);
  // 이모지 드롭다운 상태 관리
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  // 이모지 피커 상태 관리
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  // 공유 드롭다운 상태 관리
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const emojiGroupRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const shareDropdownRef = useRef(null);
  const kakaoAppKey = import.meta.env.VITE_KAKAO_APP_KEY;

  // 테스트 로딩 토글
  const toggleTestLoading = () => {
    setTestLoading((prev) => !prev);
    console.log("테스트 로딩 상태:", !testLoading);
  };

  // 페이지 마운트 시 가로 스크롤 방지 (다른 페이지에 영향 없음)
  useEffect(() => {
    // 현재 body의 overflow-x 값 저장
    const originalOverflowX = document.body.style.overflowX;

    // 가로 스크롤 방지 적용
    document.body.style.overflowX = "hidden";

    // 컴포넌트 언마운트 시 원래 값으로 복원
    return () => {
      document.body.style.overflowX = originalOverflowX;
    };
  }, []);

  // 외부 클릭 시 드롭다운 및 이모지 피커 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiGroupRef.current &&
        !emojiGroupRef.current.contains(event.target)
      ) {
        setIsEmojiDropdownOpen(false);
      }

      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target) &&
        !event.target.closest(".emoji-add-button")
      ) {
        setIsEmojiPickerOpen(false);
      }

      if (
        shareDropdownRef.current &&
        !shareDropdownRef.current.contains(event.target) &&
        !event.target.closest(".share-button")
      ) {
        setIsShareDropdownOpen(false);
      }
    };

    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeChild(script);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 샘플 데이터
  const rollingPapers = {
    id: 12111,
    name: "치맨",
    backgroundColor: "beige",
    backgroundImageURL: "",
    createdAt: "2025-06-13T14:48:54.644971Z",
    messageCount: 14, // 더 많은 메시지가 있다고 가정
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
    ],
    reactionCount: 10,
    topReactions: [
      {
        id: 12712,
        emoji: "😆",
        count: 25,
      },
      {
        id: 12714,
        emoji: "😅",
        count: 31,
      },
      {
        id: 12713,
        emoji: "😍",
        count: 12,
      },
    ],
  };

  const reactionEmojis = {
    count: 8,
    next: null,
    previous: null,
    results: [
      {
        id: 12712,
        emoji: "😆",
        count: 5,
      },
      {
        id: 12713,
        emoji: "😍",
        count: 6,
      },
      {
        id: 12714,
        emoji: "😅",
        count: 1,
      },
      {
        id: 12715,
        emoji: "❤️",
        count: 13,
      },
      {
        id: 12716,
        emoji: "👍",
        count: 3,
      },
      {
        id: 12717,
        emoji: "🔥",
        count: 8,
      },
      {
        id: 12718,
        emoji: "👏",
        count: 11,
      },
      {
        id: 12719,
        emoji: "🎉",
        count: 8,
      },
    ],
  };

  // 이모지 선택 핸들러
  const handleEmojiClick = (emojiData) => {
    console.log("선택된 이모지:", emojiData.emoji);
    // 여기서 이모지 반응을 서버에 전송하거나 로컬 상태를 업데이트할 수 있습니다
    setIsEmojiPickerOpen(false);
  };

  // 공유 핸들러
  const handleKakaoShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(kakaoAppKey);
      }
      window.Kakao.Share.sendCustom({
        templateId: 124671,
      });
    }
    setIsShareDropdownOpen(false);
  };

  const handleUrlShare = () => {
    console.log("URL 공유");
    // URL 복사 로직 구현
    const currentUrl = "https://github.com/daeya0406/rolling-part2-team2";
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("URL이 클립보드에 복사되었습니다!");
    });
    setIsShareDropdownOpen(false);
  };

  return (
    <div className="test2-page-wrapper">
      <div className="header-service">
        <div className="header-content">
          <h1>To.{rollingPapers.name}</h1>
          <div className="avatar-group">
            <AvatarGroup
              avatars={rollingPapers.recentMessages.map((message) => ({
                id: message.id,
                src: message.profileImageURL,
                alt: message.sender,
              }))}
              maxVisible={3}
              totalCount={rollingPapers.messageCount}
              size="small"
              showCount={true}
              isListMode={false}
            />
            <p>{rollingPapers.messageCount}명이 작성했어요!</p>
          </div>
          <div className="divider"></div>
          <div
            className="emoji-group"
            style={{ position: "relative" }}
            ref={emojiGroupRef}
          >
            <div className="reactions-container">
              <Reactions reactions={rollingPapers.topReactions} />
              <span
                className="emoji-dropdown-toggle"
                onClick={() => setIsEmojiDropdownOpen(!isEmojiDropdownOpen)}
                style={{ cursor: "pointer" }}
              >
                {isEmojiDropdownOpen ? "▲" : "▼"}
              </span>
            </div>

            {/* 이모지 드롭다운 */}
            {isEmojiDropdownOpen && (
              <div className="emoji-dropdown-container">
                <Reactions
                  reactions={reactionEmojis.results}
                  className="dropdown-reactions"
                />
              </div>
            )}
          </div>

          <div className="emoji-add-section" style={{ position: "relative" }}>
            <button
              className="emoji-add-button"
              onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
            >
              추가
            </button>

            {/* 이모지 피커 */}
            {isEmojiPickerOpen && (
              <div className="emoji-picker-dropdown" ref={emojiPickerRef}>
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  width={350}
                  height={400}
                  searchPlaceholder="Search"
                  previewConfig={{
                    showPreview: true,
                  }}
                />
              </div>
            )}
          </div>

          <div className="share-section" style={{ position: "relative" }}>
            <button
              className="share-button"
              onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
            >
              공유하기
            </button>

            {/* 공유 드롭다운 */}
            {isShareDropdownOpen && (
              <div className="share-dropdown" ref={shareDropdownRef}>
                <button className="share-option" onClick={handleKakaoShare}>
                  카카오톡 공유
                </button>
                <button className="share-option" onClick={handleUrlShare}>
                  URL 공유
                </button>
                <button
                  className="share-option"
                  onClick={toggleTestLoading}
                  style={{
                    backgroundColor: testLoading ? "#ff4757" : "#2ed573",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {testLoading ? "로딩 중지" : "스피너 테스트"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="message-list-wrapper"
        style={{
          "--bg-image": rollingPapers.backgroundImageURL
            ? `url(${rollingPapers.backgroundImageURL})`
            : "none",
          "--bg-color": rollingPapers.backgroundColor
            ? `var(--c-${rollingPapers.backgroundColor}200)`
            : "transparent",
        }}
      >
        <MessageList
          messages={rollingPapers.recentMessages}
          toId={rollingPapers.id}
        />
      </div>
    </div>
  );
}

export default Test2;

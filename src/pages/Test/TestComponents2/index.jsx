import { useState, useEffect, useRef, useCallback } from "react";
import "./style.scss";
import Badge from "../../../components/ui/Badge";
import AvatarGroup from "../../../components/ui/AvatarGroup";
import Avatar from "../../../components/ui/Avatar";
import EmojiPicker from "emoji-picker-react";

function Test2() {
  // 선택된 아바타 ID 관리 (단일 선택)
  const [selectedAvatarId, setSelectedAvatarId] = useState(null);
  // 무한 스크롤 상태 관리
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  // 이모지 드롭다운 상태 관리
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  // 이모지 피커 상태 관리
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  // 공유 드롭다운 상태 관리
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const emojiGroupRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const shareDropdownRef = useRef(null);

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

  // 더 많은 데이터 로드 함수
  const loadMore = useCallback(
    (totalMessages) => {
      if (isLoading || visibleCount >= totalMessages) return;

      setIsLoading(true);
      // 실제 API 호출 대신 시뮬레이션
      setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setIsLoading(false);
      }, 1000);
    },
    [isLoading, visibleCount]
  );

  // Intersection Observer 콜백
  const handleIntersection = useCallback(
    (entries, totalMessages) => {
      const [entry] = entries;
      // 감지 요소가 화면에 나타나고, 로딩 중이 아니고, 더 불러올 데이터가 있을 때
      if (entry.isIntersecting && !isLoading && visibleCount < totalMessages) {
        loadMore(totalMessages);
      }
    },
    [loadMore, isLoading, visibleCount]
  );

  // 샘플 데이터
  const rollingPapers = {
    id: 12111,
    name: "치맨",
    backgroundColor: "beige",
    backgroundImageURL: "https://picsum.photos/id/24/3840/2160",
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

  const reactionEmojis = {
    count: 3,
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

  // Intersection Observer 설정
  useEffect(() => {
    const observerElement = observerRef.current;
    const totalMessages = rollingPapers.recentMessages.length;

    if (!observerElement) return;

    const observer = new IntersectionObserver(
      (entries) => handleIntersection(entries, totalMessages),
      {
        root: containerRef.current,
        rootMargin: "100px", // 100px 전에 미리 감지
        threshold: 0.1,
      }
    );

    observer.observe(observerElement);

    return () => {
      if (observerElement) {
        observer.unobserve(observerElement);
      }
    };
  }, [handleIntersection, rollingPapers.recentMessages.length]);

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
        kakao.init("5c30f812d043089f85e15542f84eb0f7");
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
    <div
      className="test2-page-wrapper"
      style={{
        "--bg-image": rollingPapers.backgroundImageURL
          ? `url(${rollingPapers.backgroundImageURL})`
          : "none",
        "--bg-color": rollingPapers.backgroundColor || "transparent",
      }}
    >
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
            <div className="emoji-badges">
              {rollingPapers.topReactions.map((reaction) => (
                <span key={reaction.id} className="emoji-badge">
                  {reaction.emoji} {reaction.count}
                </span>
              ))}
              <span
                className="emoji-dropdown"
                onClick={() => setIsEmojiDropdownOpen(!isEmojiDropdownOpen)}
                style={{ cursor: "pointer" }}
              >
                {isEmojiDropdownOpen ? "▲" : "▼"}
              </span>
            </div>

            {/* 이모지 드롭다운 */}
            {isEmojiDropdownOpen && (
              <div className="emoji-dropdown-container">
                {reactionEmojis.results.slice(0, 8).map((reaction) => (
                  <div key={reaction.id} className="emoji-item">
                    <span className="emoji-icon">{reaction.emoji}</span>
                    <span className="emoji-count">{reaction.count}</span>
                  </div>
                ))}
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
              </div>
            )}
          </div>
        </div>
      </div>
      <section className="test2-container" ref={containerRef}>
        <div className="contents-area">
          <div className="card-grid">
            {/* 선택 가능한 아바타 테스트 카드 */}
            <div className="card" style={{ padding: "20px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#333",
                }}
              >
                아바타 선택 테스트
              </h3>
              <Avatar
                id="default"
                src={
                  selectedAvatarId
                    ? `https://picsum.photos/id/${selectedAvatarId}/100/100`
                    : `https://picsum.photos/id/100/100`
                }
                alt={selectedAvatarId ? `선택된 Avatar` : "Avatar 기본"}
                size="large"
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "12px",
                  marginBottom: "16px",
                  justifyItems: "center",
                }}
              >
                {["859", "870", "200", "320", "400"].map((id, index) => (
                  <Avatar
                    key={id}
                    src={`https://picsum.photos/id/${id}/100/100`}
                    alt={`Avatar ${index + 1}`}
                    size="large"
                    onClick={() => {
                      // 같은 아바타를 다시 클릭하면 선택 해제, 다른 아바타를 클릭하면 새로 선택
                      setSelectedAvatarId(selectedAvatarId === id ? null : id);
                      console.log(`Avatar ${index + 1} 클릭됨`);
                    }}
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  textAlign: "center",
                  margin: "0",
                  padding: "8px",
                  background: "#f8f9fa",
                  borderRadius: "4px",
                }}
              >
                선택된 아바타:{" "}
                {selectedAvatarId
                  ? `Avatar ${
                      ["859", "870", "200", "320", "400"].indexOf(
                        selectedAvatarId
                      ) + 1
                    }`
                  : "없음"}
                <br />
                <small>
                  하나의 아바타만 선택할 수 있습니다. 다른 아바타를 선택하면
                  이전 선택이 해제됩니다.
                </small>
              </p>
            </div>

            {/* 새 메시지 추가 카드 */}
            <div className="card create-card">
              <div className="card-content">
                <div className="plus-icon">+</div>
              </div>
            </div>

            {/* 메시지 카드들 */}
            {rollingPapers.recentMessages
              .slice(0, visibleCount)
              .map((message, index) => (
                <div
                  key={`${message.id}-${index}`}
                  className="card message-card"
                >
                  <div className="message-content">
                    <div className="message-header">
                      <Avatar
                        src={message.profileImageURL}
                        alt={message.sender}
                        size="large"
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

          {/* Intersection Observer 감지 요소 */}
          {visibleCount < rollingPapers.recentMessages.length && (
            <div
              ref={observerRef}
              style={{
                height: "1px",
                width: "100%",
              }}
            />
          )}

          {/* 로딩 인디케이터 - 카드 그리드 외부 */}
          {isLoading && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "40px 0",
                gap: "16px",
              }}
            >
              {/* 회전하는 스피너 */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "4px solid #f3f3f3",
                  borderTop: "4px solid #9935ff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              ></div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#666",
                  fontWeight: "500",
                }}
              >
                메시지를 불러오는 중...
              </div>
            </div>
          )}

          {/* 더 이상 로드할 데이터가 없을 때 */}
          {!isLoading &&
            visibleCount >= rollingPapers.recentMessages.length && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 0",
                  fontSize: "16px",
                  color: "#999",
                }}
              >
                {/* 모든 메시지를 확인했습니다 */}
              </div>
            )}
        </div>
      </section>
    </div>
  );
}

export default Test2;

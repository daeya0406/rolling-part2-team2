import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import HeaderService from "@/pages/RollingPaper/components/HeaderService";
import MessageList from "@/pages/RollingPaper/components/MessageList";

function Test2() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isPostEditPage = currentPath.includes("/edit");

  const kakaoAppKey = import.meta.env.VITE_KAKAO_APP_KEY;
  // 페이지 마운트 시 가로 스크롤 방지 (다른 페이지에 영향 없음)
  useEffect(() => {
    // 현재 body의 overflow-x 값 저장
    const originalOverflowX = document.body.style.overflowX;

    // 가로 스크롤 방지 적용
    document.body.style.overflowX = "hidden";

    // 카카오 SDK 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    // 컴포넌트 언마운트 시 원래 값으로 복원
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      document.body.style.overflowX = originalOverflowX;
    };
  }, []);

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
        sender: "Areain Kim",
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
        sender: "Areain Kim",
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

  // HeaderService 컴포넌트용 이벤트 핸들러
  const handleEmojiClick = (emojiData) => {
    console.log("선택된 이모지:", emojiData.emoji);
    // 여기서 이모지 반응을 서버에 전송하거나 로컬 상태를 업데이트할 수 있습니다
  };

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
  };

  const handleUrlShare = () => {
    console.log("URL 공유");
    const currentUrl = "https://github.com/daeya0406/rolling-part2-team2";
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("URL이 클립보드에 복사되었습니다!");
    });
  };

  return (
    <div className="test2-page-wrapper">
      {/* 서비스 헤더 부분 */}
      <HeaderService
        rollingPaper={rollingPapers}
        reactionEmojis={reactionEmojis.results}
        onEmojiClick={handleEmojiClick}
        onKakaoShare={handleKakaoShare}
        onUrlShare={handleUrlShare}
      />
      {/* 메세지 리스트 부분 */}
      <div
        className="message-list-wrapper"
        style={{
          "--bg-image": rollingPapers.backgroundImageURL
            ? `url(${rollingPapers.backgroundImageURL})`
            : "none",
          "--bg-color": rollingPapers.backgroundColor
            ? `var(--c-${rollingPapers.backgroundColor}200)`
            : "transparent",
          "--bg-overlay": rollingPapers.backgroundImageURL
            ? "rgba(0, 0, 0, 0.50)"
            : "transparent",
        }}
      >
        <MessageList
          messages={rollingPapers.recentMessages}
          toId={rollingPapers.id}
          isPostEditPage={isPostEditPage}
        />
      </div>
    </div>
  );
}

export default Test2;

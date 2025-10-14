import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Reactions from "@/components/ui/Reactions";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import EmojiPicker from "emoji-picker-react";
import ArrowDownIcon from "@/assets/images/icons/arrow-down.svg";
import "./HeaderService.scss";

/**
 * @param {Object} props
 * @param {Object} props.rollingPaper - 롤링페이퍼 데이터
 * @param {string} props.rollingPaper.name - 롤링페이퍼 수신자 이름
 * @param {number} props.rollingPaper.messageCount - 총 메시지 개수
 * @param {Array} props.rollingPaper.recentMessages - 최근 메시지 목록 (아바타용)
 * @param {Array} props.rollingPaper.topReactions - 상위 반응 목록
 * @param {Array} props.reactionEmojis - 전체 반응 이모지 목록
 * @param {Function} [props.onEmojiClick] - 이모지 선택 핸들러
 * @param {Function} [props.onKakaoShare] - 카카오톡 공유 핸들러
 * @param {Function} [props.onUrlShare] - URL 공유 핸들러
 * @param {string|number} [props.toId] - 롤링페이퍼 ID (관리자모드 버튼용)
 * @param {boolean} [props.isPostEditPage] - 현재 관리자모드 페이지인지 여부
 * @param {string} [props.className] - 추가 CSS 클래스
 */

function HeaderService({
  rollingPaper,
  reactionEmojis = [],
  onEmojiClick,
  onKakaoShare,
  onUrlShare,
  toId,
  isPostEditPage = false,
  className = "",
}) {
  // 상태 관리
  const [isEmojiDropdownOpen, setIsEmojiDropdownOpen] = useState(false);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);
  const [displayedEmojis, setDisplayedEmojis] = useState([]);

  // 화면 크기에 따른 이모지 개수 조정
  useEffect(() => {
    const updateDisplayedEmojis = () => {
      const screenWidth = window.innerWidth;
      let maxEmojis;

      if (screenWidth <= 1024) {
        maxEmojis = 6; // 1024px 이하에서는 6개
      } else {
        maxEmojis = 8; // PC에서는 8개
      }

      setDisplayedEmojis(
        reactionEmojis.slice(0, maxEmojis).map((emoji, index) => ({
          ...emoji,
          id: emoji.id || `emoji-${index}`,
        }))
      );
    };

    // 초기 설정
    updateDisplayedEmojis();

    // 윈도우 리사이즈 이벤트 리스너
    window.addEventListener("resize", updateDisplayedEmojis);

    return () => {
      window.removeEventListener("resize", updateDisplayedEmojis);
    };
  }, [reactionEmojis]);

  // Ref 관리
  const emojiGroupRef = useRef(null);
  const emojiPickerRef = useRef(null);
  const shareDropdownRef = useRef(null);

  // 외부 클릭 시 드롭다운 닫기
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 이벤트 핸들러
  const handleEmojiClick = (emojiData) => {
    if (!onEmojiClick) return;

    onEmojiClick(emojiData);
    setIsEmojiPickerOpen(false);
  };

  const handleKakaoShare = () => {
    if (!onKakaoShare) return;

    onKakaoShare();
    setIsShareDropdownOpen(false);
  };

  const handleUrlShare = () => {
    if (!onUrlShare) return;

    onUrlShare();
    setIsShareDropdownOpen(false);
  };

  return (
    <div className={`header-service ${className}`}>
      <div className="header-content">
        <div className="header-title-section">
          <h1>To. {rollingPaper?.name || "..."}</h1>
        </div>
        {/* 모바일에서만 보이는 구분선 */}
        <Divider
          width={9999}
          height={1}
          marginX={0}
          className="mobile-divider"
        />
        <div className="header-right-section">
          <div className="avatar-content tablet-hide">
            <AvatarGroup
              avatars={
                rollingPaper?.recentMessages?.map((message) => ({
                  id: message.id,
                  src: message.profileImageURL,
                  alt: message.sender,
                })) || []
              }
              maxVisible={3}
              totalCount={rollingPaper?.messageCount || 0}
              size="small"
              showCount={true}
              isListMode={false}
            />
            <p>
              <span>{rollingPaper?.messageCount || 0}</span>명이 작성했어요!
            </p>
            <Divider height={28} marginX={28} className="tablet-hide" />
          </div>
          <div className="emoji-content" ref={emojiGroupRef}>
            <div className="reactions-container">
              <Reactions reactions={rollingPaper?.topReactions || []} />
              {rollingPaper?.topReactions &&
                rollingPaper.topReactions.length > 0 && (
                  <span
                    className="emoji-dropdown-toggle"
                    onClick={() => setIsEmojiDropdownOpen(!isEmojiDropdownOpen)}
                  >
                    <img
                      src={ArrowDownIcon}
                      alt={isEmojiDropdownOpen ? "접기" : "펼치기"}
                      width={24}
                      height={24}
                      className={`arrow-icon ${
                        isEmojiDropdownOpen ? "rotated" : ""
                      }`}
                    />
                  </span>
                )}
            </div>

            {/* 이모지 드롭다운 */}
            {isEmojiDropdownOpen && (
              <div className="emoji-dropdown-container">
                <Reactions
                  reactions={displayedEmojis}
                  className="dropdown-reactions"
                />
              </div>
            )}
          </div>

          <div className="emoji-add-section">
            <Button
              icon="emoji"
              label="추가"
              size="xs"
              variant="outline"
              onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
              className="emoji-add-button"
            />

            {/* 이모지 피커 */}
            {isEmojiPickerOpen && (
              <div className="emoji-picker-dropdown" ref={emojiPickerRef}>
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  width={300}
                  height={390}
                  searchPlaceholder="Search"
                  previewConfig={{
                    showPreview: true,
                  }}
                />
              </div>
            )}
          </div>

          <Divider height={28} marginX={13} className="share-divider" />

          <div className="share-section">
            <Button
              icon="share"
              size="xs"
              variant="outline"
              className="share-button"
              onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
            />

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
    </div>
  );
}

export default HeaderService;

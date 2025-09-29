import "./TestAvatarGroup.scss";
import TestAvatar from "./TestAvatar";

/**
 * 아바타 그룹 컴포넌트
 * @param {Object} props
 * @param {Array<{id?: string|number, src: string, alt: string}>} [props.avatars] - 아바타 배열 (선택, 기본값: [])
 * @param {number} [props.maxVisible] - 최대 표시할 아바타 수 (선택, 기본값: 3)
 * @param {"small"|"medium"|"large"} [props.size] - 아바타 크기 (선택, 기본값: "small")
 * @param {number} [props.totalCount] - 전체 카운트 (선택, avatars.length 대신 사용 가능)
 * @param {boolean} [props.showCount] - 추가 카운트 표시 여부 (선택, 기본값: true)
 * @param {boolean} [props.isListMode] - 리스트 모드 여부 (선택, true시 카운트 아바타에 흰색 border 적용)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택, 기본값: "")
 */

function TestAvatarGroup({
  avatars = [],
  maxVisible = 3,
  size = "small",
  totalCount,
  showCount = true,
  isListMode = false,
  className = "",
}) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = (totalCount || avatars.length) - maxVisible;
  const shouldShowCount = showCount && remainingCount > 0;

  return (
    <div
      className={`test-avatar-group test-avatar-group--${size} ${className}`}
    >
      {visibleAvatars.map((avatar, index) => (
        <TestAvatar
          key={avatar.id || index}
          src={avatar.src}
          alt={avatar.alt}
          size={size}
          className="test-avatar-group__avatar"
        />
      ))}

      {shouldShowCount && (
        <TestAvatar
          isCount={true}
          count={remainingCount}
          size={size}
          isListMode={isListMode}
          className="test-avatar-group__count"
        />
      )}
    </div>
  );
}

export default TestAvatarGroup;

import { useNavigate } from "react-router-dom";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Reactions from "@/components/ui/Reactions";
import "./RollingCard.scss";

/**
 * RollingCard 컴포넌트
 * @param {Object} props
 * @param {number|string} props.id - 카드의 고유 ID
 * @param {string} props.title - 카드 제목 (예: "To. jerry")
 * @param {Array} props.avatars - 작성자 아바타 이미지 배열
 * @param {number} props.count - 작성자 수
 * @param {Array} props.reactions - 리액션(이모지) 데이터 배열
 * @param {string} [props.bgUrl] - 배경 이미지 URL (선택)
 * @param {'beige'|'blue'|'green'|'purple'} [props.bgColor] - 배경 색상 키워드
 */

// 패턴 이미지들을 static import
import patternBeige from "@/assets/images/pattern/pattern-beige.svg";
import patternBlue from "@/assets/images/pattern/pattern-blue.svg";
import patternGreen from "@/assets/images/pattern/pattern-green.svg";
import patternPurple from "@/assets/images/pattern/pattern-purple.svg";

// 패턴 이미지 매핑 객체
const patternImages = {
  beige: patternBeige,
  blue: patternBlue,
  green: patternGreen,
  purple: patternPurple,
};

// 패턴 이미지를 가져오는 함수
const getPatternImage = (color) => {
  return patternImages[color] || null;
};

/* 하나의 카드 UI를 보여주고 제목, 아바타 목록, 작성 인원 수, 리액션 영역으로 구성됨 */
function RollingCard({ id, title, avatars, count, reactions, bgUrl, bgColor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!id) return;
    navigate(`/post/${id}`);
  };

  // 배경색 계산 (CSS 변수 우선, 동적 fallback)
  const getBackgroundColor = () => {
    if (!bgColor) return undefined;

    // CSS 변수가 로드되지 않았을 때만 직접 색상 사용
    const colorMap = {
      beige: "#F5F1EB",
      blue: "#E2F3FF",
      green: "#E4FBDC",
      purple: "#F2E9FF",
    };

    return colorMap[bgColor] || "#F8F9FA";
  };

  return (
    <div
      className={`rolling-card ${bgUrl ? "rolling-card--with-bg-image" : ""}`}
      onClick={handleClick} // 카드 클릭 시 이동
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined, // 배경 이미지 적용
        backgroundColor: getBackgroundColor(), // 배경 컬러 (fallback 포함)
        cursor: "pointer", // 마우스 커서 손모양으로
      }}
    >
      {/* 배경 이미지가 있을 때 오버레이 */}
      {bgUrl && <div className="rolling-card__overlay"></div>}

      {/* 컬러 배경일 때 패턴 이미지 */}
      {!bgUrl && bgColor && getPatternImage(bgColor) && (
        <div className="rolling-card__pattern">
          <img
            src={getPatternImage(bgColor)}
            alt=""
            className="rolling-card__pattern-image"
          />
        </div>
      )}

      {/* 제목 출력 */}
      <div className="rolling-card__header">
        <div className="rolling-card__title">{title}</div>
      </div>

      {/* AvatarGroup + 작성 Count */}
      <div className="rolling-card__body">
        <AvatarGroup
          className="rolling-card-avartars"
          avatars={avatars}
          maxVisible={3}
          size="small"
          totalCount={count}
          showCount={true}
          isListMode={true}
        />
      </div>

      {/* 섬네일을 제외한 고정 영역 */}
      <div className="rolling-card__bottom">
        <p className="rolling-card__info">
          <span className="rolling-card__count">{count}명</span>이 작성했어요.
        </p>

        <div className="rolling-card__line"></div>

        <div className="rolling-card__footer">
          <Reactions
            className="rolling-card__reactions"
            reactions={reactions}
          />
        </div>
      </div>
    </div>
  );
}

export default RollingCard;

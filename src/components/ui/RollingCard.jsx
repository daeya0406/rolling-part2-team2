import AvatarGroup from "./AvatarGroup";
import Reactions from "./Reactions";
import "./RollingCard.scss";

/* 하나의 카드 UI를 보여주고 제목, 아바타 목록, 작성 인원 수, 리액션 영역으로 구성됨 */
/* 적용되는 더미 데이터는 Components1.jsx에서 props로 받아옴 */
function RollingCard({ title, avatars, count, reactions }) {
  return (
    <div className="rolling-card">
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

        <p className="rolling-card__info">
          <span className="rolling-card__count">{count}명</span>이 작성했어요.
        </p>
      </div>

      {/* 카드 구분 선 */}
      <div className="rolling-card__line"></div>

      {/* reaction 영역 */}
      <div className="rolling-card__footer">
        <Reactions className="rolling-card__reactions" reactions={reactions} />
      </div>
    </div>
  );
}

export default RollingCard;

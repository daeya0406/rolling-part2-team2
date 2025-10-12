import "./badge.scss";

/**
 * 관계 표시 배지 컴포넌트
 * @param {Object} props
 * @param {"가족"|"지인"|"동료"|"친구"} props.relationship - 관계 유형 (**필수**)
 */

function Badge({ relationship }) {
  return <span className={`badge badge--${relationship}`}>{relationship}</span>;
}

export default Badge;

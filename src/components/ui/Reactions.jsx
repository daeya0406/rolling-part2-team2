import "./Reactions.scss";

/**
 * 반응(이모지) 컴포넌트
 * @param {Object} props
 * @param {Array<{id: string|number, emoji: string, count: number}>} props.reactions - 반응 목록 (**필수**)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택, 기본값: "")
 */

function Reactions({ reactions = [], className = "" }) {
  return (
    <div className={`reactions ${className}`}>
      <div className="reactions--badges">
        {reactions.map((reaction) => (
          <div key={reaction.id} className="reactions--badge">
            <span className="reactions--emoji">{reaction.emoji}</span>
            <span className="reactions--count">{reaction.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reactions;

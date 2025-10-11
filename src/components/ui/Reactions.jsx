import "./Reactions.scss";

/**
 * 반응(이모지) 컴포넌트
 * @param {Object} props
 * @param {Array<{id: string|number, emoji: string, count: number}>} props.reactions - 반응 목록 (**필수**)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택, 기본값: "")
 * @param {Object} [otherProps] - 기타 추가 props
 */

function Reactions({ reactions = [], className = "", ...otherProps }) {
  return (
    <div className={`reactions ${className}`} {...otherProps}>
      <div className="reactions--badges" data-emoji-count={reactions.length}>
        {reactions.map((reaction, index) => (
          <div
            key={reaction.id || `reaction-${index}`}
            className="reactions--badge"
          >
            <span className="reactions--emoji">{reaction.emoji}</span>
            <span className="reactions--count">{reaction.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reactions;

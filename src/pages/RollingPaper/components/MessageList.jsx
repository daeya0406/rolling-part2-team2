import MessageItem from "./MessageItem";
import Loading from "@/components/ui/Loading";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import "./MessageList.scss";

/**
 * 메시지 목록 컴포넌트 - 무한 스크롤과 새 메시지 추가 기능을 포함한 그리드 레이아웃
 * @param {Object} props
 * @param {Array<Object>} props.messages - 메시지 배열 (각 메시지는 id, sender, content 등 포함)
 * @param {string|number} props.toId - 롤링페이퍼 ID (새 메시지 추가 네비게이션용)
 * @param {number} [props.initialVisible=5] - 초기 표시할 메시지 개수
 * @param {number} [props.loadIncrement=6] - 무한 스크롤 시 추가 로드할 메시지 개수
 * @param {Function} [props.onLoadMore] - 추가 데이터 로드 콜백 함수
 * @param {boolean} [props.isLoading=false] - 외부 로딩 상태
 */

function MessageList({
  messages = [],
  toId,
  initialVisible = 5, // 초기 5개만 표시
  loadIncrement = 6, // 6개씩 추가 로드
  onLoadMore,
  isLoading = false,
}) {
  // 커스텀 훅으로 무한 스크롤 로직 분리
  const {
    visibleItems,
    hasMore,
    isLoading: infiniteLoading,
    observerRef,
  } = useInfiniteScroll({
    items: messages,
    initialVisible,
    loadIncrement,
    onLoadMore,
    isLoading,
  });

  return (
    <div className="message-list--container">
      <div className="message-list--grid">
        {/* 새 메시지 추가 */}
        <MessageItem isAddMessage={true} toId={toId} />

        {/* 메시지들 */}
        {visibleItems.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}

        {/* Intersection Observer 감지 요소 */}
        {hasMore && (
          <div ref={observerRef} className="message-list--observer" />
        )}

        {/* 모든 메시지 로드 완료 */}
        {!infiniteLoading && !hasMore && messages.length > 0 && (
          <div className="message-list--complete">
            {/* 모든 메시지를 확인했습니다 */}
          </div>
        )}
      </div>

      {/* 로딩 인디케이터 */}
      {infiniteLoading && (
        <div className="message-list--loading-overlay">
          <Loading size="lg" />
        </div>
      )}
    </div>
  );
}

export default MessageList;

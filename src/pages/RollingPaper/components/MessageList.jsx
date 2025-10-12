import { useState } from "react";
import MessageItem from "./MessageItem";
import Loading from "@/components/ui/Loading";
import Warn from "@/components/ui/Warn";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import "./MessageList.scss";
import Button from "@/components/ui/Button";
import { deleteMessage } from "@/apis/api";
import useAsync from "@/hooks/useAsync";
import { showToast } from "@/components/ui/Toast";

/**
 * 메시지 목록 컴포넌트 - 무한 스크롤과 새 메시지 추가 기능을 포함한 그리드 레이아웃
 * @param {Object} props
 * @param {Array<Object>} props.messages - 메시지 배열 (각 메시지는 id, sender, content 등 포함)
 * @param {string|number} props.toId - 롤링페이퍼 ID (새 메시지 추가 네비게이션용)
 * @param {number} [props.initialVisible=5] - 초기 표시할 메시지 개수
 * @param {number} [props.loadIncrement=6] - 무한 스크롤 시 추가 로드할 메시지 개수
 * @param {Function} [props.onLoadMore] - 추가 데이터 로드 콜백 함수
 * @param {boolean} [props.isInitialized=false] - 초기 데이터 로딩 완료 여부
 * @param {boolean} [props.isPostEditPage=false] - 페이지가 롤링페이퍼 수정 페이지인지 여부
 * @param {Function} [props.onRefreshMessages] - 메시지 목록 새로고침 콜백 함수
 * @param {Function} [props.onDeleteRollingPaper] - 롤링페이퍼 삭제 콜백 함수
 * @param {Object} [props.backgroundData] - 배경 데이터 (Warn 컴포넌트 variant 결정용)
 */

function MessageList({
  messages = [],
  toId,
  initialVisible = 5, // 초기 5개만 표시
  loadIncrement = 6, // 6개씩 추가 로드
  onLoadMore,
  isInitialized = false, // 초기 데이터 로딩 완료 여부
  isPostEditPage = false,
  onRefreshMessages,
  onDeleteRollingPaper,
  backgroundData,
}) {
  // 삭제 확인 모달 상태
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // useAsync 훅을 사용하여 삭제 기능 관리
  const [isDeleting, deleteError, deleteMessageAsync] = useAsync(deleteMessage);

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
  });

  const handleDeleteMessage = async (messageId) => {
    // useAsync를 사용하여 삭제 처리
    const result = await deleteMessageAsync(messageId);

    if (result && onRefreshMessages) {
      // 삭제 성공 시 메시지 목록 새로고침
      showToast("메시지를 삭제하였습니다.", { type: "success" });
      onRefreshMessages();
    }

    // 오류가 있다면 사용자에게 알림
    if (deleteError) {
      showToast("메시지 삭제 중 오류 발생했습니다. 다시시도해 주세요", {
        type: "error",
      });
      console.error("메시지 삭제 중 오류 발생:", deleteError);
    }
  };

  // 롤링페이퍼 삭제 확인 모달 열기 핸들러
  const handleDeleteRollingPaperClick = () => {
    setIsDeleteModalOpen(true);
  };

  // 롤링페이퍼 삭제 확인 핸들러
  const handleDeleteRollingPaperConfirm = () => {
    if (onDeleteRollingPaper && toId) {
      onDeleteRollingPaper(toId);
    }
    setIsDeleteModalOpen(false);
  };

  // 삭제 모달 닫기 핸들러
  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="message-list--container">
      {/* 관리자모드에서 메시지가 없을 때 안내 메시지 표시 (초기화 완료 후에만) */}
      {isPostEditPage &&
        visibleItems.length === 0 &&
        !infiniteLoading &&
        isInitialized && (
          <div className="message-list--empty">
            <Warn
              variant={
                backgroundData &&
                !backgroundData.backgroundImageURL &&
                backgroundData.backgroundColor
                  ? "black"
                  : "small"
              }
              title="메시지가 존재하지 않습니다."
              description="아직 작성된 메시지가 없어요."
            />
            <Button
              size="sm"
              label="메세지 삭제하기"
              className="message-list--empty-delete-button"
              onClick={handleDeleteRollingPaperClick}
            />
          </div>
        )}

      {/* 메시지 목록 그리드 표시 */}
      <div className="message-list--grid">
        {/* 관리자모드에서 메시지가 있을 때만 삭제하기 버튼 표시 */}
        {isPostEditPage && visibleItems.length > 0 && (
          <Button
            size="sm"
            label="삭제하기"
            className="message-list--delete-button"
            onClick={handleDeleteRollingPaperClick}
          />
        )}
        {/* 새 메시지 추가 */}
        <MessageItem
          isAddMessage={true}
          toId={toId}
          isPostEditPage={isPostEditPage}
          onDeleteMessage={handleDeleteMessage}
          disabled={isDeleting} // 삭제 중일 때 비활성화
        />

        {/* 메시지들 */}
        {visibleItems.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            isPostEditPage={isPostEditPage}
            onDeleteMessage={handleDeleteMessage}
            disabled={isDeleting} // 삭제 중일 때 비활성화
          />
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

      {/* 삭제 중 로딩 오버레이 */}
      {isDeleting && (
        <div className="message-list--loading-delete-overlay">
          <Loading size="lg" />
          <p>메시지 삭제 중...</p>
        </div>
      )}

      {/* 롤링페이퍼 삭제 확인 모달 */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onConfirm={handleDeleteRollingPaperConfirm}
        title="롤링페이퍼를 삭제하시겠습니까?"
        message="삭제된 롤링페이퍼와 모든 메시지는 복구할 수 없습니다."
        confirmText="삭제"
        cancelText="취소"
      />
    </div>
  );
}

export default MessageList;

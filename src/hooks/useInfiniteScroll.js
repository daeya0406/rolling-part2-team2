import { useState, useEffect, useRef } from "react";

/**
 * 무한 스크롤 훅
 * @param {Object} options
 * @param {Array} options.items - 전체 아이템 배열
 * @param {number} [options.initialVisible=5] - 초기 표시 개수
 * @param {number} [options.loadIncrement=6] - 한번에 로드할 개수
 * @param {Function} [options.onLoadMore] - 외부 로드 콜백
 * @param {boolean} [options.isLoading=false] - 외부 로딩 상태
 */

export function useInfiniteScroll({
  items = [],
  initialVisible = 5,
  loadIncrement = 3,
  onLoadMore,
  isLoading = false,
}) {
  const [visibleCount, setVisibleCount] = useState(initialVisible);
  const [internalLoading, setInternalLoading] = useState(false);
  const observerRef = useRef(null);

  const hasMore = visibleCount < items.length;
  const totalLoading = isLoading || internalLoading;

  // Intersection Observer 설정
  useEffect(() => {
    const element = observerRef.current;
    if (!element || totalLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setInternalLoading(true);

        if (onLoadMore) {
          // 외부 콜백 처리
          Promise.resolve(onLoadMore()).finally(() =>
            setInternalLoading(false)
          );
        } else {
          // 내부 처리 - 타이머
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + loadIncrement, items.length)
            );
            setInternalLoading(false);
          }, 500);
        }
      },
      {
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  });

  // 아이템 길이 변경 시 조정
  useEffect(() => {
    if (visibleCount > items.length) {
      setVisibleCount(items.length);
    }
  }, [items.length, visibleCount]);

  return {
    visibleItems: items.slice(0, visibleCount),
    hasMore,
    isLoading: totalLoading,
    observerRef,
  };
}

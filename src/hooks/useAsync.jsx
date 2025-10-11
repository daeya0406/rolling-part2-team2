import { useCallback, useState } from "react";

function useAsync(asyncFunction) {
  // asyncFunction: Promise를 반환하는 함수 => API 호출 함수
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFuction = useCallback(
    async (...args) => {
      try {
        setPending(true);
        setError(null);
        return await asyncFunction(...args);
      } catch (error) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );
  // useCallback 훅은 함수를 메모이제이션하여 동일한 함수 인스턴스를 재사용

  return [pending, error, wrappedFuction];
}

export default useAsync;

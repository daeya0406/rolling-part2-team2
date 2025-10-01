/**
 * 날짜 포맷팅 유틸리티 함수
 * @param {string} dateString - 날짜 문자열
 * @returns {string} 포맷된 날짜 문자열 (YYYY.MM.DD)
 */

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\s/g, "")
    .replace(/\.$/, "");
};

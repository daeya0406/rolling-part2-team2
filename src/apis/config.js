/**
 * API 설정 관련 상수들
 */

// API 베이스 URL
export const API_BASE_URL = "https://rolling-api.vercel.app";

// 팀 ID
export const TEAM_ID = "19-2";

// 팀별 API 베이스 URL
export const TEAM_API_BASE_URL = `${API_BASE_URL}/${TEAM_ID}`;

// 공통 헤더
export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

// API 엔드포인트 경로
export const ENDPOINTS = {
  // 수신자 관련
  RECIPIENTS: "/recipients",
  RECIPIENT_DETAIL: (id) => `/recipients/${id}`,

  // 메시지 관련
  MESSAGES: (recipientId) => `/recipients/${recipientId}/messages`,
  MESSAGE_DETAIL: (id) => `/messages/${id}`,

  // 리액션 관련
  REACTIONS: (recipientId) => `/recipients/${recipientId}/reactions`,

  // 이미지 관련
  BACKGROUND_IMAGES: "/background-images",
  PROFILE_IMAGES: "/profile-images",
};

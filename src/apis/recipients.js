/**
 * 수신자(Recipients) 관련 API 함수들
 */

import {
  TEAM_API_BASE_URL,
  API_BASE_URL,
  DEFAULT_HEADERS,
  ENDPOINTS,
} from "./config.js";

/**
 * 수신자 목록 조회
 * @param {number} limit - 조회할 개수 (기본값: 999)
 * @param {number} offset - 시작 오프셋 (기본값: 0)
 * @returns {Promise<Object>} 수신자 목록 데이터
 */
export async function getRecipients(limit = 999, offset = 0) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.RECIPIENTS}/?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: DEFAULT_HEADERS,
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  const data = await response.json();

  // 서버 API 데이터를 UI용 데이터로 매핑
  return data.results.map((item) => ({
    id: item.id,
    title: `To. ${item.name}`,
    avatars: item.recentMessages.map((msg) => ({
      id: msg.id,
      src: msg.profileImageURL,
      alt: msg.userName,
    })),
    count: item.messageCount,
    reactions: item.topReactions.map((reaction) => ({
      emoji: reaction.emoji,
      count: reaction.count,
    })),
    bgUrl: item.backgroundImageURL,
    bgColor: item.backgroundColor,
    createdAt: item.createdAt,
  }));
}

/**
 * 수신자 생성
 * @param {Object} payload - 수신자 생성 데이터
 * @param {string} payload.name - 수신자 이름
 * @param {string} payload.backgroundColor - 배경 색상
 * @param {string} payload.backgroundImageURL - 배경 이미지 URL
 * @returns {Promise<Object>} 생성된 수신자 데이터
 */
export async function postRecipient(payload) {
  const response = await fetch(`${TEAM_API_BASE_URL}${ENDPOINTS.RECIPIENTS}/`, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  return response.json();
}

/**
 * 수신자 상세 정보를 조회 (배경 데이터 포함)
 * @param {string|number} id - 수신자 ID
 * @returns {Promise<Object>} 수신자 상세 데이터
 */
export async function getRecipientDetail(id) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.RECIPIENT_DETAIL(id)}/`
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}

/**
 * 수신자(롤링페이퍼)를 삭제
 * @param {string|number} id - 수신자 ID
 * @returns {Promise<boolean>} 삭제 성공 여부
 */
export async function deleteRecipient(id) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.RECIPIENT_DETAIL(id)}/`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("롤링페이퍼를 삭제하는데 실패했습니다");
  }

  return true; // 삭제 성공 시 true 반환
}

/**
 * 리액션(Reactions) 관련 API 함수들
 */

import { TEAM_API_BASE_URL, DEFAULT_HEADERS, ENDPOINTS } from "./config.js";

/**
 * 특정 수신자의 리액션 목록을 조회
 * @param {string|number} recipientId - 수신자 ID
 * @returns {Promise<Object>} 리액션 데이터
 */
export async function getReactions(recipientId) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.REACTIONS(recipientId)}/`
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}

/**
 * 리액션 생성/업데이트
 * @param {string|number} recipientId - 수신자 ID
 * @param {Object} reactionData - 리액션 데이터
 * @param {string} reactionData.emoji - 이모지
 * @param {string} reactionData.type - 액션 타입 ("increase" | "decrease")
 * @returns {Promise<Object>} 생성/업데이트된 리액션 데이터
 */
export async function postReaction(recipientId, reactionData) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.REACTIONS(recipientId)}/`,
    {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(reactionData),
    }
  );

  if (!response.ok) {
    throw new Error("데이터를 생성하는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}

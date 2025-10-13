/**
 * 메시지(Messages) 관련 API 함수들
 */

import {
  TEAM_API_BASE_URL,
  API_BASE_URL,
  DEFAULT_HEADERS,
  ENDPOINTS,
  TEAM_ID,
} from "./config.js";

/**
 * 특정 수신자의 메시지 목록 조회
 * @param {string|number} recipientId - 수신자 ID
 * @param {number} limit - 조회할 개수 (기본값: 999)
 * @returns {Promise<Object>} 메시지 목록 데이터
 */
export async function getMessages(recipientId, limit = 999) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.MESSAGES(recipientId)}/?limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }

  const body = await response.json();
  return body;
}

/**
 * 메시지 생성
 * @param {Object} messageData - 메시지 생성 데이터
 * @param {string} messageData.recipientId - 수신자 ID
 * @param {string} messageData.sender - 보낸 사람 이름
 * @param {string} messageData.profileImageURL - 프로필 이미지 URL
 * @param {string} messageData.relationship - 관계
 * @param {string} messageData.content - 메시지 내용
 * @param {string} messageData.font - 폰트
 * @returns {Promise<Object>} 생성된 메시지 데이터
 */
export async function postMessage({
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
}) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/${TEAM_ID}/recipients/${recipientId}/messages/`,
      {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify({
          team: TEAM_ID,
          recipientId,
          sender,
          profileImageURL,
          relationship,
          content,
          font,
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API 실패: ${res.status} ${text}`);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/**
 * 메시지를 삭제합니다
 * @param {string|number} messageId - 메시지 ID
 * @returns {Promise<boolean>} 삭제 성공 여부
 */
export async function deleteMessage(messageId) {
  const response = await fetch(
    `${TEAM_API_BASE_URL}${ENDPOINTS.MESSAGE_DETAIL(messageId)}/`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("메시지를 삭제하는데 실패했습니다");
  }

  return true; // 삭제 성공 시 true 반환
}

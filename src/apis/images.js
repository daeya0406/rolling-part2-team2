/**
 * 이미지(Images) 관련 API 함수들
 */

import { API_BASE_URL, DEFAULT_HEADERS, ENDPOINTS } from "./config.js";

/**
 * 배경 이미지 목록 조회
 * @returns {Promise<Object>}
 */
export async function getBackgroundImages() {
  try {
    const response = await fetch(
      `${API_BASE_URL}${ENDPOINTS.BACKGROUND_IMAGES}/`,
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error("API 응답 없음");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching background images:", error);
    throw error;
  }
}

/**
 * 프로필 이미지 목록 조회
 * @returns {Promise<Array>}
 */
export async function getProfileImages() {
  const response = await fetch(`${API_BASE_URL}${ENDPOINTS.PROFILE_IMAGES}/`, {
    method: "GET",
    headers: DEFAULT_HEADERS,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data.imageUrls || [];
}

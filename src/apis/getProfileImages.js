const API_BASE = "https://rolling-api.vercel.app";

export async function getProfileImages() {
  const response = await fetch(`${API_BASE}/profile-images/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  const data = await response.json();
  return data.imageUrls || [];
}

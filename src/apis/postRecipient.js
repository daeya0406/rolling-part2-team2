const API_BASE = "https://rolling-api.vercel.app";

export async function postRecipient(team, payload) {
  const response = await fetch(`${API_BASE}/${team}/recipients/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  return response.json();
}

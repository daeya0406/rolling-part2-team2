const API_BASE = "https://rolling-api.vercel.app/19-2";

export async function getRollingPapersbackgroundData(id) {
  const response = await fetch(`${API_BASE}/recipients/${id}/`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function getRollingPapers(id) {
  const response = await fetch(`${API_BASE}/recipients/${id}/messages/`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function deleteRollingPaper(id) {
  const response = await fetch(`${API_BASE}/recipients/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("롤링페이퍼를 삭제하는데 실패했습니다");
  }
  return true; // 삭제 성공 시 true 반환
}

export async function deleteMessage(id) {
  const response = await fetch(`${API_BASE}/messages/${id}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("메시지를 삭제하는데 실패했습니다");
  }
  return true; // 삭제 성공 시 true 반환
}

export async function getReactions(id) {
  const response = await fetch(`${API_BASE}/recipients/${id}/reactions/`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

export async function postReactions(id, data) {
  const response = await fetch(`${API_BASE}/recipients/${id}/reactions/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("데이터를 생성하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

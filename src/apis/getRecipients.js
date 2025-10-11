const API_BASE = "https://rolling-api.vercel.app/19-2";

export async function getRecipients() {
  const response = await fetch(`${API_BASE}/recipients/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API 요청 실패: ${response.status} ${text}`);
  }

  const data = await response.json();

  // 서버 API 데이터를 UI용 데이터로 매핑함
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

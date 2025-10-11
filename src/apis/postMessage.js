export const postMessage = async ({
  team,
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
}) => {
  try {
    const res = await fetch(
      `https://rolling-api.vercel.app/${team}/recipients/${recipientId}/messages/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          team,
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
};

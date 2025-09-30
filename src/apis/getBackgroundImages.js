export async function getBackgroundImages() {
  try {
    const response = await fetch(
      "https://rolling-api.vercel.app/background-images/",
      { method: "GET" }
    );
    if (!response.ok) {
      throw new Error("API 응답 없음");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}

// import React from "react";
import RollingSlider from "@/pages/List/components/RollingSlider";
import Button from "@/components/ui/Button";

function Components1() {
  // 샘플 아바타 데이터
  const avatars = [
    { id: 1, src: "/avatars/user1.png", alt: "유저1", color: "#FF6B6B" },
    { id: 2, src: "/avatars/user2.png", alt: "유저2", color: "#4ECDC4" },
    { id: 3, src: "/avatars/user3.png", alt: "유저3", color: "#FFD93D" },
    { id: 4, src: "/avatars/user4.png", alt: "유저4", color: "#1A535C" },
  ];

  // 샘플 리액션 데이터
  const reactions = [
    { emoji: "👍", count: 20 },
    { emoji: "😍", count: 12 },
    { emoji: "😢", count: 7 },
  ];

  // 샘플 카드 데이터
  const cards = [
    { id: 1, title: "To. Sowon", avatars, count: 30, reactions },
    { id: 2, title: "To. Sihyun", avatars, count: 15, reactions },
    { id: 3, title: "To. Jungdae", avatars, count: 22, reactions },
    { id: 4, title: "To. Narae", avatars, count: 14, reactions },
    { id: 5, title: "To. Jerry", avatars, count: 22, reactions },
  ];

  return (
    <div>
      <br />
      <br />
      {/* RollingSlider 테스트 */}
      <RollingSlider cards={cards} />
      <br />
      <br />
      <br />

      {/* 버튼 테스트 */}
      <h1 style={{ marginTop: "40px" }}>버튼 테스트</h1>
      {/* Large */}
      <h2>Large (56px)</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <Button label="Primary Large" size="lg" variant="primary" />
        <Button label="Outline Large" size="lg" variant="outline" />
        <Button
          label="Outline Purple Large"
          size="lg"
          variant="outline--purple"
        />
        <Button label="Disabled Large" size="lg" variant="primary" disabled />
      </div>
      {/* Medium 버튼 테스트 */}
      <h2>Medium (40px)</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <Button label="Primary Medium" size="md" variant="primary" />
        <Button label="Outline Medium" size="md" variant="outline" />
        <Button label="Disabled Medium" size="md" variant="outline" disabled />
      </div>
      {/* Small 버튼 테스트 */}
      <h2>Small (36px)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button label="Outline Small" size="sm" variant="outline" />
        <Button label="Disabled Small" size="sm" variant="outline" disabled />
      </div>
      {/* Extra Small 버튼 테스트 */}
      <h2>Extra Small (28px)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button label="Extra Small" size="xs" variant="outline" />
        <Button label="Disabled XS" size="xs" variant="outline" disabled />
      </div>
      {/* Icon-only (Square) */}
      <h2>Only Icon (Square)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button icon="delete" size="md" variant="outline" />
        <Button icon="delete" size="md" variant="outline" disabled />
      </div>
      {/* Icon-only (Rectangle) */}
      <h2>Only Icon (Rectangle)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button
          icon="share"
          size="md"
          variant="outline"
          className="btn--icon-box"
        />
        <Button
          icon="share"
          size="md"
          variant="outline"
          className="btn--icon-box"
          disabled
        />
      </div>
      {/* Icon + Label(텍스트) */}
      <h2>Icon + Label</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button icon="emoji" label="추가" size="sm" variant="outline" />
        <Button
          icon="emoji"
          label="추가"
          size="sm"
          variant="outline"
          disabled
        />
      </div>
    </div>
  );
}

export default Components1;

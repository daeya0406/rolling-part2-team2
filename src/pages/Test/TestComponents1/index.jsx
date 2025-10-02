import React from "react";
import Button from "../../../components/ui/Button";
import Header from "../../../components/Header";
import RollingCard from "../../../components/ui/RollingCard";

/* RollingCard 테스트용 더미 데이터 */
function Components1() {
  const avatars = [
    { id: 1, src: "/avatars/user1.png", alt: "유저1", color: "#FF6B6B" },
    { id: 2, src: "/avatars/user2.png", alt: "유저2", color: "#4ECDC4" },
    { id: 3, src: "/avatars/user3.png", alt: "유저3", color: "#FFD93D" },
    { id: 4, src: "/avatars/user4.png", alt: "유저4", color: "#1A535C" },
  ];
  const cards = [
    {
      id: 1,
      title: "To. Sowon",
      avatars,
      count: 30,
      reactions: [
        { id: 1, emoji: "👍", count: 20 },
        { id: 2, emoji: "😍", count: 12 },
        { id: 3, emoji: "😢", count: 7 },
      ],
    },
  ];

  return (
    <div>
      <h1>RollingCard 테스트</h1>
      <RollingCard
        title={cards[0].title}
        avatars={cards[0].avatars}
        count={cards[0].count}
        reactions={cards[0].reactions}
      />

      <br />

      {/* 버튼 테스트 영역 */}
      <h1>버튼 테스트</h1>

      <h2>Large (56px)</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <Button label="Primary Large" size="lg" variant="primary" />
        <Button label="Outline Large" size="lg" variant="outline" />
        <Button label="Disabled Large" size="lg" variant="primary" disabled />
      </div>

      <h2>Medium (40px)</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
        <Button label="Outline Medium" size="md" variant="primary" />
        <Button label="Outline Medium" size="md" variant="outline" />
        <Button label="Disabled Medium" size="md" variant="outline" disabled />
      </div>

      <h2>Small (36px)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button label="Outline Small" size="sm" variant="outline" />
        <Button label="Disabled Small" size="sm" variant="outline" disabled />
      </div>

      <h2>Extra Small (28px)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button label="Extra Small" size="xs" variant="outline" />
        <Button label="Extra Small" size="xs" variant="outline" disabled />
      </div>

      <h2>Only Icon (+ square)</h2>
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
        <Button icon="delete" size="md" variant="outline" />
        <Button icon="delete" size="md" variant="outline" disabled />
      </div>

      <h2>Only Icon (+ rectangle)</h2>
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

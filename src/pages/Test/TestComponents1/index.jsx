import React from "react";
import Button from "../../../components/ui/Button";

function Components1() {
  return (
    <div style={{ padding: "40px" }}>
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
        <Button icon="emoji" label="추가" size="sm" variant="outline" disabled />
      </div>
    </div>
  );
}

export default Components1;

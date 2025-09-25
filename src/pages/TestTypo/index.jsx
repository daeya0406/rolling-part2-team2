import "./style.scss";

export default function TypoPage() {
  return (
    <section className="typo-spec">
      <h1 style={{ marginBottom: 16 }}>Typography Spec</h1>

      <div className="row">
        <div className="label">
          <div className="label-font">Font / 28 - 700</div>
          <div className="label-font muted">Font / 28 - 400</div>
        </div>
        <div className="samples">
          <div className="line sample-28-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-28-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      <div className="row">
        <div className="label">
          <div className="label-font">Font / 24 - 700</div>
          <div className="label-font muted">Font / 24 - 400</div>
        </div>
        <div className="samples">
          <div className="line sample-24-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-24-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 필요하면 20, 18, 16, 15, 14, 12도 동일하게 추가 */}
    </section>
  );
}

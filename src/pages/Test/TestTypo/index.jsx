import { useState } from "react";
import "./style.scss";

/** 클릭 시 text를 클립보드로 복사하는 버튼 */
function CodeCopy({ text, className = "", muted = false }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // 구형 브라우저 fallback
        const ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // 실패해도 에러 던지지 않고 조용히 무시
    }
  };

  return (
    <button
      type="button"
      className={`label-font ${muted ? "muted" : ""} ${className}`}
      onClick={copy}
      title="클릭하여 복사"
      aria-label={`"${text}" 복사`}
    >
      {text}
      {copied ? (
        <span className="copy-indicator" aria-live="polite" aria-atomic="true">
          ✓ 복사됨
        </span>
      ) : (
        ""
      )}
    </button>
  );
}

export default function TypoPage() {
  return (
    <section className="typo-spec">
      <h1 style={{ marginBottom: 16 }}>Typography Spec</h1>

      {/* 28 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 28 - Bold</div>
          <div className="label-font muted">Font / 28 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(28, 700);" />
          <CodeCopy text="@include typo(28, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-28-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-28-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 24 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 24 - Bold</div>
          <div className="label-font muted">Font / 24 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(24, 700);" />
          <CodeCopy text="@include typo(24, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-24-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-24-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 20 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 20 - Bold</div>
          <div className="label-font muted">Font / 20 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(20, 700);" />
          <CodeCopy text="@include typo(20, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-20-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-20-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 18 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 18 - Bold</div>
          <div className="label-font muted">Font / 18 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(18, 700);" />
          <CodeCopy text="@include typo(18, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-18-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-18-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 16 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 16 - Bold</div>
          <div className="label-font muted">Font / 16 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(16, 700);" />
          <CodeCopy text="@include typo(16, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-16-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-16-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 15 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 15 - Bold</div>
          <div className="label-font muted">Font / 15 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(15, 700);" />
          <CodeCopy text="@include typo(15, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-15-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-15-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 14 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 14 - Bold</div>
          <div className="label-font muted">Font / 14 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(14, 700);" />
          <CodeCopy text="@include typo(14, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-14-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-14-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>

      {/* 12 */}
      <div className="row">
        <div className="label">
          <div className="label-font">Font / 12 - Bold</div>
          <div className="label-font muted">Font / 12 - Regular</div>
        </div>
        <div className="label">
          <CodeCopy text="@include typo(12, 700);" />
          <CodeCopy text="@include typo(12, 400);" muted />
        </div>
        <div className="samples">
          <div className="line sample-12-700">가나다라마바사아자차카타파하</div>
          <div className="line sample-12-400">가나다라마바사아자차카타파하</div>
        </div>
      </div>
    </section>
  );
}

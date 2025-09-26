import { useEffect } from "react";
import "./style.scss";

export default function ColorPage() {
  useEffect(() => {
    const swatches = document.querySelectorAll(".swatch");

    swatches.forEach((el) => {
      el.addEventListener("click", () => {
        const text = el.getAttribute("data-var");
        navigator.clipboard.writeText(`var(${text})`).then(() => {
          // 선택 효과 토글
          swatches.forEach((s) => s.classList.remove("selected"));
          el.classList.add("selected");

          // 피드백
          console.log(`Copied: var(${text})`);
        });
      });
    });

    // cleanup (리액트 unmount 시 이벤트 제거)
    return () => {
      swatches.forEach((el) => {
        el.replaceWith(el.cloneNode(true)); // 이벤트 리스너 초기화
      });
    };
  }, []);

  return (
    <div className="palette">
      <section className="group">
        <h3>Purple</h3>
        <div className="row">
          <div
            className="swatch bg--c-purple100"
            data-var="--c-purple100"
          ></div>
          <div
            className="swatch bg--c-purple200"
            data-var="--c-purple200"
          ></div>
          <div
            className="swatch bg--c-purple300"
            data-var="--c-purple300"
          ></div>
          <div
            className="swatch bg--c-purple400"
            data-var="--c-purple400"
          ></div>
          <div
            className="swatch bg--c-purple500"
            data-var="--c-purple500"
          ></div>
          <div
            className="swatch bg--c-purple600"
            data-var="--c-purple600"
          ></div>
          <div
            className="swatch bg--c-purple700"
            data-var="--c-purple700"
          ></div>
          <div
            className="swatch bg--c-purple800"
            data-var="--c-purple800"
          ></div>
          <div
            className="swatch bg--c-purple900"
            data-var="--c-purple900"
          ></div>
        </div>
      </section>

      <section className="group">
        <h3>Beige</h3>
        <div className="row">
          <div className="swatch bg--c-beige100" data-var="--c-beige100"></div>
          <div className="swatch bg--c-beige200" data-var="--c-beige200"></div>
          <div className="swatch bg--c-beige300" data-var="--c-beige300"></div>
          <div className="swatch bg--c-beige400" data-var="--c-beige400"></div>
          <div className="swatch bg--c-beige500" data-var="--c-beige500"></div>
        </div>
      </section>

      <section className="group">
        <h3>Blue</h3>
        <div className="row">
          <div className="swatch bg--c-blue100" data-var="--c-blue100"></div>
          <div className="swatch bg--c-blue200" data-var="--c-blue200"></div>
          <div className="swatch bg--c-blue300" data-var="--c-blue300"></div>
          <div className="swatch bg--c-blue400" data-var="--c-blue400"></div>
          <div className="swatch bg--c-blue500" data-var="--c-blue500"></div>
        </div>
      </section>

      <section className="group">
        <h3>Green</h3>
        <div className="row">
          <div className="swatch bg--c-green100" data-var="--c-green100"></div>
          <div className="swatch bg--c-green200" data-var="--c-green200"></div>
          <div className="swatch bg--c-green300" data-var="--c-green300"></div>
          <div className="swatch bg--c-green400" data-var="--c-green400"></div>
          <div className="swatch bg--c-green500" data-var="--c-green500"></div>
        </div>
      </section>

      <section className="group">
        <h3>Grayscale</h3>
        <div className="row">
          <div className="swatch bg--c-gray100" data-var="--c-gray100"></div>
          <div className="swatch bg--c-gray200" data-var="--c-gray200"></div>
          <div className="swatch bg--c-gray300" data-var="--c-gray300"></div>
          <div className="swatch bg--c-gray400" data-var="--c-gray400"></div>
          <div className="swatch bg--c-gray500" data-var="--c-gray500"></div>
          <div className="swatch bg--c-gray600" data-var="--c-gray600"></div>
          <div className="swatch bg--c-gray700" data-var="--c-gray700"></div>
          <div className="swatch bg--c-gray800" data-var="--c-gray800"></div>
          <div className="swatch bg--c-gray900" data-var="--c-gray900"></div>
        </div>
      </section>

      <section className="group utilities">
        <div>
          <h4>White</h4>
          <div
            className="swatch bg--c-white outline"
            data-var="--c-white"
          ></div>
        </div>
        <div>
          <h4>Black</h4>
          <div className="swatch bg--c-black" data-var="--c-black"></div>
        </div>
        <div>
          <h4>Error</h4>
          <div className="swatch bg--c-error" data-var="--c-error"></div>
        </div>
        <div>
          <h4>Surface</h4>
          <div className="swatch bg--c-surface" data-var="--c-surface"></div>
        </div>
      </section>

      <section className="group test">
        <h3>SCSS에서 사용</h3>
        <p>
          공통 부분이 많을 때 유용( var(--c-*) 사용, 위 색상 클릭 시 해당 색상이
          복사됨)
        </p>
        <div className="row vertical">
          <p className="scoped-typo">SCSS에서 color: var(--c-gray700)</p>
          <button className="scoped-btn">SCSS에서 bg: var(--c-green500)</button>
          <div className="scoped-card">border: 1px solid var(--c-gray300)</div>
        </div>
      </section>

      <section className="group test">
        <h3>HTML 태그 안에 클래스 사용</h3>
        <p>공통 부분이 많지 않을 때 유용 (.bg--c-*, .text--c-*)</p>
        <div className="row vertical">
          <p className="text--c-purple600">.text--c-purple600</p>
          <button className="bg--c-purple600 text--c-white demo-btn">
            .bg--c-purple600 .text--c-white
          </button>
          <div className="bg--c-surface text--c-gray800 demo-box">
            .bg--c-surface .text--c-gray800
          </div>
        </div>
      </section>
    </div>
  );
}

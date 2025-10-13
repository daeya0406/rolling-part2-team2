import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import point01Image from "@/assets/images/main/main-point01.png";
import point02Image from "@/assets/images/main/main-point02.png";
import "./style.scss";

function MainPage() {
  const navigate = useNavigate();
  return (
    <main className="main">
      {/* Point.01 롤링페이퍼 소개 */}
      <section className="content__section">
        <div className="content__wrapper">
          <div className="content__badge">Point.01</div>

          {/* Point.01 텍스트 영역 */}
          <h1 className="content__title">
            누구나 손쉽게, 온라인 <br className="visible__br" /> 롤링 페이퍼를
            만들 수 있어요
          </h1>
          <p className="content__description">로그인 없이 자유롭게 만들어요.</p>
        </div>

        {/* Point.01 이미지 영역 */}
        <div className="content__image">
          <img src={point01Image} alt="롤링페이퍼 소개 이미지" />
        </div>
      </section>

      {/* Point.02 롤링페이퍼 기능 소개 */}
      <section className="content__section content__section--reverse">
        {/* Point.02 이미지 영역 */}
        <div className="content__image">
          <img src={point02Image} alt="이모지 반응 기능 이미지" />
        </div>

        <div className="content__wrapper">
          <div className="content__badge">Point.02</div>

          {/* Point.02 텍스트 영역 */}
          <h1 className="content__title">
            서로에게 이모지로 감정을 <br className="visible__br" />{" "}
            <span>표현해보세요</span>
          </h1>
          <p className="content__description">
            롤링 페이퍼에 이모지를 추가할 수 있어요.
          </p>
        </div>
      </section>

      <Button
        label="구경해보기"
        size="lg"
        variant="primary"
        onClick={() => navigate("/list")}
      />
    </main>
  );
}

export default MainPage;

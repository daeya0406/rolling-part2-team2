import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipients } from "../../apis/getRecipients";
import RollingSlider from "../../components/ui/RollingSlider";
import Button from "../../components/ui/Button";
import "./style.scss";

function List() {
  const navigate = useNavigate(); // 페이지 이동 함수
  const [popularRecipients, setPopularRecipients] = useState([]); // 인기 롤링페이퍼 데이터
  const [recentRecipients, setRecentRecipients] = useState([]); // 최신 롤링페이퍼 데이터

  useEffect(() => {
    getRecipients(2)
      .then((cards) => {
        // 인기순은 작성자 카운트 순으로 정렬함
        const popular = [...cards].sort((a, b) => b.count - a.count);

        // 최신 생성일 순으로 정렬함
        const recent = [...cards].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // 상태값에 저장해서 화면에 새로 랜더링 함
        setPopularRecipients(popular);
        setRecentRecipients(recent);
      })

      // 에러 나면 콘솔 표시
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="list">
      {/* 인기 롤링페이퍼 영역 */}
      <section className="list__section">
        <h2 className="list__title">인기 롤링 페이퍼 🔥</h2>
        <RollingSlider cards={popularRecipients} />
      </section>

      {/* 최근 롤링페이퍼 영역 */}
      <section className="list__section">
        <h2 className="list__title">최근에 만든 롤링 페이퍼 ⭐️️</h2>
        <RollingSlider cards={recentRecipients} />
      </section>

      {/* 새로운 롤링페이퍼 만들기 영역 */}
      <div className="list__bottom">
        <Button
          className="list__button"
          label="나도 만들어 보기"
          size="lg"
          variant="primary"
          onClick={() => navigate("/post")} // 버튼 클릭 시 /post 페이지로 이동
        />
      </div>
    </main>
  );
}

export default List;

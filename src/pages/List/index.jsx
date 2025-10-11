import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getRecipients } from "@/apis/getRecipients";
import RollingSlider from "@/pages/List/components/RollingSlider";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import "./style.scss";

function List() {
  const navigate = useNavigate(); // 페이지 이동 함수
  const location = useLocation(); // 현재 location 정보
  const [popularRecipients, setPopularRecipients] = useState([]); // 인기 롤링페이퍼 데이터
  const [recentRecipients, setRecentRecipients] = useState([]); // 최신 롤링페이퍼 데이터
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    // 로딩 시작
    setIsLoading(true);

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
      .catch((err) => console.error(err))
      .finally(() => {
        // 로딩 완료
        setIsLoading(false);
      });
  }, [location.key]); // location.key를 의존성으로 추가하여 뒤로가기 시에도 재실행

  return (
    <main className="list">
      {isLoading ? (
        <div className="list__loading-overlay">
          <Loading size="lg" />
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}

export default List;

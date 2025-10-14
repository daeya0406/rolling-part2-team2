import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRecipients } from "@/apis";
import RollingSlider from "@/pages/List/components/RollingSlider";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import { showToast } from "@/components/ui/Toast";
import "./style.scss";

function List() {
  const navigate = useNavigate(); 
  const [popularRecipients, setPopularRecipients] = useState([]); 
  const [recentRecipients, setRecentRecipients] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    // sessionStorage에서 toast 정보 확인
    const toastInfo = sessionStorage.getItem("toastInfo");

    if (toastInfo) {
      try {
        const { show, message, type } = JSON.parse(toastInfo);

        if (show) {
          showToast(message, { type });
          // toast 표시 후 sessionStorage에서 제거
          sessionStorage.removeItem("toastInfo");
        }
      } catch (error) {
        console.error("Toast 정보 파싱 오류:", error);
        sessionStorage.removeItem("toastInfo");
      }
    }

    getRecipients(999, 0) // limit=999, offset=0으로 모든 수신자 조회
      .then((cards) => {
        // 인기순은 작성자 카운트 순으로 정렬
        const popular = [...cards].sort((a, b) => b.count - a.count);

        // 최신 생성일 순으로 정렬
        const recent = [...cards].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // 상태값에 저장해서 화면에 새로 랜더링
        setPopularRecipients(popular);
        setRecentRecipients(recent);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="list">
      {/* 인기 롤링페이퍼 영역 */}
      <section className="list__section">
        <h2 className="list__title">인기 롤링 페이퍼 🔥</h2>
        {isLoading ? (
          <div className="list__loading-placeholder">
            <Loading size="lg" />
          </div>
        ) : (
          <RollingSlider cards={popularRecipients} />
        )}
      </section>

      {/* 최근 롤링페이퍼 영역 */}
      <section className="list__section">
        <h2 className="list__title">최근에 만든 롤링 페이퍼 ⭐️️</h2>
        {isLoading ? (
          <div className="list__loading-placeholder">
            <Loading size="lg" />
          </div>
        ) : (
          <RollingSlider cards={recentRecipients} />
        )}
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

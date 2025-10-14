import { useRef, useEffect } from "react";

// Swiper 컴포넌트 및 네비게이션/페이지네이션 모듈
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 프로젝트 내부 컴포넌트 및 스타일
import Icon from "@/components/ui/Icon";
import RollingCard from "./RollingCard";
import "./RollingSlider.scss";

function RollingSlider({ cards = [] }) {
  // Swiper 인스턴스 및 버튼 DOM 참조
  const swiperRef = useRef(null); 
  const prevBtnRef = useRef(null); 
  const nextBtnRef = useRef(null); 


  const updateSliderState = (swiper) => {
    if (!swiper) return;

    let end = swiper.isEnd;

    // slidesPerView: 'auto'일 때 isEnd가 제대로 감지되지 않는 경우를 위한 추가 체크
    if (!end && swiper.wrapperEl) {
      const swiperWrapper = swiper.wrapperEl;
      const swiperWidth = swiper.width;
      const wrapperWidth = swiperWrapper.scrollWidth;
      const currentTranslate = Math.abs(swiper.translate);

      // 현재 이동된 거리가 전체 너비에서 뷰포트 너비를 뺀 값과 거의 같으면 마지막
      end = currentTranslate >= wrapperWidth - swiperWidth - 10; // 10px 여유값
    }
  };

  // PC 기준 한 화면에 4개까지 보이므로, 카드가 4개 초과일 때만 버튼 표시
  const showNav = cards.length > 4;

  // 화면 좌우 값 리사이즈 시 Swiper 현재 페이지 유지 (리사이징 대응)
  useEffect(() => {
    const handleResize = () => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      const currentIndex = swiper.activeIndex;
      swiper.update(); 
      swiper.slideTo(currentIndex, 0); // 같은 페이지로 복귀 (즉시 이동)

      // 네비/페이지네이션 상태도 최신으로 동기화
      if (swiper.navigation && swiper.navigation.update) {
        swiper.navigation.update();
      }
      if (swiper.pagination && swiper.pagination.update) {
        swiper.pagination.update();
      }

      // 리사이즈 후 상태 업데이트
      setTimeout(() => {
        updateSliderState(swiper);
      }, 100);
    };

    // 컴포넌트가 처음 실행할 때 resize 이벤트를 등록하고 사라질 때 자동으로 해제함
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="rolling-slider">
      {/* Swiper : 카드들을 슬라이드 형태로 보여주는 영역 */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;

          // 초기 상태 설정
          updateSliderState(swiper);
          setTimeout(() => {
            // swiper 인스턴스와 필요한 속성들이 모두 존재하는지 확인
            if (
              swiper &&
              swiper.navigation &&
              swiper.params &&
              swiper.params.navigation &&
              prevBtnRef.current &&
              nextBtnRef.current
            ) {
              try {
                swiper.params.navigation.prevEl = prevBtnRef.current;
                swiper.params.navigation.nextEl = nextBtnRef.current;

                //네비게이션 기능 초기화 및 상태 업데이트
                swiper.navigation.init();
                swiper.navigation.update();
              } catch (error) {
                console.warn("Navigation initialization failed:", error);
              }
            }

            // 상태 재확인
            updateSliderState(swiper);
          }, 0);
        }}
        //사용 모듈 설정
        modules={[Navigation, Pagination]}
        onSlideChange={(swiper) => {
          updateSliderState(swiper);
        }}
        onTransitionEnd={(swiper) => {
          // 트랜지션 완료 후에도 상태 재확인
          updateSliderState(swiper);
        }}
        onTouchEnd={(swiper) => {
          updateSliderState(swiper);
        }}
        slidesOffsetBefore={20}
        slidesOffsetAfter={20}
        // 기본 동작 및 옵션 설정
        navigation={{
          prevEl: prevBtnRef.current,
          nextEl: nextBtnRef.current,
        }}
        centerInsufficientSlides={false}
        observer={true}
        observeParents={true}
        slidesPerGroupSkip={0}
        pagination={false}
        spaceBetween={12}
        speed={700}
        loop={false}
        slidesPerGroup={1}
        watchOverflow={true}
        watchSlidesProgress={true}
        resistanceRatio={0}
        edgeSwipeDetection={true}
        allowTouchMove={true}
        slidesPerView="auto" 
        // 반응형 구간별 한 화면 카드 수 설정
        breakpoints={{
          479: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
          },
          480: {
            slidesOffsetBefore: 24,
            slidesOffsetAfter: 24,
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          1249: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        }}
      >
        {/* 카드 리스트 렌더링 */}
        {cards.map((card, index) => (
          <SwiperSlide key={`${card.id}-${card.bgColor}-${index}`}>
            <RollingCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 카드가 한 화면에 다 들어가지 않을 때만 버튼 표시 */}
      {showNav && (
        <>
          <div ref={prevBtnRef} className="custom-prev">
            <Icon name="arrowLeft" size={50} />
          </div>
          <div ref={nextBtnRef} className="custom-next">
            <Icon name="arrowRight" size={50} />
          </div>
        </>
      )}
    </div>
  );
}

export default RollingSlider;

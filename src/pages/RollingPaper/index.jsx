import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import "./style.scss";
import HeaderService from "@/pages/RollingPaper/components/HeaderService";
import MessageList from "@/pages/RollingPaper/components/MessageList";
import Loading from "@/components/ui/Loading";
import Warn from "@/components/ui/Warn";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";
import {
  getRollingPapersbackgroundData,
  getRollingPapers,
  getReactions,
  postReactions,
  deleteRollingPaper,
} from "@/apis/api";
import useAsync from "@/hooks/useAsync";

function RollingPaper() {
  const { id: rawId } = useParams(); // URL에서 ID 추출
  // ID 값에서 불필요한 슬래시 제거
  const id = rawId?.replace(/\/+$/, ""); // 끝에 있는 슬래시들 제거
  const navigate = useNavigate(); // 페이지 이동용

  const [rollingPapers, setRollingPapers] = useState(null); // API 데이터 상태
  const [backgroundData, setBackgroundData] = useState(null); // 배경 데이터 상태
  const [reactionEmojis, setReactionEmojis] = useState(null); // 반응 이모지 데이터
  const [isInitialized, setIsInitialized] = useState(false); // 초기 데이터 로딩 완료 여부
  const [_isLoading, error, getRollingPapersAsync] = useAsync(getRollingPapers);
  const [_isBackgroundLoading, backgroundError, getBackgroundAsync] = useAsync(
    getRollingPapersbackgroundData
  );
  const [_isReactionLoading, reactionError, getReactionAsync] =
    useAsync(getReactions);
  const [_isPostReactionLoading, postReactionError, postReactionAsync] =
    useAsync(postReactions);
  const location = useLocation();
  const currentPath = location.pathname;
  const isPostEditPage = currentPath.includes("/edit");

  const kakaoAppKey = import.meta.env.VITE_KAKAO_APP_KEY;

  // 페이지 마운트 시 초기화 및 API 호출
  useEffect(() => {
    // 현재 body의 overflow-x 값 저장
    const originalOverflowX = document.body.style.overflowX;

    // 가로 스크롤 방지 적용
    document.body.style.overflowX = "hidden";

    // 카카오 SDK 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    // API 호출 - useAsync를 사용하므로 try-catch 불필요
    if (id) {
      // 모든 API를 병렬로 호출하고 완료를 기다림
      Promise.allSettled([
        getRollingPapersAsync(id).then((data) => {
          if (data) {
            setRollingPapers(data);
          }
        }),
        getBackgroundAsync(id).then((rollingPaperData) => {
          if (rollingPaperData) {
            // 전체 롤링페이퍼 데이터를 backgroundData에 저장
            setBackgroundData(rollingPaperData);
          }
        }),
        getReactionAsync(id).then((reactionData) => {
          if (reactionData) {
            setReactionEmojis(reactionData);
          }
        }),
      ]).finally(() => {
        // 모든 API 호출이 완료되면(성공/실패 무관) 초기화 완료로 설정
        setIsInitialized(true);
      });
    }

    // 컴포넌트 언마운트 시 원래 값으로 복원
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      document.body.style.overflowX = originalOverflowX;
    };
  }, [id, getRollingPapersAsync, getBackgroundAsync, getReactionAsync]);

  // HeaderService 컴포넌트용 이벤트 핸들러
  const handleEmojiClick = async (emojiData) => {
    //console.log("선택된 이모지:", emojiData.emoji);

    // JSON 데이터 생성
    const requestData = {
      emoji: emojiData.emoji,
      type: "increase",
    };

    // useAsync를 사용하여 이모지 반응을 서버에 전송
    const result = await postReactionAsync(id, requestData);

    if (result) {
      showToast("추가되었습니다!", { type: "success" });
      // 반응 데이터를 다시 가져와서 업데이트
      const updatedReactions = await getReactionAsync(id);
      if (updatedReactions) {
        setReactionEmojis(updatedReactions);
      }

      // 롤링페이퍼 정보도 다시 가져와서 topReactions 업데이트
      const updatedRollingPaper = await getBackgroundAsync(id);
      if (updatedRollingPaper) {
        setBackgroundData(updatedRollingPaper);
      }
    }
  };

  const handleKakaoShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(kakaoAppKey);
      }
      window.Kakao.Share.sendCustom({
        templateId: 124671,
      });
    }
  };

  const handleUrlShare = () => {
    // console.log("URL 공유");
    const currentUrl = "https://github.com/daeya0406/rolling-part2-team2";
    navigator.clipboard.writeText(currentUrl).then(() => {
      showToast("URL이 복사 되었습니다!", { type: "success" });
    });
  };

  const handleDeleteRollingPaper = async (id) => {
    // 삭제 확인 대화상자
    const isConfirmed = window.confirm(
      "롤링페이퍼를 정말 삭제하시겠습니까?\n삭제된 롤링페이퍼는 복구할 수 없습니다."
    );

    if (!isConfirmed) {
      return; // 사용자가 취소한 경우
    }

    const result = await deleteRollingPaper(id);
    if (result) {
      // 삭제 성공 정보를 sessionStorage에 저장
      sessionStorage.setItem(
        "toastInfo",
        JSON.stringify({
          show: true,
          message: "롤링페이퍼가 삭제되었습니다.",
          type: "success",
        })
      );

      // 즉시 페이지 이동
      navigate("/list");
    } else {
      showToast("롤링페이퍼 삭제 중 오류가 발생했습니다.", { type: "error" });
    }
  };

  // 모든 에러를 하나로 통합
  const hasError =
    error || backgroundError || reactionError || postReactionError;

  // 404 에러인지 확인 (존재하지 않는 롤링페이퍼)
  const isNotFound =
    (error && (error.status === 404 || error.message?.includes("404"))) ||
    (backgroundError &&
      (backgroundError.status === 404 ||
        backgroundError.message?.includes("404")));

  return (
    <div className="RollingPaper-page-wrapper">
      {/* 초기 로딩 중일 때만 로딩 표시 */}
      {!isInitialized && (
        <div className="rolling-paper--initial-loading">
          <Loading size="lg" className="rendering-loading" />
        </div>
      )}

      {/* 404 에러 발생 시 */}
      {isNotFound && (
        <div className="not-found-wrapper">
          <Warn
            variant="big"
            title="존재하지 않는 롤링페이퍼에요."
            description="올바른 주소가 맞는지 다시 한 번 확인해 주세요."
          />
          <div className="error-actions">
            <Link to="/">
              <Button variant="primary" size="lg" label="홈으로 가기" />
            </Link>
          </div>
        </div>
      )}

      {/* 기타 에러 발생 시 (404가 아닌 경우) */}
      {hasError && !isNotFound && (
        <div className="error-wrapper">
          <Warn
            variant="big"
            title="오류가 발생했습니다."
            description="잠시 후 다시 시도해 주세요."
          />
          <div className="error-actions">
            <Button
              variant="primary"
              size="lg"
              label="새로고침"
              onClick={() => window.location.reload()}
            />
          </div>
        </div>
      )}

      {/* 초기화 완료 후 컨텐츠 렌더링 */}
      {isInitialized && !isNotFound && (
        <>
          {/* 서비스 헤더 부분 */}
          <HeaderService
            rollingPaper={backgroundData}
            reactionEmojis={reactionEmojis?.results || []}
            toId={id}
            isPostEditPage={isPostEditPage}
            onEmojiClick={handleEmojiClick}
            onKakaoShare={handleKakaoShare}
            onUrlShare={handleUrlShare}
          />
          {/* 메세지 리스트 부분 */}
          <div
            className="message-list-wrapper"
            style={{
              "--bg-image": backgroundData?.backgroundImageURL
                ? `url(${backgroundData.backgroundImageURL})`
                : "none",
              "--bg-color": backgroundData?.backgroundColor
                ? `var(--c-${backgroundData.backgroundColor}200)`
                : "transparent",
              "--bg-overlay": backgroundData?.backgroundImageURL
                ? "rgba(0, 0, 0, 0.50)"
                : "transparent",
            }}
          >
            <MessageList
              messages={rollingPapers?.results || []}
              toId={id}
              isPostEditPage={isPostEditPage}
              isInitialized={isInitialized}
              onDeleteRollingPaper={handleDeleteRollingPaper}
              onRefreshMessages={async () => {
                // 메시지 목록과 헤더 정보를 동시에 새로고침
                const [messagesData, backgroundDataResult] = await Promise.all([
                  getRollingPapersAsync(id),
                  getBackgroundAsync(id),
                ]);

                if (messagesData) {
                  setRollingPapers(messagesData);
                }

                if (backgroundDataResult) {
                  setBackgroundData(backgroundDataResult);
                }
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default RollingPaper;

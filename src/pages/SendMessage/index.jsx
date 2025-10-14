import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProfileImages, postMessage } from "@/apis";
import ReactQuill from "react-quill-new"; // 텍스트 편집기 ReactQuill 라이브러리
import "react-quill-new/dist/quill.snow.css";

import "./style.scss";
import InputText from "../../components/ui/InputText";
import SelectRelation from "./components/SelectRelation";
import Avatar from "@/components/ui/Avatar";
import DefaultAvatar from "@/assets/images/common/default-avatar.svg";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";
import { showToast } from "@/components/ui/Toast";

// 메시지 보내기 페이지
export default function SendMessage() {
  const [relation, setRelation] = useState("지인"); // 관계 선택
  const [selectedFont, setSelectedFont] = useState("Noto Sans"); // 폰트 선택
  const [profileImages, setProfileImages] = useState([]); // 프로필 이미지 리스트
  const [profileImage, setProfileImage] = useState(""); // 선택된 이미지
  const [loading, setLoading] = useState(true); // 이미지 로딩 상태
  const [loadedImages, setLoadedImages] = useState([]); // 로드 된 이미지
  const [value, setValue] = useState(""); // 메세지 내용
  const [sender, setSender] = useState(""); // 보낸사람 이름
  const [nameTouched, setNameTouched] = useState(false); // 이름 입력 여부

  const navigate = useNavigate();
  const { id: recipientId } = useParams(); // URL에서 수신자 ID

  // 프로필 이미지 가져오기
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getProfileImages();
        setProfileImages(images);

        if (!profileImage && images.length > 0) {
          setProfileImage(images[0]);
        }
      } catch (err) {
        console.error("이미지 요청 에러:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // 폼 제출
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postMessage({
        //team,
        recipientId,
        sender,
        profileImageURL: profileImage,
        relationship: relation,
        content: value,
        font: selectedFont,
      });
      showToast("메세지 전송 완료!", { type: "success" });
      navigate(`/post/${recipientId}`, { replace: true });
    } catch (err) {
      console.error("postMessage 에러:", err);
      showToast("메세지 전송 실패", { type: "error" });
    }
  };

  // 이름 유효성 체크
  const MAX_NAME_LEN = 20;
  const trimmedName = sender.trim();
  const isNameValid =
    trimmedName.length > 0 && trimmedName.length <= MAX_NAME_LEN;
  const showNameError = nameTouched && !isNameValid;
  const handleNameBlur = () => setNameTouched(true);
  const handleNameFocus = () => {
    if (nameTouched) setNameTouched(false);
  };

  // ReactQuill 내용 체크 (빈 텍스트 제거)
  const plainText = value.replace(/<(.|\n)*?>/g, "").replace(/\s/g, ""); // 태그 제거 후 확인 필요
  const isMessageValid = plainText.length > 0;

  return (
    <form className="write-wrap" onSubmit={handleSubmit}>
      {/* 이름 입력 */}
      <section>
        <h2>From.</h2>
        <InputText
          id="fromName"
          placeholder="이름을 입력해 주세요"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
          error={showNameError}
        />
      </section>

      {/* 프로필 이미지 선택 */}
      <section>
        <h2>프로필 이미지</h2>
        <div className="profile-images-wrap">
          <Avatar
            src={profileImage || DefaultAvatar}
            alt={sender || "Anonymous"}
            size="profile"
          />
          <div className="profile-images">
            <p>프로필 이미지를 선택해주세요!</p>
            <div className="profile-images--list">
              {loading
                ? [...Array(4)].map((_, idx) => (
                    <div className="profile-thumb loading" key={idx}>
                      <Loading size="sm" />
                    </div>
                  ))
                : profileImages.map((url, idx) => {
                    const isLoaded = loadedImages.includes(url);
                    return (
                      <div className="profile-thumb-wrapper" key={url || idx}>
                        <img
                          src={url}
                          alt={`프로필 ${idx}`}
                          className={`profile-thumb ${
                            profileImage === url ? "selected" : ""
                          }`}
                          onClick={() => setProfileImage(url)}
                          onLoad={() =>
                            setLoadedImages((prev) => [...prev, url])
                          }
                        />
                        {/* 로드되기 전 로딩 처리 */}
                        {!isLoaded && (
                          <div className="image-loading-overlay">
                            <Loading size="sm" />
                          </div>
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </section>

      {/* 관계 선택 */}
      <section>
        <h2>관계 선택</h2>
        <SelectRelation
          value={relation}
          onChange={setRelation}
          dropdownMode="overlay"
          options={["친구", "지인", "동료", "가족"]}
        />
      </section>

      {/* 롤링페이퍼 작성 */}
      <section>
        <h2>롤링페이퍼 작성</h2>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="메시지를 입력하세요"
          className="quill-editor"
        />
      </section>

      {/* 폰트 선택 */}
      <section>
        <h2>폰트 선택</h2>
        <SelectRelation
          value={selectedFont}
          onChange={setSelectedFont}
          dropdownMode="blockDown" // select가 영역을 가지고 display:block 형태로 떨어지는 상태
          options={[
            "Noto Sans",
            "Pretendard",
            "나눔명조",
            "나눔손글씨 손편지체",
          ]}
        />
      </section>

      <Button
        label="생성하기"
        className="button-submit"
        size="lg"
        variant="primary"
        disabled={!isNameValid || !isMessageValid}
      />
    </form>
  );
}

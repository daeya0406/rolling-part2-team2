import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfileImages } from "@/apis/getProfileImages";
import { postMessage } from "@/apis/postMessage";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import "./style.scss";
import InputText from "../components/InputText";
import SelectRelation from "./components/SelectRelation";
import Avatar from "@/components/ui/Avatar";
import DefaultAvatar from "@/assets/images/common/default-avatar.svg";
import Button from "@/components/ui/Button";

export default function SendMessage() {
  const [relation, setRelation] = useState("지인");
  const [selectedFont, setSelectedFont] = useState("Noto Sans");
  const [profileImages, setProfileImages] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const [value, setValue] = useState("");
  const [sender, setSender] = useState("");

  const team = "19-2";
  const { id: recipientId } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await getProfileImages();
        setProfileImages(images);
      } catch (err) {
        console.error("이미지 요청 에러:", err);
      }
    };
    fetchImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postMessage({
        team,
        recipientId,
        sender,
        profileImageURL: profileImage || DefaultAvatar,
        relationship: relation,
        content: value,
        font: selectedFont,
      });
      alert("메시지 전송 완료!");
    } catch (err) {
      console.error(err);
      alert("메시지 전송 실패");
    }
  };

  return (
    <form className="write-wrap" onSubmit={handleSubmit}>
      <section>
        <div className="inner">
          <h2>From.</h2>
          <InputText
            id="fromName"
            placeholder="이름을 입력해 주세요"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
          />
        </div>
      </section>

      <section>
        <div className="inner">
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
                {profileImages.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt="프로필 선택"
                    className={`profile-thumb ${
                      profileImage === url ? "selected" : ""
                    }`}
                    onClick={() => setProfileImage(url)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inner">
          <h2>관계 선택</h2>
          <SelectRelation
            value={relation}
            onChange={setRelation}
            dropdownMode="overlay"
            options={["친구", "지인", "동료", "가족"]}
          />
        </div>
      </section>

      <section>
        <div className="inner">
          <h2>롤링페이퍼 작성</h2>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="메시지를 입력하세요"
            className="quill-editor"
          />
        </div>
      </section>

      <section>
        <div className="inner">
          <h2>폰트 선택</h2>
          <SelectRelation
            value={selectedFont}
            onChange={setSelectedFont}
            dropdownMode="blockDown"
            options={[
              "Noto Sans",
              "Pretendard",
              "나눔명조",
              "나눔손글씨 손편지체",
            ]}
          />
        </div>
      </section>

      <div className="inner">
        <Button
          label="생성하기"
          className="button-submit"
          size="lg"
          variant="primary"
        />
      </div>
    </form>
  );
}

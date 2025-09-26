import "./style.scss";

export default function Post() {
  return (
    <form className="write-wrap">
      <section>
        <h2>
          <label for="">To.</label>
        </h2>
        <input id="" />
      </section>
      <section>
        <div className="title-wrap">
          <h2>배경화면을 선택해 주세요.</h2>
          <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        </div>
        <p>컬러/ 이미지 탭</p>
        <p>컬러 선택 박스 리스트</p>
      </section>
      <button>생성하기 버튼</button>
    </form>
  );
}

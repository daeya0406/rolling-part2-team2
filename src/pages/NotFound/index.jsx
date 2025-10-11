import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Warn from "@/components/ui/Warn";
import "./style.scss";

function NotFoundPage() {
  return (
    <div className="container">
      <Warn
        variant="big"
        title="존재하지 않는 페이지에요."
        description="올바른 주소가 맞는지 다시 한 번 확인해 주세요."
      />
      <div className="link">
        <Link to="/">
          <Button label="홈으로 가기"></Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;

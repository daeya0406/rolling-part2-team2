import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  // 버튼을 보여줄 조건들 확인
  const showCreateButton =
    currentPath === "/" || currentPath === "/main" || currentPath === "/list";
  const isPostDetailPage =
    currentPath.startsWith("/post/") && !currentPath.includes("/edit");

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <Icon name="logo" className="logo-icon" />
          </Link>
        </div>

        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/components1">components1</Link>
          <Link to="/typo">typo</Link>
          <Link to="/color">color</Link>
        </nav>

        <div className="header__btn">
          {showCreateButton && (
            <Link to="/post">
              <Button label="롤링 페이퍼 만들기" size="md" variant="outline" />
            </Link>
          )}
          {isPostDetailPage && (
            <Link to={`${currentPath.replace(/\/+$/, "")}/edit`}>
              <Button label="관리자모드" size="md" variant="outline" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

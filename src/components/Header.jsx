import { Link } from "react-router-dom";
import "./header.scss";
import Button from "./ui/Button";
import Icon from "./ui/Icon";

function Header() {
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
          <Link to="/components2">components2</Link>
          <Link to="/typo">typo</Link>
          <Link to="/color">color</Link>
        </nav>

        <div className="header__btn">
          <Link to="/post">
            <Button label="롤링 페이퍼 만들기" size="md" variant="outline" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.scss";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import ToggleSwitch from "./ui/ToggleSwitch";

/**
 * @param {Object} props
 * @param {string} [props.className=""] - 외부에서 전달받을 추가 클래스명 (선택)
 */

function Header({ className = "" }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  // 현재 페이지가 /edit 포함인지
  const [isEdit, setIsEdit] = useState(location.pathname.includes("/edit"));

  // 토글 클릭 시 /edit 추가 제거
  useEffect(() => {
    setIsEdit(location.pathname.includes("/edit"));
  }, [location.pathname]);

  const handleToggle = (val) => {
    // 현재 pathname에서 /edit 제거 후 trim
    let basePath = location.pathname.replace(/\/edit$/, "");
    basePath = basePath.replace(/\/+$/, ""); // 끝에 슬래시 남을 경우 대비해 제거

    if (val) {
      navigate(`${basePath}/edit`);
    } else {
      navigate(basePath);
    }
  };

  // 버튼을 보여줄 조건들 확인
  const showCreateButton =
    currentPath === "/" || currentPath === "/main" || currentPath === "/list";
  const isPostDetailPage =
    currentPath.startsWith("/post/") && !currentPath.endsWith("/message");

  return (
    <>
      <header className={`header ${className}`}>
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <Icon name="logo" className="logo-icon" />
            </Link>
          </div>

          <div className="header__btn">
            {showCreateButton && (
              <Link to="/post">
                <Button
                  label="롤링 페이퍼 만들기"
                  size="md"
                  variant="outline"
                />
              </Link>
            )}
          </div>
        </div>
      </header>
      {isPostDetailPage && (
        <ToggleSwitch
          checked={isEdit}
          onChange={handleToggle}
          label="관리자 모드"
        />
      )}
    </>
  );
}

export default Header;

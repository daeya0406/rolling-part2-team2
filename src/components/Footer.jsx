import { Link } from "react-router-dom";
import "./footer.scss";
import Icon from "./ui/Icon";

function Footer() {
  return (
    <footer>
      <div class="footer-inner">
        <Link to="/">
          <Icon name="logo" className="logo-icon" />
        </Link>
        <address>
          <ul>
            <li>
              <h2>
                Sprint 19기 <span>|</span> 파트 2 - 2팀
              </h2>
            </li>
            <li>
              <h2>팀원</h2>
              <dl>
                <dd>김정대</dd>
                <dd>이나래</dd>
                <dd>윤시현</dd>
              </dl>
            </li>
            <li>
              <h2>Github 링크</h2>
              <Link to="https://github.com/daeya0406/rolling-part2-team2">
                ~~~
              </Link>
            </li>
            <li>
              <p>@Copyright ~~~ </p>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

export default Footer;

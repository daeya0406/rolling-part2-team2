import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/components1">components1</Link>
        <Link to="/components2">components2</Link>
        <Link to="/typo">typo</Link>
        <Link to="/color">color</Link>
      </nav>
    </header>
  );
}

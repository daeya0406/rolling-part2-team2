import "./Badge.scss";

export default function TestBadge({ relationship }) {
  return <span className={`badge badge--${relationship}`}>{relationship}</span>;
}

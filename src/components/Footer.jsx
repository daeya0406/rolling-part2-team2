import "./footer.scss";
import Divider from "./ui/Divider";
import Icon from "./ui/Icon";

/**
 * @param {Object} props
 * @param {string} [props.className=""]
 */
function Footer({ className = "" }) {
  const teamMembers = [
    { name: "김정대", github: "https://github.com/daeya0406" },
    { name: "윤시현", github: "https://github.com/Seony-Y" },
    { name: "이나래", github: "https://github.com/jerryko570" },
  ];

  const projectGithub = "https://github.com/daeya0406/rolling-part2-team2";

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__inner">
        <div className="footer__content">
          <div className="footer__team">
            <div className="footer__info">
              <div className="footer__members">
                {teamMembers.map((member, index) => (
                  <div key={member.name} className="footer__member">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__member-link"
                      aria-label={`${member.name} GitHub`}
                    >
                      <span className="footer__member-name">{member.name}</span>
                    </a>
                    {index < teamMembers.length && (
                      <Divider
                        width={1}
                        height={20}
                        marginX={16}
                        className={`footer__divider ${
                          index === teamMembers.length - 1
                            ? "footer__divider--last"
                            : ""
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="footer__project">
                <span className="footer__project-label">Project GitHub :</span>
                <a
                  href={projectGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__project-link"
                  aria-label="프로젝트 GitHub 저장소"
                >
                  <Icon name="github-mark" className="footer__github-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__copyright">
            <span>© 2025 Codeit Sprint 19 Part 2 - Team 2</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

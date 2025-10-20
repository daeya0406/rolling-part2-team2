import "./footer.scss";
import Divider from "./ui/Divider";
import Icon from "./ui/Icon";

/**
 * Footer 컴포넌트
 * @param {Object} props
 * @param {string} [props.className=""]
 */
function Footer({ className = "" }) {
  const teamMembers = [
    { name: "김정대", github: "https://github.com/daeya0406" },
    { name: "윤시현", github: "https://github.com/Seony-Y" },
    { name: "이나래", github: "https://github.com/jerryko570" },
  ];

  return (
    <footer className={`footer ${className}`}>
      <div className="footer__inner">
        <div className="footer__content">
          <div className="footer__team">
            <div className="footer__members">
              {teamMembers.map((member, index) => (
                <div key={member.name} className="footer__member">
                  <span className="footer__member-name">{member.name}</span>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__member-link"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Icon name="github-mark" className="footer__github-icon" />
                  </a>
                  {index < teamMembers.length - 1 && (
                    <Divider 
                      width={1} 
                      height={20} 
                      marginX={16} 
                      className="footer__divider"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="footer__copyright">
            <span>© Codeit 19-2 team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

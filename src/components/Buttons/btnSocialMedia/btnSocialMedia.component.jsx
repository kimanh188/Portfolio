import "./btnSocialMedia.style.css";

import { Link } from "react-router-dom";

export function BtnSocialMedia({ link, icon, socialMedia }) {
  const titleText = `Go to Kim's ${socialMedia} profile.`;

  return (
    <Link className="socialMedia-btn" to={link} title={titleText}>
      {icon}
    </Link>
  );
}

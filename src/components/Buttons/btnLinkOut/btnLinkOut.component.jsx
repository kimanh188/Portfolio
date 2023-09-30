import "./btnLinkOut.style.css";

import { Link } from "react-router-dom";

export function BtnLinkOut({ link, text, icon, title }) {
  return (
    <Link className="linkOut-btn" to={link} title={title}>
      {text}
      {icon}
    </Link>
  );
}

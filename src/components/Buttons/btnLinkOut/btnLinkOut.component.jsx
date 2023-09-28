import "./btnLinkOut.style.css";

import { Link } from "react-router-dom";

export function BtnLinkOut({ link, text, icon }) {
  return (
    <Link className="linkOut-btn" to={link} title="Click to open in new tab">
      {text}
      {icon}
    </Link>
  );
}

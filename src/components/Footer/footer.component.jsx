import "./footer.style.css";

import { Link } from "react-router-dom";

export function FooterWrapper() {
  return (
    <footer className="footer-wrapper">
      <p className="footer-text">&copy; 2023 | Code with &hearts; by Kim</p>

      <Link className="privacy-link" to={"/privacy-policy"}>
        Privacy Policy
      </Link>
    </footer>
  );
}

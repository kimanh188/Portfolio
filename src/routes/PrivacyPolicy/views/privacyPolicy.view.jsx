import "../privacyPolicy.style.css";

import { Link } from "react-router-dom";

export function PrivacyView() {
  return (
    <section className="privacy-section">
      <div className="privacy-content">
        <h2 className="privacy-title">Privacy Policy</h2>
        <p className="privacy-intro">
          I value your privacy and want to be transparent about how I handle
          your information.{" "}
        </p>
        <div className="privacy-policy-details">
          <div>
            <h4>Information Collection</h4>
            <p>When you use the contact form, I collect: </p>
            <ul style={{ marginLeft: "1em" }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Message</li>
            </ul>
          </div>

          <div>
            <h4>Use of Information</h4>
            <p> This data is used to respond to your inquiries only.</p>
          </div>

          <div>
            <h4>Data Security</h4>
            <p>
              I take measures to protect your information, but please note no
              method is 100% secure.
            </p>
          </div>
        </div>
      </div>

      <Link className="back-to-contact-btn" to={"/contact"}>
        Back
      </Link>
    </section>
  );
}

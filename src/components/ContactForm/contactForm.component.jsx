import { BtnCTA } from "../Buttons/HeaderButtonGroup/btnCTA/btnCTA.component";
import "./contactForm.style.css";

import { Link } from "react-router-dom";

export function ContactForm() {
  return (
    <form
      className="form-container"
      action="https://formspree.io/f/xdovwaag"
      method="post"
    >
      <div className="row1">
        <div className="input-container">
          <input type="text" id="name" name="name" required minLength={2} />
          <label htmlFor="name">
            <i className="fa-solid fa-user"></i>Your Name
          </label>
        </div>

        <div className="input-container">
          <input
            type="email"
            id="email"
            name="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <label htmlFor="email">
            <i className="fa-solid fa-envelope"></i>Your Email
          </label>
        </div>
      </div>

      <div className="row2">
        <div className="input-container">
          <textarea name="message" id="message" rows={5} required></textarea>
          <label htmlFor="message">
            <i className="fa-solid fa-message"></i>Message
          </label>
        </div>
      </div>

      <BtnCTA text={"Send"} />

      <Link className="privacy-link" to={"/privacy-policy"}>
        Privacy Policy
      </Link>
    </form>
  );
}

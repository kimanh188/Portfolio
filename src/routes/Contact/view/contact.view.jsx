// @ts-nocheck
import "./../contact.style.css";

import mobileIcon from "../../../assets/svg-icons/mobile.svg";
import mailIcon from "../../../assets/svg-icons/mail.svg";
import linkedinIcon from "../../../assets/svg-icons/linkedin.svg";
import githubContactIcon from "../../../assets/svg-icons/githubContact.svg";

import { ContactForm } from "../../../components/ContactForm/contactForm.component";
import { BtnSocialMedia } from "../../../components/Buttons/btnSocialMedia/btnSocialMedia.component";
import { BtnDarkMode } from "../../../components/Buttons/btnDarkMode/btnDarkMode.component";
import { FooterWrapper } from "../../../components/Footer/footer.component";

export function ContactView({
  isDarkMode,
  copyPhoneHandler,
  copyEmailHandler,
  keyDownHandler,
  phoneNumber,
  email,
}) {
  return (
    <>
      <section className={`contact-section ${isDarkMode ? "dark" : ""}`}>
        <BtnDarkMode />

        <div className="contact-section-content">
          <h1 className="contact-section-title">Get in touch</h1>

          <div className="contact-wrapper">
            <div className="contact-detail-container">
              <p className="contact-text">
                Whether you have any questions or just want to say hi, please
                get in touch - I&apos;d love to hear from you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <img
                    className="contact-detail-icons"
                    src={mobileIcon}
                    alt="mobile icon"
                  />

                  <span
                    onClick={copyPhoneHandler}
                    onKeyDown={(e) => keyDownHandler(e, phoneNumber)}
                    tabIndex={0}
                    role="button"
                    title="Click to copy"
                  >
                    {phoneNumber}
                  </span>
                </div>

                <div className="contact-item">
                  <img
                    className="contact-detail-icons"
                    src={mailIcon}
                    alt="mail icon"
                  />

                  <span
                    onClick={copyEmailHandler}
                    onKeyDown={(e) => keyDownHandler(e, email)}
                    tabIndex={0}
                    role="button"
                    title="Click to copy"
                  >
                    {email}
                  </span>
                </div>
              </div>

              <div className="contact-social-links">
                <BtnSocialMedia
                  link={"#"}
                  icon={linkedinIcon}
                  socialMedia={"LinkedIn"}
                />

                <BtnSocialMedia
                  link={"https://github.com/kimanh188"}
                  icon={githubContactIcon}
                  socialMedia={"Github"}
                />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>

        <FooterWrapper />
      </section>
    </>
  );
}

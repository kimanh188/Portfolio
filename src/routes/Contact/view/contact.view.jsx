import { ContactForm } from "../../../components/ContactForm/contactForm.component";
import { BtnSocialMedia } from "../../../components/Buttons/btnSocialMedia/btnSocialMedia.component";
import { BtnDarkMode } from "../../../components/Buttons/HeaderButtonGroup/btnDarkMode/btnDarkMode.component";
import "./../contact.style.css";

import { useContext } from "react";
import { DarkModeContext } from "./../../../contexts/theme.context";

export function ContactView() {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <section className={`contact-section ${isDarkMode ? "dark" : ""}`}>
        <BtnDarkMode />
        <div className="contact-section-content">
          <h1 className="contact-section-title">Get in touch</h1>
          <div className="contact-detail-container">
            <p className="contact-text">
              Whether you have any questions or just want to say hi, please get
              in touch - I&apos;d love to hear from you!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 -1 15 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ee7d52"
                    fillRule="evenodd"
                    d="M4 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-10ZM4.5 1A1.5 1.5 0 0 0 3 2.5v10A1.5 1.5 0 0 0 4.5 14h6a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 10.5 1h-6ZM6 11.65a.35.35 0 1 0 0 .7h3a.35.35 0 1 0 0-.7H6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>0157 5855 2369</p>
              </div>

              <div className="contact-item">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 -4 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ee7d52"
                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 4.99L4 6h16zm0 12H4V8l8 5l8-5v10z"
                  />
                </svg>
                <p>kimanh188.de@gmail.com</p>
              </div>
            </div>

            <div className="contact-social-links">
              <BtnSocialMedia
                link={"/"}
                icon={
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#89a44c"
                      d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                    />
                  </svg>
                }
                socialMedia={"LinkedIn"}
              />

              <BtnSocialMedia
                link={"/"}
                icon={
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 -2 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#89a44c"
                      d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"
                    />
                  </svg>
                }
                socialMedia={"Github"}
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

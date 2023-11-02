import { ContactView } from "./view/contact.view.jsx";

import { useContext } from "react";
import { DarkModeContext } from "./../../contexts/theme.context";

export function ContactContainer() {
  const { isDarkMode } = useContext(DarkModeContext);

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for browsers that do not support navigator.clipboard
      const copyText = document.createElement("textarea");
      copyText.value = text;
      document.body.appendChild(copyText);
      copyText.select();
      document.execCommand("copy");
      document.body.removeChild(copyText);
    }
  };

  const keyDownHandler = (event, text) => {
    if (event.key === "Enter") {
      copyToClipboard(text);
    }
  };

  const phoneNumber = "015758552369";
  const email = "kimanhdo.dev@gmail.com";

  const copyPhoneHandler = (event) => {
    copyToClipboard(phoneNumber);
  };

  const copyEmailHandler = (event) => {
    copyToClipboard(email);
  };

  return (
    <ContactView
      isDarkMode={isDarkMode}
      copyPhoneHandler={copyPhoneHandler}
      copyEmailHandler={copyEmailHandler}
      keyDownHandler={keyDownHandler}
      phoneNumber={phoneNumber}
      email={email}
    />
  );
}

import CookieConsent from "react-cookie-consent";

export const CookieConsentComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK"
      cookieName="wineofmarche_consent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={14}
    >
      This website uses cookies to enhance the user experience.{" "}
    </CookieConsent>
  );
};

import styled from "styled-components";
import { MaxWidthComponent } from "../../../components/common/MaxWidthComponent";
import contactusPic from "../../../assets/images/about-us2.jpg";
import { winelisthp, winetitle } from "../../../components/common/colors";
import { ContactForm } from "./ContactForm";

const ContactUsStyle = styled.div.attrs({ className: "contactus-container" })`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  box-shadow: 3.8px -7.5px 7.5px hsl(0deg 0% 0% / 0.38);
  position: relative;
  gap: 2rem;
  min-height: 550px;

  .contact-us-max-width {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    button {
      width: 180px;
    }
  }

  h2.section-title {
    font-size: 35px;
    line-height: 1.5em;
    text-align: left;
    color: ${winelisthp};
    letter-spacing: 0.1em;
    font-weight: 400;
    margin: 0;
  }

  p.contact-us-text-content {
    font-size: 16px;
    line-height: 1.5em;
    text-align: justify;
    letter-spacing: 0.1em;
    font-weight: 400;
    margin: 0;

    a {
      text-decoration: none;
      color: ${winetitle};
      line-height: 3rem;
    }
  }

  img.contact-us-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  @media only screen and (min-width: 1024px) {
    .contact-us-max-width {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
    .form-container {
      button {
        width: 200px;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-inline: 4rem;
  }
`;

export const ContactUs = () => {
  return (
    <ContactUsStyle>
      <h2 className="section-title">CONTACT US</h2>
      <img
        className="contact-us-background"
        src={contactusPic}
        alt="Contact Us"
      />
      <MaxWidthComponent label="contact-us">
        <p className="contact-us-text-content">
          For general enquires or if you’d like to book a tasting session, send
          us an email to: <br />
          <a href="mailto:info@wineofmarche.au">Info@wineofmarche.au</a>
          <br />
          Or if you’d like to have a chat, call Besar at <br />
          <a href="tel:0434004360">0434004360</a>  <br />
          And follow us on instagram to see what we up to! 
        </p>
        <ContactForm />
      </MaxWidthComponent>
    </ContactUsStyle>
  );
};

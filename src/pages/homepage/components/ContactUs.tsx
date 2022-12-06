import styled from "styled-components";
import { MaxWidthComponent } from "../../../components/common/MaxWidthComponent";
import contactusPic from "../../../assets/images/about-us2.jpg";
import { winelisthp, winetitle } from "../../../components/common/colors";
import { ContactForm } from "./ContactForm";
import { MapRenderer } from "./MapRenderer";
import instagramIcon from "../../../assets/icons/instagram.png";

const ContactUsStyle = styled.div.attrs({
  className: "contactus-container container",
})`
  gap: 2rem;

  h2.section-title {
    color: ${winelisthp};
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

  .contact-us-max-width {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    img:not(.instagram) {
      width: 100%;
      aspect-ratio: 1 / 0.75;
      object-fit: none;
    }

    .form-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      button {
        width: 180px;
      }
    }

    p.contact-us-text-content {
      font-size: 14px;
      text-align: justify;
      a {
        color: ${winetitle};
        line-height: 3rem;
      }

      img.instagram {
        width: 30px;
        margin-top: 1rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .contact-us-max-width {
      .staticmap-container {
        img {
          aspect-ratio: 2 / 1;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .contact-us-max-width {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;

      .staticmap-container {
        grid-column: 1 / 3;
        img {
          aspect-ratio: 3 / 1;
        }
      }
      .form-container {
        button {
          width: 200px;
        }
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    gap: 4rem;
    .contact-us-max-width {
      p.contact-us-text-content {
        font-size: 20px;
        img.instagram {
          width: 40px;
        }
      }
    }
  }
`;

export const ContactUs = () => {
  return (
    <ContactUsStyle id="contact-us">
      <h2 className="section-title">Contact Us</h2>
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
          <br />
          <a
            href="https://instagram.com/wine_of_marche"
            target="_blank"
            rel="noreferrer"
          >
            <img className="instagram" src={instagramIcon} alt="Instagram" />
          </a>
        </p>
        <ContactForm />
        <MapRenderer />
      </MaxWidthComponent>
    </ContactUsStyle>
  );
};

import styled from "styled-components";
import logotext from "../../assets/images/logotext.png";
import { winelisthp, winetitle } from "./colors";
import { MaxWidthComponent } from "./MaxWidthComponent";
import { HashLink as Link } from "react-router-hash-link";
import footerPic1 from "../../assets/images/footer/footer1.jpg";
import footerPic2 from "../../assets/images/footer/footer2.jpg";
import footerPic3 from "../../assets/images/footer/footer3.jpg";
import footerPic4 from "../../assets/images/footer/footer4.jpg";
import footerPic5 from "../../assets/images/footer/footer5.jpg";
import footerPic6 from "../../assets/images/footer/footer6.jpg";
import instagramIcon from "../../assets/icons/instagram.png";
import dataLinks from "./navbar/data-links.json";

const FooterStyle = styled.footer.attrs({ className: "footer-container" })`
  display: flex;
  flex-direction: column;
  background-color: #383230;
  padding: 4rem 2rem 1rem;
  color: white;
  gap: 3rem;

  hr {
    width: 100%;
    max-width: 1280px;
    border-color: #80808090;
    margin-bottom: 2rem;
  }

  .footer-max-width {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    font-size: 12px;

    p {
      font-size: 12px;
      margin-bottom: 0;
    }
    img.logo-footer {
      width: 200px;
      filter: invert(1);
      margin-left: -0.75rem;
    }
    .col {
      display: grid;
      gap: 1rem;
      align-content: space-between;
    }

    .col-1 {
      li {
        color: white;
        width: fit-content;
        &:hover {
          color: ${winelisthp};
        }
      }
    }

    .col-2 {
      p {
        color: white;
        width: fit-content;

        &:hover {
          color: ${winelisthp};
        }
        span {
          margin-left: 18px;
        }
      }

      .socials-container {
        img {
          width: 30px;
          filter: invert(1);
        }
      }
    }

    .col-4 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      img {
        border: 1px solid ${winetitle};
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }
    }
  }

  .footer-copyright {
    p {
      font-size: 10px;
      color: grey;
      text-align: center;
    }
  }

  @media only screen and (min-width: 500px) {
    .footer-max-width {
      .col-1 {
        width: 60%;
      }
      .col-4 {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .footer-max-width {
      gap: 2rem;
      grid-template-columns: 1fr 1fr;

      img.logo-footer {
        grid-column: 1 / 3;
      }
      .col-1 {
        width: 100%;
      }
      .col-4 {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .footer-max-width {
      grid-template-columns: 1fr 1fr 1fr;
      img.logo-footer {
        width: 300px;
        margin-left: -1rem;
      }
      img.logo-footer {
        grid-column: 1 / 4;
      }

      p {
        font-size: 18px;
      }
      .col-1 li {
        font-size: 18px;
      }
    }
    .footer-copyright {
      p {
        font-size: 12px;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <MaxWidthComponent label="footer">
        <img className="logo-footer" src={logotext} alt="logo-text" />
        <div className="col-1 col">
          <p>
            Bringing exclusive Italian wine from the Marche region to the best
            fine dining restaurant in Australia
          </p>
          <ul>
            {dataLinks.map(({ url, label }) => (
              <Link to={url}>
                <li>{label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-2 col">
          <div className="contact-container">
            <a href="tel:0434004360" target="_blank" rel="noreferrer">
              <p>t: 0434004360</p>
            </a>
            <a
              href="https://www.google.com/maps/place/19+Ralston+St,+Lane+Cove+North+NSW+2066+Australia"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                a: U7/19 Ralston st, <br />
                <span>Lane Cove North.</span> <br />
                <span>2066 NSW</span>
              </p>
            </a>
            <a
              href="mailto:info@wineofmarche.au"
              target="_blank"
              rel="noreferrer"
            >
              <p>e: info@wineofmarche.au</p>
            </a>
            <a
              href="mailto:sales@wineofmarche.au"
              target="_blank"
              rel="noreferrer"
            >
              <p>e: sales@wineofmarche.au</p>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <p>w: www.wineofmarche.au</p>
            </a>
          </div>
          <div className="socials-container">
            <a
              href="https://instagram.com/wine_of_marche"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
        {/* <div className="col-3 col">
          <div className="text-above">
            <p>January 20, 2017 </p>
            <p>Etiam risus nunc, feugiat id commodo ut, laoreet in augue</p>
          </div>
          <div className="text-below">
            <p>January 20, 2017 </p>
            <p>Etiam risus nunc, feugiat id commodo ut, laoreet in augue</p>
          </div>
        </div> */}
        <div className="col-4 col">
          <img src={footerPic1} alt="" />
          <img src={footerPic2} alt="" />
          <img src={footerPic3} alt="" />
          <img src={footerPic4} alt="" />
          <img src={footerPic5} alt="" />
          <img src={footerPic6} alt="" />
        </div>
      </MaxWidthComponent>
      <div className="footer-copyright">
        <hr />
        <p> © 2022: Wine of Marche - ABN 95662077625</p>
      </div>
    </FooterStyle>
  );
};

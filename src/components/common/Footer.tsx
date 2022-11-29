import styled from "styled-components";
import logotext from "../../assets/images/logotext.png";
import { MaxWidthComponent } from "./MaxWidthComponent";

const TEMP_IMG =
  "https://scontent-den4-1.cdninstagram.com/v/t51.29350-15/195221406_302688341510813_7183047526141179114_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=vbHCWhNWTfQAX8HBNTk&_nc_ht=scontent-den4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCjG-pQWipx5duePoqFrIkDpTomDuUOROkRrmeGNzUjIQ&oe=638A0087";

const FooterStyle = styled.footer.attrs({ className: "footer-container" })`
  display: flex;
  flex-direction: column;
  background-color: #383230;
  padding: 4rem 2rem 1rem;
  color: white;
  gap: 5rem;

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
    p {
      font-size: 12px;
    }

    .col {
      display: grid;
      align-content: space-between;
    }

    .col-1 {
      img {
        width: 200px;
        filter: invert(1);
        margin-left: -0.75rem;
      }
    }

    .col-4 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      row-gap: 1rem;
      img {
        width: 100%;
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
      .col-4 {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .footer-max-width {
      gap: 2rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      .col-4 {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  @media only screen and (min-width: 940px) {
    .footer-max-width {
      gap: 4rem;
      .col-4 {
        gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <MaxWidthComponent label="footer">
        <div className="col-1 col">
          <img src={logotext} alt="logo-text" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit scelerisque.
          </p>
          <p>
            Quisque feugiat mattis ornare. Suspendisse sit amet dictum felis.
            Nullam ac est id lacus, sed non mauris.
          </p>
        </div>
        <div className="col-2 col">
          <div className="contact-container">
            <p>1-677-124-44227</p>
            <p>184 Main Collins Street Victoria 807</p>
            <p>info@wineofmarche.au</p>
            <p>www.wineofmarche.au</p>
          </div>
          <div className="socials-container">
            <p>1-677-124-44227</p>
          </div>
        </div>
        <div className="col-3 col">
          <div className="text-above">
            <p>January 20, 2017 </p>
            <p>Etiam risus nunc, feugiat id commodo ut, laoreet in augue</p>
          </div>
          <div className="text-below">
            <p>January 20, 2017 </p>
            <p>Etiam risus nunc, feugiat id commodo ut, laoreet in augue</p>
          </div>
        </div>
        <div className="col-4 col">
          <img src={TEMP_IMG} alt="" />
          <img src={TEMP_IMG} alt="" />
          <img src={TEMP_IMG} alt="" />
          <img src={TEMP_IMG} alt="" />
          <img src={TEMP_IMG} alt="" />
          <img src={TEMP_IMG} alt="" />
        </div>
      </MaxWidthComponent>
      <div className="footer-copyright">
        <hr />
        <p> © 2022: Wine of Marche - ABN 23212343243</p>
      </div>
    </FooterStyle>
  );
};

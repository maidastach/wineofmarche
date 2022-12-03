import styled from "styled-components";
import logotext from "../../assets/images/logotext.png";
import { imagesOfWines } from "../../data/data-wine-images";
import { MaxWidthComponent } from "./MaxWidthComponent";

const TEMP_IMG = imagesOfWines[0].image;

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
      margin-bottom: 0;
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
      column-gap: 3rem;
      row-gap: 2rem;
      img {
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
      .col-4 {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .footer-max-width {
      gap: 2rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      p {
        font-size: 14px;
      }
      .col-4 {
        grid-template-columns: 1fr 1fr;
      }
    }

    .footer-copyright {
      p {
        font-size: 14px;
      }
    }
  }

  @media only screen and (min-width: 940px) {
    .footer-max-width {
      .col-4 {
        gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
        img {
          aspect-ratio: 1 / 2;
        }
      }
    }
  }
  @media only screen and (min-width: 1050px) {
    .footer-max-width {
      gap: 4rem;
    }
  }
  @media only screen and (min-width: 1280px) {
    .footer-max-width {
      p {
        font-size: 18px;
      }
      .col-1 {
        img {
          width: 350px;
          margin-left: -0.75rem;
        }
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
            <p>0434004360</p>
            <p>
              U7/19 Ralston st, <br />
              Lane Cove north. 2066 NSW
            </p>
            <p>info@wineofmarche.au</p>
            <p>sales@wineofmarche.au</p>
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
        <p> © 2022: Wine of Marche - ABN 95662077625</p>
      </div>
    </FooterStyle>
  );
};

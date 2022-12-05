import styled from "styled-components";
import { MaxWidthComponent } from "../../../components/common/MaxWidthComponent";
import aboutusPic from "../../../assets/images/about-us.jpg";
import { winetitleHover } from "../../../components/common/colors";
const AboutUsStyle = styled.div.attrs({ className: "aboutus-container" })`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 500px;
  padding: 4rem 2rem;
  box-shadow: 3.8px -7.5px 7.5px hsl(0deg 0% 0% / 0.38);

  h2.section-title {
    font-size: 35px;
    line-height: 1.5em;
    text-align: left;
    color: ${winetitleHover};
    letter-spacing: 0.1em;
    font-weight: 400;
    margin: 0;
  }

  img.about-us-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  p.about-us-text-content {
    color: white;
    font-size: 16px;
    line-height: 1.5em;
    text-align: justify;
    letter-spacing: 0.1em;
    font-weight: 400;
    margin: 0;
  }

  @media only screen and (min-width: 768px) {
    p.about-us-text-content {
      font-size: 23px;
    }
  }

  @media only screen and (min-width: 1280px) {
    padding-inline: 4rem;
  }
`;

export const AboutUs = () => {
  return (
    <AboutUsStyle>
      <img className="about-us-background" src={aboutusPic} alt="About Us" />
      <h2 className="section-title">ABOUT US</h2>
      <MaxWidthComponent label="about-us">
        <p className="about-us-text-content">
          Wine of Marche is an Italian wine import company. <br />
          We love our wines and we love to share those beautiful flavours with
          others. It’s in the Italian DNA to enjoy all those little things in
          life, especially when we are together.
          <br />
          We are honoured to showcase our beautiful region of Marche, the land
          of medieval castles, gentle hills, snowy mountains and breathtaking
          coastlines : a truly amazing region, home of many artists, poets and
          writers from our history.  <br />
          We took it upon ourselves to present to the world the beauty of Marche
          starting from its wines and the passions of our winemakers, the same
          passion that has been passed down for generations!
        </p>
      </MaxWidthComponent>
    </AboutUsStyle>
  );
};

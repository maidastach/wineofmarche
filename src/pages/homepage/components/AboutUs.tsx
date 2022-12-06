import styled from "styled-components";
import { MaxWidthComponent } from "../../../components/common/MaxWidthComponent";
import aboutusPic from "../../../assets/images/about-us.webp";
import { sectiontitleLighter } from "../../../components/common/colors";

const AboutUsStyle = styled.div.attrs({
  className: "aboutus-container container",
})`
  gap: 2rem;

  h2.section-title {
    color: ${sectiontitleLighter};
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
    font-size: 14px;
    text-align: justify;
  }

  @media only screen and (min-width: 1280px) {
    gap: 4rem;
    p.about-us-text-content {
      font-size: 20px;
    }
  }
`;

export const AboutUs = () => {
  return (
    <AboutUsStyle id="about-us">
      <img className="about-us-background" src={aboutusPic} alt="About Us" />
      <h2 className="section-title">About Us</h2>
      <MaxWidthComponent label="about-us">
        <p className="about-us-text-content">
          Wine of Marche is an Italian wine import company. <br />
          We love our wines and we love to share those beautiful flavours with
          others. It’s in the Italian DNA to enjoy all those little things in
          life, especially when we are together.
          <br />
          <br />
          We are honoured to showcase our beautiful region of Marche, the land
          of medieval castles, gentle hills, snowy mountains and breathtaking
          coastlines : a truly amazing region, home of many artists, poets and
          writers from our history.  <br />
          <br />
          We took it upon ourselves to present to the world the beauty of Marche
          starting from its wines and the passions of our winemakers, the same
          passion that has been passed down for generations!
        </p>
      </MaxWidthComponent>
    </AboutUsStyle>
  );
};

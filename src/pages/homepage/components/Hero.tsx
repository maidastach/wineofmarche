import styled from "styled-components";
import heropic from "../../../assets/images/wine of marche hero.jpeg";

const HeroStyle = styled.div.attrs({ className: "hero-container" })`
  display: flex;

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  @media only screen and (min-width: 768px) {
    img {
      height: unset;
      object-fit: contain;
    }
  }

  @media only screen and (min-width: 1280px) {
    img {
      max-height: 90vh;
      object-fit: cover;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroStyle>
      <img src={heropic} alt="Hero Wine of MArche" />
    </HeroStyle>
  );
};

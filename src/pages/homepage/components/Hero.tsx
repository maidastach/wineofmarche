import styled from "styled-components";
import logopic from "../../../assets/images/logopic.png";
import heropic from "../../../assets/images/heropic.webp";

const HeroStyle = styled.div.attrs({ className: "hero-container" })`
  display: flex;
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${heropic});
    background-color: saddlebrown;
    background-blend-mode: lighten;
    /* filter: blur(3px); */
  }

  img {
    position: relative;
    z-index: 2;
    width: 200px;
    height: 200px;
    margin-left: 1rem;
    margin-top: 7rem;
  }

  @media only screen and (min-width: 768px) {
    align-items: center;

    img {
      width: 350px;
      height: 350px;
      margin-left: 3rem;
      margin-top: unset;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroStyle>
      <div className="background"></div>
      <img src={logopic} alt="wine-logo" />
    </HeroStyle>
  );
};

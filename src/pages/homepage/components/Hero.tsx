import styled from "styled-components";
import logopic from "../../../assets/images/logopic.png";
import heropic from "../../../assets/images/heropic.webp";

const HeroStyle = styled.div.attrs({ className: "hero-container" })`
  display: flex;
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${heropic});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background: saddlebrown;
    opacity: 0.2;
  }

  img {
    position: relative;
    z-index: 2;
    width: 200px;
    height: 200px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 768px) {
    align-items: flex-end;

    .background {
      background-size: 100% 100%;
    }

    img {
      width: 350px;
      height: 350px;
      margin-right: 3rem;
      margin-bottom: 3rem;
      margin-top: unset;
    }
  }
`;

export const Hero = () => {
  return (
    <HeroStyle>
      <div className="background"></div>
      <div className="overlay"></div>
      <img src={logopic} alt="wine-logo" />
    </HeroStyle>
  );
};

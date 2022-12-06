import styled from "styled-components";
import heropic from "../../../assets/images/heropica.webp";

const ExperienceStyle = styled.div.attrs({
  className: "experience-container",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${heropic}) center/cover no-repeat;
  height: 600px;
  position: relative;
  background-attachment: fixed;
  padding: 0 2rem;
  gap: 1rem;

  div.overlay {
    background-color: black;
    opacity: 0.6;
    z-index: 1;
  }
  h2 {
    color: white;
    text-align: center;
    position: relative;
    z-index: 2;
    text-shadow: 0px 4px 20px white;
  }

  @media only screen and (min-width: 1280px) {
    height: 750px;
  }
`;

export const Experience = () => {
  return (
    <ExperienceStyle>
      <div className="overlay" />
      <h2 className="section-title">WE KNOW QUALITY.</h2>
      <h2 className="section-title">WE INVITE YOU EXPERIENCE IT.</h2>
    </ExperienceStyle>
  );
};

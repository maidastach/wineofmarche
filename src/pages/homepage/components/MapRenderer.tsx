import styled from "styled-components";
import staticMapPic from "../../../assets/images/staticmap.png";

const MapStyle = styled.div.attrs({ className: "staticmap-container" })`
  display: flex;
  width: 100%;
  max-height: 550px;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: darkolivegreen;
    opacity: 0.2;
  }
  img {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    img {
      object-fit: cover;
    }
  }
`;

export const MapRenderer = () => {
  return (
    <MapStyle>
      <div className="overlay" />
      <img src={staticMapPic} alt="Location" />
    </MapStyle>
  );
};

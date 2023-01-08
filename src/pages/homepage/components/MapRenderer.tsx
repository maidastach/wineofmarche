import styled from "styled-components";
import staticMapPic from "../../../assets/images/wine of marche static map.webp";
import { winetitle } from "../../../components/common/colors";

const MapStyle = styled.div.attrs({ className: "staticmap-container" })`
  display: flex;
  width: 100%;
  border: 1px solid ${winetitle};
  box-shadow: 0px 2px 30px 1px hsl(0deg 0% 0% / 38%);
`;

export const MapRenderer = () => {
  return (
    <MapStyle>
      <a
        href="https://www.google.com/maps/place/19+Ralston+St,+Lane+Cove+North+NSW+2066+Australia"
        target="_blank"
        rel="noreferrer"
      >
        <img src={staticMapPic} alt="Location" />
      </a>
    </MapStyle>
  );
};

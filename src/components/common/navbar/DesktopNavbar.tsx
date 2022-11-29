import { Link } from "react-router-dom";
import styled from "styled-components";
import navListItems from "./data-links.json";

const DesktopNavbarStyle = styled.nav.attrs({
  className: "desktop-navigation",
})`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const DesktopNavbar = () => {
  return (
    <DesktopNavbarStyle>
      {navListItems.map(({ label, url }) => (
        <li className="nav-links" key={label}>
          <Link to={url}>{label}</Link>
        </li>
      ))}
    </DesktopNavbarStyle>
  );
};

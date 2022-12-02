import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import navListItems from "./data-links.json";

const DesktopNavbarStyle = styled.nav.attrs({
  className: "desktop-navigation",
})`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;

    .nav-links {
      font-size: 14px;
      line-height: 1.5em;
      color: #737272;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  @media only screen and (min-width: 1280px) {
    .nav-links {
      font-size: 28px;
    }
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

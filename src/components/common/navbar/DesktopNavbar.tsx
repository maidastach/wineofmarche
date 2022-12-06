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
    margin-top: 0.75rem;

    .nav-links {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 1280px) {
    .nav-links {
      font-size: 28px;
      a.isHomepage {
        color: white;
      }
    }
  }
`;

export const DesktopNavbar = () => {
  return (
    <DesktopNavbarStyle>
      {navListItems.map(({ label, url }) => (
        <li className="nav-links" key={label}>
          <Link className="isHomepage" to={url}>
            {label}
          </Link>
        </li>
      ))}
    </DesktopNavbarStyle>
  );
};

import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import navListItems from "./data-links.json";
import burgermenu from "../../../assets/icons/burgermenu.png";
import logopic from "../../../assets/images/logopic.png";
import closemenu from "../../../assets/icons/closemenu.png";
import { useCallback, useState } from "react";

const MobileNavbarStyle = styled.nav.attrs({
  className: "mobile-navigation",
})`
  width: 20px;
  height: 20px;
  img.menu-action {
    width: 20px;
    height: 20px;
    filter: invert(0.7);
    position: relative;
    z-index: 12;
    transition: 0.4s cubic-bezier(0.6, -0.28, 0.74, 0.05) all;
    cursor: pointer;
  }

  .navigation-body {
    transition: 0.3s cubic-bezier(0.6, -0.28, 0.74, 0.05) all;
    width: 100vw;
    height: 100vh;
    background: beige;
    z-index: 10;
    position: fixed;
    top: -150vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    img.logo-pic {
      width: 150px;
      height: 150px;
      position: absolute;
      bottom: 2rem;
      left: 2rem;
    }

    ul.links-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
      margin-bottom: 10rem;

      li {
        font-size: 28px;
        line-height: 1.5em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 400;
        a {
          color: black;
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClickMenu = useCallback(() => {
    setTimeout(() => setIsMenuOpen((prev) => !prev), 250);
  }, []);

  return (
    <MobileNavbarStyle>
      <img
        src={isMenuOpen ? closemenu : burgermenu}
        alt="menu-icon"
        onClick={handleClickMenu}
        className="menu-action"
      />
      <div
        className="navigation-body"
        style={{ top: isMenuOpen ? 0 : "-150vh" }}
      >
        <img src={logopic} alt="logo pic" className="logo-pic" />
        <ul className="links-container">
          {navListItems.map(({ label, url }) => (
            <li className="nav-links" key={label}>
              <Link onClick={handleClickMenu} to={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </MobileNavbarStyle>
  );
};

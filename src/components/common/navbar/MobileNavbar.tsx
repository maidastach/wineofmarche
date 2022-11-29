import { Link } from "react-router-dom";
import styled from "styled-components";
import navListItems from "./data-links.json";
import burgermenu from "../../../assets/icons/burgermenu.png";
import closemenu from "../../../assets/icons/closemenu.png";
import { useCallback, useState } from "react";

const MobileNavbarStyle = styled.nav.attrs({
  className: "mobile-navigation",
})`
  width: 20px;
  height: 20px;
  img {
    width: 20px;
    height: 20px;
    filter: invert(0.7);
    position: relative;
    z-index: 12;
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.74, 0.05) all;
    cursor: pointer;
  }

  .navigation-body {
    transition: 0.2s cubic-bezier(0.6, -0.28, 0.74, 0.05) all;
    width: 100vw;
    height: 100vh;
    background: beige;
    opacity: 0.9;
    z-index: 10;
    position: fixed;
    top: -300vh;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClickMenu = useCallback(() => {
    setTimeout(() => setIsMenuOpen((prev) => !prev), 300);
  }, []);

  return (
    <MobileNavbarStyle>
      <img
        src={isMenuOpen ? closemenu : burgermenu}
        alt="menu-icon"
        onClick={handleClickMenu}
      />
      <div
        className="navigation-body"
        style={{ top: isMenuOpen ? 0 : "-300vh" }}
      >
        {navListItems.map(({ label, url }) => (
          <li className="nav-links" key={label}>
            <Link onClick={handleClickMenu} to={url}>
              {label}
            </Link>
          </li>
        ))}
      </div>
    </MobileNavbarStyle>
  );
};

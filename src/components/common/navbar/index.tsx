import styled from "styled-components";
import logotext from "../../../assets/images/wine of marche logo text.png";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { winelisthp, winetitle } from "../colors";

const NavbarStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  position: relative;

  .overlay {
    display: none;
  }

  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      height: auto;
      position: relative;
      z-index: 11;
      margin-left: -1rem;
    }
  }
  .nav-links {
    position: relative;
    z-index: 3;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    font-weight: 400;
    a {
      color: ${winelisthp};
      transition: 0.5s ease;
      &:hover {
        color: ${winetitle};
      }
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
  @media only screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    padding-inline: 0;
    justify-content: space-around;

    .overlay.isOverlay {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0.4;
    }

    .logo-container {
      img {
        width: 450px;
        height: auto;
        &.isHomepage {
          filter: invert(1);
        }
      }
    }
  }
`;

export const Navbar = () => {
  const { pathname } = useLocation();
  const [overlay, setOverlay] = useState<string>("");

  useEffect(() => {
    if (pathname === "/") {
      setOverlay("isOverlay");
    } else {
      setOverlay("");
    }
  }, [pathname]);

  return (
    <NavbarStyle className="navbar-container isHomepage">
      <div className={`overlay ${overlay}`} />
      <div className="logo-container">
        <Link to="/">
          <img className="isHomepage" src={logotext} alt="Wine of Marche" />
        </Link>
      </div>
      <nav className="navigation-container">
        <DesktopNavbar />
        <MobileNavbar />
      </nav>
    </NavbarStyle>
  );
};

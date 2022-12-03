import styled from "styled-components";
import logotext from "../../../assets/images/logotext.png";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { winetitle } from "../colors";

const NavbarStyle = styled.header.attrs({ className: "navbar-container" })`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem 0;
  position: relative;
  a {
    display: contents;
  }

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
    }
  }
  .nav-links {
    position: relative;
    z-index: 3;
    line-height: 1.5em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
    a {
      color: black;
      transition: 0.5s ease;
      &:hover {
        color: ${winetitle};
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;

    .overlay.isHomepage {
      display: block;
      width: 100%;
      height: 80%;
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      opacity: 0.3;
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
  const [navbarClass, setNavbarClass] = useState<string>("");

  useEffect(() => {
    if (pathname === "/") {
      setNavbarClass("isHomepage");
    } else {
      setNavbarClass("");
    }
  }, [pathname]);

  return (
    <NavbarStyle>
      <div className={`overlay ${navbarClass}`} />
      <div className="logo-container">
        <Link to="/">
          <img className={navbarClass} src={logotext} alt="Wine of Marche" />
        </Link>
      </div>
      <nav className="navigation-container">
        <DesktopNavbar navbarClass={navbarClass} />
        <MobileNavbar />
      </nav>
    </NavbarStyle>
  );
};

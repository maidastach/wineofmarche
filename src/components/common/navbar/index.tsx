import styled from "styled-components";
import logotext from "../../../assets/images/logotext.png";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

const NavbarStyle = styled.header.attrs({ className: "navbar-container" })`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  .logo-container {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      height: auto;
    }
  }
  li {
    font-family: "Cinzel";
  }
  a {
    display: contents;
    color: black;
  }

  @media only screen and (min-width: 1280px) {
    .logo-container {
      img {
        width: 350px;
        height: auto;
      }
    }
  }
`;

export const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="logo-container">
        <img src={logotext} alt="" />
      </div>
      <nav className="navigation-container">
        <DesktopNavbar />
        <MobileNavbar />
      </nav>
    </NavbarStyle>
  );
};

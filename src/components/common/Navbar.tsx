import styled from "styled-components";

const NavbarStyle = styled.header.attrs({ className: "navbar-container" })`
  display: flex;
  width: 100vw;
`;

export const Navbar = () => {
  return (
    <NavbarStyle>
      <nav></nav>
    </NavbarStyle>
  );
};

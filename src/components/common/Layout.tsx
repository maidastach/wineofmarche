import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./ScrollToTop";

const LayoutStyle = styled.main.attrs({ className: "layout-container" })`
  section:not(.homepage-container) {
    padding-inline: 2rem;
  }

  @media only screen and (min-width: 1280px) {
    section:not(.homepage-container) {
      padding-inline: 4rem;
    }
  }
`;
export const Layout = () => {
  return (
    <LayoutStyle>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
};

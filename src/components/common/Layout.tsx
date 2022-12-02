import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./ScrollToTop";

const LayoutStyle = styled.section.attrs({ className: "layout-container" })`
  section:not(.homepage-container) {
    padding-inline: 2rem;
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

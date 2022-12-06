import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./ScrollToTop";

const LayoutStyle = styled.main.attrs({ className: "layout-container" })``;
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

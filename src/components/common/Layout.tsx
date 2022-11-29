import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const LayoutStyle = styled.section.attrs({ className: "layout-container" })``;
export const Layout = () => {
  // Scroll To Top of Page at every Change of Page/Route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutStyle>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutStyle>
  );
};

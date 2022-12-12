import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CookieConsentComponent } from "./CookieConsentComponent";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";
import { ScrollToTop } from "./ScrollToTop";

const LayoutStyle = styled.main.attrs({ className: "layout-container" })``;
export const Layout = () => {
  return (
    <HelmetProvider>
      <LayoutStyle>
        <ScrollToTop />
        <CookieConsentComponent />
        <Navbar />
        <Outlet />
        <Footer />
      </LayoutStyle>
    </HelmetProvider>
  );
};

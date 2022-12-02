import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  // Scroll To Top of Page at every Change of Page/Route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

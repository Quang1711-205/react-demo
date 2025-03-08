import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Mỗi khi pathname thay đổi, cuộn lên đầu

  return null;
};

export default ScrollToTop;

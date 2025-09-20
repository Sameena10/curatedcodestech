import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Usertrack() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-FRD98T455Q', {
        page_path: location.pathname,
      });
    }
  }, [location]);
}

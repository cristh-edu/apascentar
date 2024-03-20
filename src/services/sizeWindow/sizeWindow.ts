import { useEffect, useState } from "react";
export const getSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  if (typeof window !== "undefined") {
    useEffect(() => {
      const windowSizeHandler = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener("resize", windowSizeHandler);
      windowSizeHandler();

      return () => {
        window.removeEventListener("resize", windowSizeHandler);
      };
    }, []);
  }
  return windowSize;
};

export const isMobile = () => getSize()[0] < 768;

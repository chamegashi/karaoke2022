import { useEffect, useState } from "react";

export const getWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [viewLoading, setViewLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        setIsPhone(window.innerWidth < 768);
        setViewLoading(false);
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return;
    }
  }, []);

  return { windowSize, isPhone, viewLoading };
};

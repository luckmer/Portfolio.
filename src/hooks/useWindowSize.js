import { useEffect, useState, useMemo } from "react";

const useWindowSize = () => {
  const [WindowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const windowSize = useMemo(() => WindowSize, [WindowSize]);

  return windowSize;
};

export default useWindowSize;

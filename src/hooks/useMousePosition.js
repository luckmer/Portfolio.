import { useEffect, useState, useMemo } from "react";

const useMousePosition = () => {
  const [MousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const mousePosition = useMemo(() => MousePosition, [MousePosition]);

  return mousePosition;
};

export default useMousePosition;

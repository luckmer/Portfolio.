import { useState, useEffect, useMemo } from "react";

const UseWindowScrollHook = () => {
  const [Scrolling, setScrolling] = useState(false);
  const [ScrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > ScrollTop) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [ScrollTop]);

  const scrollTop = useMemo(() => ScrollTop, [ScrollTop]);
  const scrolling = useMemo(() => Scrolling, [Scrolling]);

  return { scrollTop, scrolling };
};

export default UseWindowScrollHook;

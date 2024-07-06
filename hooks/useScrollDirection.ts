import { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;

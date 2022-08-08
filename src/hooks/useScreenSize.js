import { useLayoutEffect, useState } from "react";

export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState(null);
  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  return screenSize;
}

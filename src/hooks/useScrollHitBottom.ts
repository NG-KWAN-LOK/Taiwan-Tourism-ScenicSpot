import { useEffect } from "react";

const useScrollHitBottom = (callback: () => void, disable?: boolean): void => {
  useEffect(() => {
    if (disable) return;
    const onScroll = () => {
      if (
        window.innerHeight * 1.1 + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        callback();
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [disable, callback]);
};

export default useScrollHitBottom;

import { useEffect } from "react";

export const SCREEN = {
  DESKTOP: "DESKTOP",
  TABLET: "TABLET",
  MOBILE: "MOBILE",
};

export const BREAKPOINT = {
  XL: { label: "XL", minWidth: 1200 },
  LG: { label: "LG", minWidth: 1024 },
  MD: { label: "MD", minWidth: 768 },
  SM: { label: "SM", minWidth: 576 },
};

/**
 * Set click outside menu by customized hook.
 * @param {reference} ref connect jsx reference.
 * @param {function} handler set the new state to close the menu.
 */
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      /* Clean up function. Remove event before component unmount. */
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const useResizeScreenModifile = (handler) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScreen = function () {
        if (window.innerWidth) {
          if (window.innerWidth <= 1023) {
            handler(SCREEN.TABLET);
          } else {
            handler(SCREEN.DESKTOP);
          }
        }
      };
      handleScreen();
      window.addEventListener("resize", handleScreen);
      return () => {
        /* Clean up function. Remove event before component unmount. */
        window.removeEventListener("resize", handleScreen);
      };
    }
  }, []);
};
export const usePauseBrowserScroll = () => {
  useEffect(() => {
    if (location.hash) {
      setTimeout(function () {
        const scrollToTable = document.getElementById(
          location.hash.replace("#", "")
        );
        if (scrollToTable) {
          window.scrollTo({
            top:
              scrollToTable.getBoundingClientRect().top +
              window.pageYOffset -
              80,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, []);
};

"use client";

import { useEffect } from "react";

export default function ViewportHeightFix() {
  useEffect(() => {
    const setAppHeight = () => {
      const h = window.visualViewport?.height ?? window.innerHeight;
      document.documentElement.style.setProperty("--app-height", `${h}px`);
    };

    setAppHeight();

    window.visualViewport?.addEventListener("resize", setAppHeight);
    window.visualViewport?.addEventListener("scroll", setAppHeight); // iOS sometimes needs this
    window.addEventListener("resize", setAppHeight);

    return () => {
      window.visualViewport?.removeEventListener("resize", setAppHeight);
      window.visualViewport?.removeEventListener("scroll", setAppHeight);
      window.removeEventListener("resize", setAppHeight);
    };
  }, []);

  return null;
}

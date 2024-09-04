"use client";

import { useEffect, useState } from "react";
const useMouseMover = () => {
  const [useMouseMover, setUseMouseMover] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e) => {
    setUseMouseMover({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return useMouseMover;
};

export default useMouseMover;

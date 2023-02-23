"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { RiSunFill } from "react-icons/ri";
import { BsFillMoonFill } from "react-icons/bs";
function DarkModeButton() {
  const [mounted, setmounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="Header-icon hover:bg-slate-200 animate-slowfade shadow-lg hover:scale-100 z-[99999] ">
      {currentTheme === "dark" ? (
        <RiSunFill
          onClick={() => setTheme("light")}
          className=" text-orange-500 text-[22px] hover:scale-125 transition-all duration-150"
        />
      ) : (
        <BsFillMoonFill
          onClick={() => setTheme("dark")}
          className=" text-cyan-500 text-[22px] hover:scale-125 transition-all duration-150"
        />
      )}
    </div>
  );
}

export default DarkModeButton;

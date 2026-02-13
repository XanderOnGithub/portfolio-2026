"use client";

import { useEffect, useState, ReactNode } from "react";
import { PlainThemeContext } from "../context";


export function PlainThemeProvider({ children }: { children: ReactNode }) {
  const [plainTheme, setPlainTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("plainTheme") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("plainTheme", String(plainTheme));
    
    if (plainTheme) {
      document.documentElement.setAttribute("plain-theme", "true");
    } else {
      document.documentElement.setAttribute("plain-theme", "false"); 
    }
  }, [plainTheme]);

  const togglePlainTheme = () => setPlainTheme((prev) => !prev);

  return (
    <PlainThemeContext.Provider value={{ plainTheme, setPlainTheme, togglePlainTheme }}>
      {children}
    </PlainThemeContext.Provider>
  );
}


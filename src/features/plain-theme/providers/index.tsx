"use client";

import { useEffect, useState, ReactNode } from "react";
import { PlainThemeContext } from "../context";


export function PlainThemeProvider({ children }: { children: ReactNode }) {
  const [simpleMode, setSimpleMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("simpleMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("simpleMode", String(simpleMode));
    
    if (simpleMode) {
      document.documentElement.setAttribute("plain", "true");
    } else {
      document.documentElement.setAttribute("plain", "false"); 
    }
  }, [simpleMode]);

  const toggleSimpleMode = () => setSimpleMode((prev) => !prev);

  return (
    <PlainThemeContext.Provider value={{ simpleMode, setSimpleMode, toggleSimpleMode }}>
      {children}
    </PlainThemeContext.Provider>
  );
}


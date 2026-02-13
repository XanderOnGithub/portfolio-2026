import { useContext } from "react";
import { PlainThemeContext } from "../context";

export function usePlainTheme() {
  const context = useContext(PlainThemeContext);
  if (context === undefined) {
    throw new Error("usePlainTheme must be used within a PlainThemeProvider");
  }
  return context;
}
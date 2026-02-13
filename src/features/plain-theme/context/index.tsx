import { createContext } from "react";
import { PlainThemeContextType } from "../providers/types";

export const PlainThemeContext = createContext<PlainThemeContextType | undefined>(undefined);

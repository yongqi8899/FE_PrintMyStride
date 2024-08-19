import { createContext, useState } from "react";
export const ThemeContext = createContext("light");

export default function ThemeContextProvider({ children }) {
  const [theme, useTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme, useTheme}}>{children}</ThemeContext.Provider>
  );
}

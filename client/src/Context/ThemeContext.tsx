import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextProps = {
  children: ReactNode;
};

type ThemeContextI = {
  theme: string;
  changeTheme: () => void;
};

const ThemeContext = createContext({} as ThemeContextI);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme((prev: string) => {
      if (prev === "light") {
        return (prev = "dark");
      } else {
        return (prev = "light");
      }
    });
  }

  const value = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

import { createContext, ReactNode, useState, useEffect } from "react";
import ICountry from "../models/ICountry";
import axios from "axios";

interface Props {
  children?: ReactNode;
}

const Context = createContext<any | null>(null);

export function ContextProvider({ children }: Props) {
  const [countries, setCountries] = useState<ICountry[] | []>([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [userInput, setUserInput] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
    }
    fetchData();
  }, []);

  const value = {
    countries,
    setCountries,
    selectedRegion,
    setSelectedRegion,
    userInput,
    setUserInput,
    theme,
    setTheme,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;

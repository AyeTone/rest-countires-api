import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import ICountry from "../models/ICountry";
import axios from "axios";

type CountriesContextProps = {
  children: ReactNode;
};

type CountriesContextI = {
  search: string;
  selectedRegion: string;
  countries: ICountry[];
  showRegions: boolean;
  changeSelectedRegion: (region: string) => void;
  updateSearch: (input: string) => void;
  toggleShowRegions: () => void;
};

const CountriesContext = createContext({} as CountriesContextI);

export function useCountriesContext() {
  return useContext(CountriesContext);
}

export function CountriesContextProvider({ children }: CountriesContextProps) {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [showRegions, setShowRegions] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
    }
    fetchData();
  }, []);

  function toggleShowRegions() {
    setShowRegions((prev) => !prev);
  }

  function updateSearch(e: string) {
    setSearch(e);
  }

  function changeSelectedRegion(region: string) {
    setSelectedRegion(region);
  }

  const values = {
    countries,
    setCountries,
    selectedRegion,
    changeSelectedRegion,
    search,
    updateSearch,
    showRegions,
    toggleShowRegions,
  };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
}

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
  loading: boolean;
  hasMore: boolean;
  sliceAmount: number;
  changeSelectedRegion: (region: string) => void;
  updateSearch: (input: string) => void;
  toggleShowRegions: () => void;
  addMoreCountries: () => void;
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
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [sliceAmount, setSliceAmount] = useState(12);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  function addMoreCountries() {
    if (countries.length <= sliceAmount) {
      setHasMore(false);
    } else {
      setTimeout(() => setSliceAmount((prev) => (prev += 12)), 1000);
    }
  }

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
    loading,
    addMoreCountries,
    hasMore,
    sliceAmount,
  };

  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
}

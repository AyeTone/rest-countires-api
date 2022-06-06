import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar";
import axios from "axios";
import Context from "./Context/CountriesContext";
import ICountry from "./models/ICountry";

function App() {
  const [countries, setCountries] = useState<ICountry[] | []>([]);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://restcountries.com/v2/all");
      setCountries(res.data);
    }
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        countries,
        setCountries,
        selectedRegion,
        setSelectedRegion,
        userInput,
        setUserInput,
      }}
    >
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </Context.Provider>
  );
}

export default App;

import { useContext, useState } from "react";
import Context from "../Context/CountriesContext";
import Country from "./Country";
import ICountry from "../models/ICountry";
import Details from "./Details";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Countries = () => {
  const { countries, selectedRegion, userInput } = useContext(Context);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<
    JSX.Element | undefined
  >();

  function toggleDetails(name: string) {
    if (name) {
      setShowDetails(true);
      countries.map((country: ICountry, id: number) => {
        if (name === country.name) {
          setSelectedCountry(
            <Details key={id} toggleDetails={toggleDetails} country={country} />
          );
        }
        return undefined;
      });
    } else setShowDetails(false);
  }

  const displayCountries = countries
    .filter((country: ICountry) => {
      const { region } = country;

      if (selectedRegion === "Filter by Region") return country;
      else if (selectedRegion === region) return country;
      else return undefined;
    })

    .filter((country: ICountry) => {
      const { name } = country;
      const lowerCasedCountry = name.toLowerCase();

      if (userInput === "") return country;
      else if (lowerCasedCountry.includes(userInput)) return country;
    })

    .map((country: ICountry, id: number) => {
      const { flag, name, region, capital, population } = country;

      return (
        <Country
          key={id}
          name={name}
          flag={flag}
          region={region}
          capital={capital}
          population={population}
          toggleDetails={toggleDetails}
        />
      );
    });

  return (
    <main className="countries">
      {!showDetails && (
        <>
          <div className="countries__search">
            <SearchBar />
            <Filter />
          </div>
          <section className="countries__list">{displayCountries}</section>
        </>
      )}
      {showDetails && selectedCountry}
    </main>
  );
};

export default Countries;

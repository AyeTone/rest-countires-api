import { useContext } from "react";
import Context from "../Context/CountriesContext";
import Country from "./Country";
import ICountry from "../models/ICountry";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Countries = () => {
  const { countries, selectedRegion, userInput } = useContext(Context);

  const displayCountries = countries
    .filter((country: ICountry) => {
      const { region } = country;

      if (selectedRegion === "Filter by Region") return country;
      else if (selectedRegion === region) return country;
      else return null;
    })

    .filter((country: ICountry) => {
      const { name } = country;
      const lowerCasedCountry = name.toLowerCase();

      if (userInput === "") return country;
      else if (lowerCasedCountry.includes(userInput)) return country;
      else return null;
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
        />
      );
    })

    .slice(0, 12);

  return (
    <main className="countries">
      <div className="countries__wrapper">
        <div className="countries__search">
          <SearchBar />
          <Filter />
        </div>
        <section className="countries__list">{displayCountries}</section>
      </div>
    </main>
  );
};

export default Countries;

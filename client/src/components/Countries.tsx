import Country from "./Country";
import ICountry from "../models/ICountry";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useCountriesContext } from "../Context/CountriesContext";
import Skeleton from "./UI/Skeleton";

const Countries = () => {
  const { countries, selectedRegion, search } = useCountriesContext();

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

      if (search === "") return country;
      else if (lowerCasedCountry.includes(search)) return country;
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
        <section className="countries__list">
          <Skeleton />
          {displayCountries}
        </section>
      </div>
    </main>
  );
};

export default Countries;

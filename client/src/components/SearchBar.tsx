import { HiOutlineSearch } from "react-icons/hi";
import { useCountriesContext } from "../Context/CountriesContext";

const SearchBar = () => {
  const { search, updateSearch } = useCountriesContext();

  return (
    <form className="search-bar">
      <HiOutlineSearch className="search-bar__icon" />
      <input
        value={search}
        className="search-bar__input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => updateSearch(e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default SearchBar;

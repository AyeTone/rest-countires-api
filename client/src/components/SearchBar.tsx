import { useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Context from "../Context/CountriesContext";

const SearchBar = () => {
  const { userInput, setUserInput, theme } = useContext(Context);

  return (
    <form className="search">
      <HiOutlineSearch className={`search__icon ${theme}`} />
      <input
        value={userInput}
        className="search__input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setUserInput(e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default SearchBar;

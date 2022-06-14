import { useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import Context from "../Context/CountriesContext";

const SearchBar = () => {
  const { userInput, setUserInput } = useContext(Context);

  return (
    <form className="search-bar">
      <HiOutlineSearch className="search-bar__icon" />
      <input
        value={userInput}
        className="search-bar__input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => setUserInput(e.target.value.toLowerCase())}
      />
    </form>
  );
};

export default SearchBar;

import { MdKeyboardArrowDown } from "react-icons/md";
import { useCountriesContext } from "../Context/CountriesContext";

const Filter = () => {
  const {
    selectedRegion,
    changeSelectedRegion,
    toggleShowRegions,
    showRegions,
  } = useCountriesContext();

  const options = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const option = options.map((opt: string, id) => {
    return (
      <div
        className={
          opt !== selectedRegion
            ? "filter__options--item"
            : "filter__options--item selected"
        }
        key={id}
      >
        <label
          htmlFor={opt}
          className="filter__options--label"
          onClick={(e: any) => changeSelectedRegion(e.target.htmlFor)}
        >
          {opt === "Filter by Region" ? "Reset" : opt}
        </label>
        <input
          className="filter__options--radio"
          type="radio"
          name="options"
          id={opt}
          value={opt}
        />{" "}
      </div>
    );
  });

  return (
    <div className="filter">
      <div onClick={toggleShowRegions} className="filter__select">
        <p className="filter__select--current">{selectedRegion}</p>
        <MdKeyboardArrowDown className="filter__select--arrow" />

        {showRegions && <div className="filter__options">{option}</div>}
      </div>
    </div>
  );
};

export default Filter;

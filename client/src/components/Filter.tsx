import React, { useContext, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Context from "../Context/CountriesContext";

const Filter = () => {
  const { selectedRegion, setSelectedRegion } = useContext(Context);
  const [showOptions, setShowOptions] = useState(false);

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
          onClick={(e: any) => setSelectedRegion(e.target.htmlFor)}
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
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="filter__select"
      >
        <p className="filter__select--current">{selectedRegion}</p>
        <MdKeyboardArrowDown className="filter__select--arrow" />

        {showOptions && <div className="filter__options">{option}</div>}
      </div>
    </div>
  );
};

export default Filter;

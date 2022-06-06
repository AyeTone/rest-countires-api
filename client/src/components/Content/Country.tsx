import React from "react";

interface Props {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  toggleDetails: Function;
}

const Country = (props: Props) => {
  const { flag, name, population, region, capital, toggleDetails } = props;

  const stringedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div onClick={() => toggleDetails(name)} className="country">
      <img className="country__flag" src={flag} alt={`${name} flag`} />
      <div className="country__content">
        <h1 className="name"> {name} </h1>
        <div className="stats">
          <p className="stat">
            Population: <span className="value">{stringedPopulation}</span>{" "}
          </p>
          <p className="stat">
            Region: <span className="value">{region}</span>{" "}
          </p>
          <p className="stat">
            Capital: <span className="value">{capital}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;

import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const stringedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div onClick={() => navigate(`${name}`)} className="country">
      <img className="country__flag" src={flag} alt={`${name} flag`} />
      <div className="country__desc">
        <h1 className="country__desc--name"> {name} </h1>
        <div className="country__stats">
          <p className="country__stats--item">
            Population:{" "}
            <span className="country__stats--value">{stringedPopulation}</span>{" "}
          </p>
          <p className="country__stats--item">
            Region: <span className="country__stats--value">{region}</span>{" "}
          </p>
          <p className="country__stats--item">
            Capital: <span className="country__stats--value">{capital}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;

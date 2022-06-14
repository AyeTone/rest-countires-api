import ICountry from "../models/ICountry";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import Context from "../Context/CountriesContext";

interface Props {
  country: ICountry;
  toggleDetails: Function;
}

const Details = (props: Props) => {
  const { countries } = useContext(Context);
  const { country, toggleDetails } = props;
  const {
    name,
    region,
    population,
    capital,
    topLevelDomain,
    flag,
    nativeName,
    subregion,
    currencies,
    languages,
    borders,
  } = country;

  const spreadLangs = languages.map((lang, i) => {
    let lastLang = i + 1 === languages.length;
    let { name } = lang;

    return (
      <span key={i} className="details__stats--value">
        {!lastLang ? `${name}, ` : `${name}`}
      </span>
    );
  });

  const borderCountries = borders?.slice(0, 3)?.map((border: string, id) => {
    let match = countries.filter((coun: ICountry) => {
      if (border === coun.alpha3Code) return coun.name;
    });
    let name = match[0].name;

    return (
      <p
        onClick={() => toggleDetails(name)}
        key={id}
        className="details__borders--item"
      >
        {name}
      </p>
    );
  });

  const stringedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="details">
      <button className="details__back-btn" onClick={() => toggleDetails()}>
        <BsArrowLeft /> Back
      </button>
      <div className="details__content">
        <img
          className="details__content--flag"
          src={flag}
          alt={`${name} flag`}
        />
        <div className="details__desc">
          <h1 className="details__desc--name"> {name} </h1>
          <div className="details__stats--tablet-view">
            <div className="details__stats--primary">
              <p className="details__stats--item">
                Natvie Name:{" "}
                <span className="details__stats--value">{nativeName}</span>{" "}
              </p>
              <p className="details__stats--item">
                Population:{" "}
                <span className="details__stats--value">
                  {stringedPopulation}
                </span>{" "}
              </p>
              <p className="details__stats--item">
                Region: <span className="details__stats--value">{region}</span>{" "}
              </p>
              <p className="details__stats--item">
                Sub Region:{" "}
                <span className="details__stats--value">{subregion}</span>{" "}
              </p>
              <p className="details__stats--item">
                Capital:{" "}
                <span className="details__stats--value">{capital}</span>{" "}
              </p>
            </div>
            <div className="details__stats--secondary">
              <p>
                Top Level Domain:{" "}
                <span className="details__stats--value">
                  {" "}
                  {topLevelDomain}{" "}
                </span>
              </p>
              <p>
                Currenices:{" "}
                <span className="details__stats--value">
                  {" "}
                  {currencies[0].name}{" "}
                </span>
              </p>
              {/* Span for languages in in spreadLangs above */}
              <p>Languages: {spreadLangs}</p>
            </div>
          </div>
          <div className="details__borders">
            <h2 className="details__borders--title">Border Countries:</h2>
            <div className="details__borders--list">{borderCountries}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

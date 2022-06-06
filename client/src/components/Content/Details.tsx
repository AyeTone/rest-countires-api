import ICountry from "../../models/ICountry";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";
import Context from "../../Context/CountriesContext";

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
      <span key={i} className="value">
        {!lastLang ? `${name}, ` : `${name}`}
      </span>
    );
  });

  const borderCountries = borders.slice(0, 3).map((border: string, id) => {
    let match = countries.filter((coun: ICountry) => {
      if (border === coun.alpha3Code) return coun.name;
    });
    let name = match[0].name;

    return (
      <p onClick={() => toggleDetails(name)} key={id} className="border">
        {name}
      </p>
    );
  });

  const stringedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="details">
      <button className="details__back" onClick={() => toggleDetails()}>
        <BsArrowLeft /> Back
      </button>
      <div className="details__content">
        <img className="dContent__flag" src={flag} alt={`${name} flag`} />
        <div className="desktop__dContent">
          <h1 className="dContent__country"> {name} </h1>
          <div className="desktop__stats">
            <div className="dContent__stats">
              <p className="stat">
                Natvie Name: <span className="value">{nativeName}</span>{" "}
              </p>
              <p className="stat">
                Population: <span className="value">{stringedPopulation}</span>{" "}
              </p>
              <p className="stat">
                Region: <span className="value">{region}</span>{" "}
              </p>
              <p className="stat">
                Sub Region: <span className="value">{subregion}</span>{" "}
              </p>
              <p className="stat">
                Capital: <span className="value">{capital}</span>{" "}
              </p>
            </div>
            <div className="dContent__stats2">
              <p>
                Top Level Domain:{" "}
                <span className="value"> {topLevelDomain} </span>
              </p>
              <p>
                Currenices:{" "}
                <span className="value"> {currencies[0].name} </span>
              </p>
              <p>Languages: {spreadLangs}</p>
            </div>
          </div>
          <div className="dContent__borders">
            <h2>Border Countries:</h2>
            <div className="dcb__wrapper">{borderCountries}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

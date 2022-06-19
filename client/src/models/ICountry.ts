export default interface ICountry {
  name: string;
  alpha3Code: string;
  nativeName: string;
  population: number;
  region: string;
  capital: string;
  topLevelDomain: [];
  currencies: [{ name: String }];
  subregion: string;
  languages: [{ name: string }];
  flag: string;
  borders: [];
}

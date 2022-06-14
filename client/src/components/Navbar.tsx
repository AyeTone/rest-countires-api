import { useContext } from "react";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import Context from "../Context/CountriesContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(Context);

  function changeTheme() {
    setTheme((prev: string) => {
      if (prev === "light") {
        return (prev = "dark");
      } else {
        return (prev = "light");
      }
    });
  }

  return (
    <nav className="navbar">
      <h1 className="navbar__title">Where in the world?</h1>
      <button onClick={() => changeTheme()} className="navbar__theme-btn">
        {" "}
        {theme === "light" ? (
          <BsMoon className="moon" />
        ) : (
          <BsFillMoonFill className="moon" />
        )}{" "}
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;

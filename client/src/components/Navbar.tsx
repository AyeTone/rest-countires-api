import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { useThemeContext } from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, changeTheme } = useThemeContext();

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

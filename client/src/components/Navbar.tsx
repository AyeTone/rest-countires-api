import { BsMoon } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Where in the world?</h1>
      <button className="navbar__theme">
        {" "}
        <BsMoon className="moon" /> Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;

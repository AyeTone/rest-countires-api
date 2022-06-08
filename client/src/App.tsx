import { useContext } from "react";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar";
import Context from "./Context/CountriesContext";

function App() {
  const { theme } = useContext(Context);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Content />
    </div>
  );
}

export default App;

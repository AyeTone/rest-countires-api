import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Context from "./Context/CountriesContext";

const Countries = React.lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./components/Countries")), 4000);
  });
});

function App() {
  const { theme } = useContext(Context);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Countries />
    </div>
  );
}

export default App;

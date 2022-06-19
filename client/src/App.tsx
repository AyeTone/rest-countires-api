import React, { useContext } from "react";

import Context from "./Context/CountriesContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useContext(Context);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/rest-countries-api/" element={<Home />} />
          <Route path="/rest-countries-api/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

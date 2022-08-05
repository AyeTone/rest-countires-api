import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import { useThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

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

import React, { useContext, Suspense } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Context from "./Context/CountriesContext";

const Countries = React.lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./components/Countries")), 7000);
  });
});

function App() {
  const { theme } = useContext(Context);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Countries />
      </Suspense>
    </div>
  );
}

export default App;

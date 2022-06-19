import React, { Suspense } from "react";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
const Countries = React.lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("../components/Countries")), 2000);
  });
});

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Countries />
      </Suspense>
    </div>
  );
};

export default Home;

import React, { Suspense } from "react";
import Loading from "../Loading";

const Countries = React.lazy(() => {
  return new Promise((resolve: any) => {
    setTimeout(() => resolve(import("./Countries")), 4000);
  });
});

const Content = () => {
  return (
    <main className="content">
      <Suspense fallback={<Loading />}>
        <Countries />
      </Suspense>
    </main>
  );
};

export default Content;

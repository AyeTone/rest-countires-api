import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Skeletons = () => {
  return (
    <section className="countries__list">
      {Array(12)
        .fill(0)
        .map((_, ind) => (
          <div className="country" key={ind}>
            <Skeleton className="country__flag" />
            <div className="country__desc">
              <h1 className="country__desc--name">
                <Skeleton />
              </h1>
              <div className="country__stats">
                <p className="country__stats--item">
                  <Skeleton />
                </p>
                <p className="country__stats--item">
                  <Skeleton />
                </p>
                <p className="country__stats--item">
                  <Skeleton />
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Skeletons;

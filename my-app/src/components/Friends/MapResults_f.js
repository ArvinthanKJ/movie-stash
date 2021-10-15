import React from "react";
import Results from "./Results_f";
export const MapResults = ({ result, flagf }) => {
  return (
    <div className="container">
      <section className="results">
        {result.map((data) => (
          <Results key={data._id} data={data} flagf={flagf} />
        ))}
      </section>
    </div>
  );
};
export default MapResults;

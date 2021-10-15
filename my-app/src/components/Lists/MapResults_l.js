import React from "react";
import Results from "./Results_l";

export const MapResults = ({ result, flag0 }) => {
  return (
    <div className="container">
      <section className="results">
        {result.map((movie) => (
          <Results key={movie.imdbID} movie={movie} flag0={flag0} />
        ))}
      </section>
    </div>
  );
};
export default MapResults;

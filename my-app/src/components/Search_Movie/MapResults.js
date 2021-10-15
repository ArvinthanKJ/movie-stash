import React from "react";
import Results from "./Results";

export const MapResults = ({ result }) => {
  return (
    <div className="container">
      <section className="results">
        {result.map((movie) => (
          <Results key={movie.imdbID} movie={movie} />
        ))}
      </section>
    </div>
  );
};
export default MapResults;

import React from "react";

export const Search = ({ handleInput, search }) => {
  console.log(localStorage);

  return (
    <div className="container text-center">
      <section className="searchbox-wrap">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="searchbox"
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
      <br /> <br />
    </div>
  );
};
export default Search;

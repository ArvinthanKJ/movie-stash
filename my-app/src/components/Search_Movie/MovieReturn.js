import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import MapResults from "./MapResults";
import Nav from "../Nav";

export const MovieReturn = () => {
  const apiUrl = "http://www.omdbapi.com/?apikey=20a2c003";
  console.log("yyyyyyyyyyyyyyyyy");
  console.log(localStorage.getItem("userID"));
  const [state, setState] = useState({
    searchInput: "",
    searchResults: [],
    flag: null,
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.searchInput).then(({ data }) => {
        let result = data;

        setState((prevState) => {
          return { ...prevState, searchResults: result };
        });
        setState((prevState) => {
          return { ...prevState, flag: 1 };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, searchInput: s };
    });
  };
  useEffect(() => {
    console.log(state.searchResults);
  });
  return (
    <>
      <Nav />

      <div className="mx container-lg shadow-lg ">
        <h1 className="text-center fw-bold text-light m-2x p-2 border border-3 rounded-pill shadow-sm">
          Movie Database
        </h1>

        <Search handleInput={handleInput} search={search} />

        {state.flag && <MapResults result={state.searchResults.Search} />}
      </div>
    </>
  );
};
export default MovieReturn;

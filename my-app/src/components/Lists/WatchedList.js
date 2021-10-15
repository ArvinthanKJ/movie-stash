import React, { useEffect, useState } from "react";
import axios from "axios";
import MapResults from "./MapResults_l";
import Nav from "../Nav";

export const MovieReturn = () => {
  const flag0 = 2;
  const [state, setState] = useState({
    searchResults: [],
    flag: null,
    rand: 0,
  });
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };

  useEffect(() => {
    var random = Math.random() * 20;
    setState((prevState) => {
      return { ...prevState, rand: random };
    });
  });
  useEffect(() => {
    console.log(localStorage);
    axios
      .post(
        "http://127.0.0.1:4000/watchedlist",
        { user: localStorage.getItem("userID") },
        config
      )
      .catch((error) => console.log(error));
    axios
      .get("http://127.0.0.1:4000/watchedlist", config)
      .then((response) => {
        var temp = response.data;
        setState((prevState) => {
          return { ...prevState, searchResults: temp, flag: 1 };
        });
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Nav />

      <div className="mx container-lg shadow-lg ">
        <h1 className="text-center fw-bold text-light m-2x p-2 border border-3 rounded-pill shadow-sm">
          Watched List
        </h1>
        <br /> <br />
        {state.flag && (
          <MapResults result={state.searchResults} flag0={flag0} />
        )}
      </div>
    </>
  );
};
export default MovieReturn;

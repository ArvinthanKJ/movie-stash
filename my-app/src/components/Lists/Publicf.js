import React, { useEffect, useState } from "react";
import axios from "axios";
import MapResults from "./MapResults_l";
import Nav from "../Nav";

export const Publicf = () => {
  const flag0 = 4;
  const [state, setState] = useState({
    searchResults: [],
    flag: null,
  });
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };

  useEffect(() => {
    axios
      .get(
        "http://127.0.0.1:4000/publicf?user=" +
          localStorage.getItem("friendID"),
        config
      )
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
          Public List
        </h1>
        <br />
        {state.flag && (
          <MapResults result={state.searchResults} flag0={flag0} />
        )}
      </div>
    </>
  );
};
export default Publicf;

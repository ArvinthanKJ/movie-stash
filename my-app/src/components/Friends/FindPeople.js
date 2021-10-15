import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import MapResults from "./MapResults_f";

export const FindPeople = () => {
  var temp;
  const [state, setState] = useState({ data: "", flag: 0 });
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };
  useEffect(async () => {
    axios
      .get(
        "http://127.0.0.1:4000/findpeople?user=" +
          localStorage.getItem("userID"),
        config
      )
      .then((response) => {
        temp = response.data;
        console.log(temp);
        setState((prevState) => {
          return { ...prevState, data: temp, flag: 1 };
        });
      })
      .then(() => {
        console.log("+++++++++++++++++++++++++");
        console.log(state);
        console.log("+++++++++++++++++++++++++");
      });
  }, []);
  if (state.data.length > 0) {
    return (
      <>
        <Nav />

        <div className="mx container-lg shadow-lg ">
          <h1 className="text-center fw-bold text-light m-2x p-2 border border-3 rounded-pill shadow-sm">
            Find People
          </h1>
          <br />
          {state.flag && <MapResults result={state.data} flagf={state.flag} />}
        </div>
      </>
    );
  } else
    return (
      <div>
        <Nav />

        <div className="mx container-lg shadow-lg ">
          <h1 className="text-center fw-bold text-light m-2x p-2 border border-3 rounded-pill shadow-sm">
            Find People
          </h1>
        </div>
      </div>
    );
};
export default FindPeople;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function Results({ data, flagf }) {
  const history = useHistory();

  const [x, setX] = useState(1);
  const config = {
    headers: {
      "Content-Type": "application/JSON",
    },
  };

  const send = async (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    axios
      .post(
        "http://127.0.0.1:4000/findpeople",
        { tar: data._id, user: localStorage.getItem("userID"), flag: 0 },
        config
      )
      .catch((error) => console.log(error));
  };

  const add = async (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    axios
      .post(
        "http://127.0.0.1:4000/requests",
        { tar: data._id, user: localStorage.getItem("userID"), flag: 0 },
        config
      )
      .catch((error) => console.log(error));
  };

  const del = async (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    axios
      .post(
        "http://127.0.0.1:4000/requests",
        { tar: data._id, user: localStorage.getItem("userID"), flag: 1 },
        config
      )
      .catch((error) => console.log(error));
  };

  const listf = async (event) => {
    event.preventDefault();
    localStorage.setItem("friendID", data._id);

    history.push("/publicf");
  };
  if (x)
    if (localStorage.getItem("userID") != data._id) {
      if (flagf == 1) {
        return (
          <>
            <div id="transform">
              <div className="container">
                <div className="pic shadow-lg">
                  <div className="text-center">
                    <p>
                      <strong>{data.name}</strong>
                    </p>
                    <button
                      type="submit"
                      value={data._id}
                      onClick={send}
                      className="btn btn-outline-success"
                    >
                      Send Request
                    </button>
                    <button
                      type="submit"
                      value={data._id}
                      onClick={listf}
                      className="btn btn-outline-secondary"
                    >
                      Public List
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      } else if (flagf == 2) {
        return (
          <>
            <div id="transform">
              <div className="container">
                <div className="pic shadow-lg">
                  <div className="text-center">
                    <p>
                      <strong>{data.name}</strong>
                    </p>
                    <br />
                    <button
                      type="submit"
                      value={data._id}
                      onClick={add}
                      className="btn btn-outline-success"
                    >
                      Accept Request
                    </button>
                    <button
                      type="submit"
                      value={data._id}
                      onClick={del}
                      className="btn btn-outline-danger"
                    >
                      Delete Request
                    </button>

                    <button
                      type="submit"
                      value={data._id}
                      onClick={listf}
                      className="btn btn-outline-secondary"
                    >
                      Public List
                    </button>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </>
        );
      }
    } else return <div></div>;
}

export default Results;

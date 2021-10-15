import React, { useEffect, useState } from "react";
import axios from "axios";

function Results({ movie }) {
  const [add, setAdd] = useState(`https://www.imdb.com/title/${movie.imdbID}/`);
  const [x, setX] = useState(1);

  useEffect(() => {
    setAdd(`https://www.imdb.com/title/${movie.imdbID}/`);
  }, []);
  const watched = (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    axios
      .post(
        "http://127.0.0.1:4000/search",
        { movie: movie, user: localStorage.getItem("userID"), flag: 0 },
        config
      )
      .catch((error) => console.log(error));
  };
  const bucket = (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    axios
      .post(
        "http://127.0.0.1:4000/search",
        { movie: movie, user: localStorage.getItem("userID"), flag: 1 },
        config
      )
      .catch((error) => console.log(error));
  };
  const public1 = (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    axios
      .post(
        "http://127.0.0.1:4000/search",
        { movie: movie, user: localStorage.getItem("userID"), flag: 3 },
        config
      )
      .catch((error) => console.log(error));
  };
  if (x)
    return (
      <div id="transform">
        <div className="container">
          <div className="pic shadow-lg">
            <div className="row justify-content-lg">
              <div className="col-md-auto">
                <img src={movie.Poster} alt="" width="150" height="240 " />
              </div>
              <div className="col-md-auto">
                <h3>{movie.Title}</h3>
                <p>{movie.Type}</p>
                <p>{movie.Year}</p>
                <a
                  href={add}
                  className="btn btn-outline-warning"
                  target="_blank"
                >
                  IMDB
                </a>
                <br />
                <br />
                <button
                  type="submit"
                  value={movie.imdbID}
                  onClick={watched}
                  className="btn btn-outline-primary"
                >
                  Watched list
                </button>
                &ensp;
                <button
                  type="submit"
                  value={movie.imdbID}
                  onClick={bucket}
                  className="btn btn-outline-success"
                >
                  Bucket list
                </button>
                &ensp;
                <button
                  type="submit"
                  value={movie.imdbID}
                  onClick={public1}
                  className="btn btn-outline-secondary"
                >
                  Public list
                </button>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    );
  else return <div></div>;
}

export default Results;

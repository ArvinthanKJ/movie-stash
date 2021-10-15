import React, { useEffect, useState } from "react";
import axios from "axios";

function Results({ movie, flag0 }) {
  var visibility;
  var i = 1;
  if (flag0 == 4) i = "";
  const [add, setAdd] = useState(`https://www.imdb.com/title/${movie.imdbID}/`);
  const [x, setX] = useState(1);
  useEffect(() => {
    visibility = "btn btn-outline-danger";
    setAdd(`https://www.imdb.com/title/${movie.imdbID}/`);
  }, []);
  const remove = async (event) => {
    event.preventDefault();
    setX(() => {
      return 0;
    });
    visibility = "d-none";
    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    await axios.post(
      "http://127.0.0.1:4000/search",
      {
        movie: movie,
        user: localStorage.getItem("userID"),
        flag: 2,
        flag0: flag0,
      },
      config
    );
  };
  if (x) {
    return (
      <>
        <div id="transform">
          <div className="container">
            <br />
            <div className="pic shadow-lg">
              <div className="row justify-content-lg">
                <div className="col-md-auto">
                  <img src={movie.Poster} alt="" width="170" height="260 " />
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
                  {i && (
                    <button
                      type="submit"
                      value={movie.imdbID}
                      onClick={remove}
                      className="btn btn-outline-danger"
                    >
                      Remove{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </>
    );
  } else return <div></div>;
}

export default Results;

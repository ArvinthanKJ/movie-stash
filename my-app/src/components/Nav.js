import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Nav = () => {
  const forceUpdate = () => {
    console.log("reload??");
    //window.location.reload();
  };
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark red">
        <div className="container-fluid">
          <a class="navbar-brand" href="#">
            Movie Database
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/search"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/watchedlist"
                  onClick={forceUpdate}
                  className="nav-link "
                  href="#"
                >
                  Watched List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/bucketlist"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Bucket List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/publiclist"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Public List
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/findpeople"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Find People
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/requests"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Friend requests
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/friends"
                  onClick={forceUpdate}
                  className="nav-link"
                  href="#"
                >
                  Friends
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;

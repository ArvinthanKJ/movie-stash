import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  var token;

  console.log(localStorage);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (event, data) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    await axios
      .post("http://127.0.0.1:4000/login", { user }, config)
      .then((response) => {
        console.log("zzzzzzzzzzzz");
        console.log(response.data);
        if (response.data.length > 0) {
          localStorage.setItem("userID", response.data);
          console.log(localStorage);

          history.push("/search");
        } else console.log("wrong credentials");
      });

    //.then(history.push("/search"));
    //console.log(user);
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          label="Username:"
          type="text"
          placeholder="Enter Email ID"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <br></br>
        <input
          label="Password:"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <div>
          <br></br>
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <Link to="/register" className="btn btn-outline-warning" href="#">
        Register
      </Link>
    </div>
  );
};
export default Login;

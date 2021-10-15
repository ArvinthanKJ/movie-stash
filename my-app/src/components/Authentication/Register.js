import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
//To parse JSON bodies

export const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name1: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (event, data) => {
    event.preventDefault();

    console.log("event");
    console.log(user);

    const config = {
      headers: {
        "Content-Type": "application/JSON",
      },
    };

    await axios
      .post("http://127.0.0.1:4000/register", { user }, config)
      .then(history.push("/"));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          label="Name:"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            setUser({ ...user, name1: e.target.value });
          }}
        />
        <br></br>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Register;

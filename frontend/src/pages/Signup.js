import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    if (!name || !email || !address || !password) {
      alert("Please fill in all the details.");
      return;
    }
    let result = await fetch(
      "https://foodapp-backend-izt0.onrender.com/signup",
      {
        method: "POST",
        body: JSON.stringify({ name, email, address, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="signup mt-5">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="name important"
        className="inputBox"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <label htmlFor="name" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="inputBox"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter your email"
      />
      <label htmlFor="name" className="form-label">
        Address
      </label>
      <input
        type="text"
        className="inputBox"
        name="address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        placeholder="Enter your Address"
      />
      <label htmlFor="name" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="inputBox"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Enter your password"
      />
      <div className="d-flex justify-content-between">
        <button
          type="submit"
          className="m-3 btn btn-success"
          onClick={collectData}
        >
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </div>
    </div>
  );
};

export default Signup;

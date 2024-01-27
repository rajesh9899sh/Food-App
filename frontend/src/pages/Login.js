import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all the details.");
      return;
    }
    let result = await fetch("https://food-backend-jfkj.onrender.com/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter valid Email-id or Password.");
    }
  };

  return (
    <div className="login mt-5">
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
      <label htmlFor="name" className="form-label mt-4">
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
          onClick={handleLogin}
        >
          Submit
        </button>
        <Link to="/signup" className="m-3 btn btn-danger">
          New user
        </Link>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log } from "./../../reducers/login";

const Login = () => {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [local, setLocal] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      if (result.data.token) {
        localStorage.setItem("token", result.data.token);
      }
      const data = {
        user: result.data.result,
        token: result.data.token,
      };
      console.log(data);
      dispatch(login(data))

      navigate("/task");
      console.log(result.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    setLocal(token);
  }, []);
  return (
    <div>
      <div className="con">
        <h1>Login</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="your email"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="your password"
        ></input>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login;

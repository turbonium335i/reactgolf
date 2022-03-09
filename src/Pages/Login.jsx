import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SignUp from "../Pages/SignUp";
import { Link } from "react-router-dom";
import KakaoLogin from "react-kakao-login";

const Login = ({ mstat, messageback }) => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div className="container">
      <h1 className="text-secondary">Login</h1>

      <form onSubmit={loginUser}>
        <input
          type="text"
          id="fname"
          name="username"
          placeholder="Username"
          autoFocus
        />{" "}
        &nbsp;
        <input
          type="password"
          id="lname"
          name="password"
          placeholder="Password"
        />
        &nbsp;
        <input
          type="submit"
          className="  btn-warning text-dark "
          value="Login"
        />
      </form>
      <br />

      <h4>or</h4>
      <br />
      <Link to="/signup" className="text-decoration-none ">
        <h1 className="text-secondary">Sign Up</h1>
      </Link>

      <KakaoLogin
        token={"4fbdfe3fa7422dc14858faeed558492c"}
        onSuccess={console.log}
      />
    </div>
  );
};

export default Login;

import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SignUp from "../Pages/SignUp";
import { Link, useNavigate } from "react-router-dom";
import KakaoLogin from "react-kakao-login";
import { Button } from "react-bootstrap";

const Login = ({ mstat, messageback }) => {
  let { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function kakaoOkay() {
    navigate("/");
    console.log("something went wrong");
  }

  return (
    <div className="container">
      <h1 className="text-secondary">Login</h1>

      <form onSubmit={loginUser}>
        <input type="text" id="fname" name="username" placeholder="Username" />{" "}
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
      <div>
        <Link to="/signup" className="text-decoration-none ">
          <Button variant="outline-success" size="lg" className="mb-2">
            Sign Up
          </Button>
          &nbsp;&nbsp;
        </Link>{" "}
        <KakaoLogin
          token={"4fbdfe3fa7422dc14858faeed558492c"}
          onSuccess={console.log}
          onFail={() => {
            kakaoOkay();
          }}
          onLogout={console.info}
          useLoginForm
        />{" "}
      </div>
    </div>
  );
};

export default Login;

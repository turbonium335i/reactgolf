import React, { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import SocialLogin from "../Components/SocialLogin";
import { BsFillPersonCheckFill } from "react-icons/bs";

const Login = ({ mstat, messageback }) => {
  let { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [checkForm, setCheckForm] = useState(false);

  function kakaoOkay() {
    navigate("/");
    console.log("something went wrong");
  }

  function formOkay() {
    const uForm = document.getElementById("fname").value;
    const pForm = document.getElementById("lname").value;

    if (uForm !== "" && pForm !== "") {
      setCheckForm(true);
    } else {
      setCheckForm(false);
    }
  }

  const disableBtnProps = {};
  if (checkForm === false) {
    disableBtnProps.disabled = true;
  } else {
    disableBtnProps.disabled = false;
  }

  return (
    <div className="container">
      <h1 className="text-secondary">Login</h1>

      <form onSubmit={loginUser}>
        <input
          type="text"
          id="fname"
          name="username"
          placeholder="Username"
          className="my-2"
        />{" "}
        &nbsp;
        <input
          type="password"
          id="lname"
          name="password"
          placeholder="Password"
          className="my-2"
          onChange={() => {
            formOkay();
          }}
        />
        &nbsp;
        <button
          type="submit"
          {...disableBtnProps}
          className="btn-sm  border border-success"
        >
          Login
        </button>
      </form>
      <br />

      <h4>or</h4>
      <br />
      <div>
        <Link to="/signup" className="text-decoration-none ">
          <Button variant="outline-success" size="lg" className="mb-2">
            <BsFillPersonCheckFill />
            &nbsp; Sign Up
          </Button>
          &nbsp;
        </Link>{" "}
        <Button variant="warning" size="lg" className="mb-2">
          <SocialLogin />
        </Button>
      </div>
    </div>
  );
};

export default Login;

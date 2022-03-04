import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { useState } from "react";

const SignUp = ({ mstat, messageback }) => {
  let [terms, setTerms] = useState(true);

  let navigate = useNavigate();

  const toggle = () => {
    if (terms === false) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  };

  let sendData = async () => {
    const api_userName = document.getElementById("userName").value;
    const api_nameName = document.getElementById("nameName").value;
    const api_email = document.getElementById("email").value;
    const api_password = document.getElementById("password").value;
    const api_password2 = document.getElementById("password2").value;

    if (
      api_password === api_password2 &&
      api_password.length > 6 &&
      api_userName !== "" &&
      api_userName.length > 6 &&
      api_nameName !== "" &&
      api_nameName.length > 1 &&
      api_email !== "" &&
      api_email.length > 6
    ) {
      console.log("data sent from front");

      fetch("https://pertinacity1.pythonanywhere.com/reactMakeUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          api_userName: api_userName,
          api_nameName: api_nameName,
          api_email: api_email,
          api_password: api_password,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          if (data === "SomethingWrong") {
            messageback("Error! Duplicate Username or Email");
            mstat();
          } else {
            messageback("Account Created: " + api_userName);
            mstat();
            // navigate("/login");
          }
        });
    } else {
      messageback("Error! Form Incorrect");
      mstat();
    }
  };

  return (
    <div className="container">
      <form>
        <h3 className="d-inline-block mb-0 align-bottom">
          OnWear Member Sign Up
        </h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            id="userName"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="nameName"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-password"
            id="password2"
          />
        </div>
        <br />
        <div>
          <span className="text-primary" onClick={toggle}>
            Terms and Conditions{" "}
            <h5 className="text-danger d-inline ">
              <BsFillBookmarkStarFill />
            </h5>
          </span>

          {terms === true ? (
            <div className="container pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. <br /> <br /> Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          ) : (
            <div className="container pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          )}

          <br />
          <br />
        </div>
        <div className="  text-center">
          <button
            type="button"
            className="btn btn-lg btn-outline-success btn-block "
            onClick={sendData}
          >
            Sign Up
          </button>
          <br />
          <br />
          {/* <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p> */}
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SignUp;

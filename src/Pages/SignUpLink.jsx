import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const SignUpLink = () => {
  let { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <span className="text-success text-decoration-none nav-link"> </span>
      ) : (
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <span className="text-secondary text-decoration-none nav-link">
            SignUp
          </span>
        </Link>
      )}
    </>
  );
};

export default SignUpLink;

{
  /* 
className="text-decoration-none nav-link"
onClick={() => setExpanded(false)}
>
{" "}
SignUp
 */
}

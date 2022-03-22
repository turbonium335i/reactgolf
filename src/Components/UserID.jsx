import { useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
const UserID = ({ setKartCount }) => {
  let { user } = useContext(AuthContext);

  useEffect(() => {
    if (user !== null) {
      getKart();
    }
  }, []);

  let getKart = async () => {
    let response = await fetch(
      "https://pertinacity1.pythonanywhere.com/onwearkartapi",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.json();

    var kartLoop = [];
    var b = {};

    if (response.status === 200) {
      for (var i = 0; i < data.length; i++) {
        // get username from authcontext

        if (data[i]["customerUsername"] === user.username) {
          var pd = data[i]["products"];
          b = JSON.parse(pd.replace(/'/g, '"'));
          var c = Object.keys(b);
          var res = c.map((i) => Number(i));
          // var res = c.map(function (v) {
          //   return parseInt(v, 10);
          // });
          // setkart takes integers

          kartLoop = res;
          setKartCount(kartLoop, b);
          break;
        }
      }
    } else if (response.statusText === "Unauthorized") {
      console.log("200 error");
    }
  };

  return (
    <>
      {user ? (
        <span className="text-success">{user.first_name} </span>
      ) : (
        <span className="text-secondary">Guest</span>
      )}
    </>
  );
};

export default UserID;

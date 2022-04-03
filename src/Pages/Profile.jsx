import { useContext, useState, useEffect, Fragment } from "react";
import AuthContext from "../Context/AuthContext";
import DatePick from "../Components/DatePick";
import moment from "moment";
import { Button } from "react-bootstrap";

const Profile = ({ setKartCount }) => {
  let { user, logoutUser } = useContext(AuthContext);
  let [history, setHistory] = useState([]);
  let [loading, setLoading] = useState(true);
  let [orderJ, setOrderJ] = useState(null);

  // function DateOut(s, e) {
  //   setStartDate(moment(s).format("MM-DD-YYYY"));
  //   setEndDate(moment(e).format("MM-DD-YYYY"));
  //   // console.log(s.toDateString());
  //   // console.log(s.toLocaleString());
  //   console.log(moment(s).format("MM-DD-YYYY"));
  // }

  useEffect(() => {
    getKart();
    getHistory();
  }, []);

  function authKart() {
    console.log("clicked");
  }

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

    if (loading) {
      setLoading(false);
    }
  };

  let getHistory = async () => {
    let response = await fetch(
      "https://pertinacity1.pythonanywhere.com/onwearorderapi",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();

    var hisLoop = [];
    if (response.status === 200) {
      setHistory(data.reverse());
      for (var i = 0; i < data.length; i++) {
        if (data[i]["customerUsername"] === user.username) {
          if (typeof data[i].orderJson === "string") {
            data[i].orderJson = JSON.parse(
              data[i].orderJson.replace(/'/g, '"')
            );

            data[i].orderKartDates = JSON.parse(
              data[i].orderKartDates.replace(/'/g, '"')
            );

            hisLoop.push(data[i]);
          }
        }
      }
    } else if (response.statusText === "Unauthorized") {
      console.log("200 error");
    }
    setOrderJ(hisLoop);
  };

  function clearKart() {
    setKartCount([], []);
    logoutUser();
  }

  return (
    <div className="container text-dark">
      <p
        onClick={clearKart}
        style={{ cursor: "pointer", color: "red" }}
        className="text-end  "
      >
        <Button variant="outline-danger">LogOut</Button>
      </p>
      <span className="text-primary "> {user.username}'s Profile</span>
      {loading ? (
        <h1 className="text-primary">Loading History...</h1>
      ) : (
        <div>
          <h1 className="text-dark">
            {user.first_name}
            {"'s Order History"}
          </h1>{" "}
          <hr />
        </div>
      )}
      {orderJ &&
        orderJ.map((item, index) => {
          if (item.customerUsername === user.username) {
            return (
              <div key={item.id} className="   text-primary">
                {index + 1}
                {". "}
                {moment(item.date_ordered).format("MM-DD-YYYY - HH:mm")} -{" "}
                {item.customerName} / Order Status:
                <span className="text-dark  fw-bold">
                  {" "}
                  {item.orderStatus}
                </span>{" "}
                <br />
                {item.orderJson.map((s, index) => (
                  <Fragment key={index}>
                    <p className="my-0 text-secondary">
                      <img src={s.imglink} height="60vh" width="auto" /> &nbsp;
                      {index + 1}. {s.brand} {s.title} {s.rentalprice} <br />
                      <li className="text-warning text-center my-0 bg-secondary">
                        {" "}
                        {item.orderKartDates[s.id][0]} &#8594;{" "}
                        {item.orderKartDates[s.id][1]}
                      </li>
                    </p>
                  </Fragment>
                ))}
              </div>
            );
          }
        })}
    </div>
  );
};

export default Profile;

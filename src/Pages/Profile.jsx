import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import DatePick from "../Components/DatePick";
import moment from "moment";
import { Button } from "react-bootstrap";

const Profile = ({ setKartCount }) => {
  let { user, logoutUser } = useContext(AuthContext);
  let [history, setHistory] = useState([]);
  let [loading, setLoading] = useState(true);

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

    if (response.status === 200) {
      setHistory(data.reverse());
      console.log("order history: ", data);
    } else if (response.statusText === "Unauthorized") {
      console.log("200 error");
    }
  };

  function clearKart() {
    setKartCount([], []);
    logoutUser();
  }

  function convert(dat) {
    // make json notation has double quotes, this freaken took forever to find out
    // var b = dat.replace(/'/g, '"');
    // var c = JSON.parse(b);
    // var c = JSON.parse(JSON.stringify(data));
    // console.log(typeof c);
    // console.log(c["outDates"]);
  }
  if (history.length > 0) {
    // console.log(history[0]["orderJson"]);

    // var p = JSON.parse(
    //   JSON.stringify(history[0].orderJson.slice(0, -1).slice(1))
    // );
    var p = history[0].orderJson;
    // var s = p.replace(/'/g, '"');
    // var c = JSON.parse("'" + p + "'");
    // var d = JSON.parse(b);
    // s = JSON.parse(s);

    console.log(p);
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
          <h5 className="text-secondary"> {user.username}</h5>{" "}
        </div>
      )}
      {history.map((item, index) => {
        if (item.customerUsername === user.username) {
          return (
            <h5
              key={item.id}
              className="border-bottom border-secondary pb-3 text-secondary"
            >
              {index + 1}
              {". "}
              {moment(item.date_ordered).format("MM-DD-YYYY - HH:mm")} -{" "}
              {item.customerName} <br />
              {/* {JSON.parse(
                JSON.stringify(item.orderJson.slice(0, -1).slice(1))
              )}{" "} */}
              {item.orderJson.slice(0, 100)}
              <br />
            </h5>
          );
        }
      })}
    </div>
  );
};

export default Profile;

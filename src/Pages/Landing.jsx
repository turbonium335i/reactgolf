import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  Table,
  Card,
  Button,
  Col,
  Row,
  CardGroup,
  Carousel,
} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePickSlim from "../Components/DatePickSlim";

var now = new Date();
var daycheck = now.getDate();
if (String(daycheck).length < 2) {
  daycheck = "0" + daycheck;
}

var mocheck = now.getMonth();
if (String(mocheck).length < 2) {
  mocheck = "0" + (mocheck + 1);
}

var today = now.getFullYear() + "-" + mocheck + "-" + daycheck;

const Landing = ({ rentDate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let [RoundDate, setRoundDate] = useState(today);

  function dateSubmit(subdate) {
    rentDate(subdate);
  }

  return (
    <div>
      <div className="d-flex justify-content-center ">
        {/* <img
          src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
          height="30"
          width="auto"
        /> */}
        <h6 className="p-2 mb-0">Rounding Date </h6>
        {/* <DatePickSlim /> */}
        <input
          type="date"
          id="roundate"
          name="roundate"
          className="rounded"
          defaultValue={today}
          onChange={(evt) => {
            setRoundDate(evt.target.value);
          }}
        />{" "}
        <Link to={`/productbydate`}>
          <Button
            variant="outline-success"
            onClick={() => {
              dateSubmit(RoundDate);
            }}
          >
            <BsSearch />
          </Button>
        </Link>{" "}
        {/* <span className="text-danger mt-1 ms-2">{RoundDate}</span> */}
      </div>
      <h5 className="text-center pt-3">
        Golf with Style. OnWear Premium Rentals.
      </h5>
      <div className="container mt-2">
        {" "}
        <CardGroup>
          <Card>
            {" "}
            <Link to={"/productbydate"} state={"pxg"}>
              <Card.Img
                variant="top"
                // src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
                src="https://i.postimg.cc/FsKxVMrK/Essential-Tech-Vest.jpg"
              />{" "}
            </Link>
            <Card.Body>
              <Card.Title className="container text-center">
                New Arrivals
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card>
            <Link to={"/productbydate"} state={"G/FORE"}>
              <Card.Img
                variant="top"
                // src="https://i.postimg.cc/DfS1jYhW/pxgwo.jpg"
                src="https://i.postimg.cc/j2YSS0M4/Essential-Tech-Round-Sweater.jpg"
              />{" "}
            </Link>
            <Card.Body>
              <Card.Title className="container text-center">TOPS</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            {" "}
            <Link to={"/productbydate"} state={"reset"}>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/j5dWrrkw/Quarter-G-s-Wrap-Skirt.jpg"
                // src="https://i.postimg.cc/Pq62ZpW0/titleist.jpg"
              />{" "}
            </Link>
            <Card.Body>
              <Card.Title className="container text-center">BOTTOM</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Link to={"/productbydate"} state={"reset"}>
              <Card.Img
                variant="top"
                // src="https://i.postimg.cc/63GQB83G/callaway.jpg"
                src="https://i.postimg.cc/X7TQN2W7/hat2-2.jpg"
              />
            </Link>
            <Card.Body>
              <Card.Title className="container text-center">
                Accessories
              </Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <br />
        <div className="container text-center">
          {" "}
          <img
            src="https://i.postimg.cc/Sskgmxkc/howto.png"
            className="img-fluid py-2 "
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Landing;

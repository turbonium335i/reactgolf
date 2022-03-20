import { Button, Form } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsPlusLg,
  BsFillCartPlusFill,
} from "react-icons/bs";
import NumberFormat from "react-number-format";
import { addDays, subDays, format } from "date-fns";

import DatePick from "../Components/DatePick";
import { type } from "@testing-library/user-event/dist/type";
// import moment from "moment";

const ProductDetail = ({
  onAdd,
  mstat,
  messageback,
  items,
  upDate,
  startDate,
}) => {
  const [task, setTask] = useState({});
  const [tagOne, setTagOne] = useState("1");
  const [tagTwo, setTagTwo] = useState("1");

  const params = useParams();
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);

  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  // function DateOut(s, e) {
  // setStartDate(moment(s).format("MM-DD-YYYY"));
  // setEndDate(moment(e).format("MM-DD-YYYY"));
  // console.log(startDate, endDate);
  // console.log(s.toDateString());
  // console.log(s.toLocaleString());
  // console.log(moment(s).format("MM-DD-YYYY"));
  // }

  let addToCart = async (id, title) => {
    console.log("addtocart ", id);

    onAdd(id, [
      format(subDays(startDate, 2), "MM-dd-yyyy"),
      format(addDays(startDate, 1), "MM-dd-yyyy"),
    ]);
    messageback(title + " added!");
    mstat(title);

    // if there is a user
    if (user !== null) {
      let response = await fetch(
        "https://pertinacity1.pythonanywhere.com/addtokartapi",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            user: user.username,
            dates: [
              format(subDays(startDate, 2), "MM-dd-yyyy"),
              format(addDays(startDate, 1), "MM-dd-yyyy"),
            ],
            action: "add",
          }),
        }
      );

      let data = await response.json();
      console.log(data);
    }
  };

  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].id == params.id) {
  //     console.log(items[i]);
  //   }
  // }

  function convert(data) {
    // make json notation has double quotes, this freaken took forever to find out
    var b = data.replace(/'/g, '"');
    var c = JSON.parse(b);
    // console.log(c["outDates"]);
  }

  useEffect(() => {
    // if (true) {
    //   window.scrollTo(0, 0);
    // }

    for (let i = 0; i < items.length; i++) {
      if (items[i].id == params.id) {
        setTask(items[i]);
        convert(items[i]["rsvJson"]);
      }
      if (items[i].id == task.tagWith) {
        setTagOne(items[i]);
      }
      if (items[i].id == task.tagWithTwo) {
        setTagTwo(items[i]);
      }
    }
  });

  // prevent render each time }, []);

  return (
    <div className="container bg-light mb-3">
      {/* ProductDetail {itemNum} */}
      <div className="row">
        <div className="col-md-8  pb-2">
          <h2>{task.title}</h2>
          <h6>
            {task.brand} -{" "}
            <span className="text-secondary">
              {" "}
              {task.modelname}_{task.id}
            </span>
            <br />
          </h6>{" "}
          <img
            // src="https://i.postimg.cc/FsKxVMrK/Essential-Tech-Vest.jpg"
            src={task.imglink}
            className="img-fluid py-2 "
          />{" "}
          <img
            // src="https://i.postimg.cc/j2YSS0M4/Essential-Tech-Round-Sweater.jpg"
            src={task.imglinkTwo}
            className="img-fluid py-2"
          />
        </div>
        <div className="col-md-4   pb-2">
          <h6 className="text-secondary">
            Retail Price:{" "}
            <NumberFormat
              value={task.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₩"}
            />
          </h6>
          <h5 className="text-success">
            Rental Price:{" "}
            <NumberFormat
              value={task.rentalprice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₩"}
            />
          </h5>
          <br />
          <div className="text-center">
            <DatePick upDate={upDate} startDate={startDate} />
            <p className="text-success">
              {format(subDays(startDate, 2), "MM-dd-yyyy")}{" "}
              <span className="text-dark fs-5">&#8594;</span>{" "}
              {format(addDays(startDate, 1), "MM-dd-yyyy")}
            </p>
            {/* <Form.Select aria-label="Size: S">
              <option value="1">S</option>
              <option value="2">XS</option>
            </Form.Select> */}
            <br />
            <Button
              variant="outline-dark"
              size="lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <BsFillArrowLeftCircleFill /> Back
            </Button>

            <Button
              variant="outline-success"
              size="lg"
              onClick={() => addToCart(task.id, task.title)}
            >
              <BsFillCartPlusFill /> Cart
            </Button>
          </div>
          <br />{" "}
          <pre>
            <h6 style={{ whiteSpace: "pre-wrap" }}>{task.description_long}</h6>
          </pre>
          <br />
          <h6>{task.description_short}</h6>
          <br />
          <br />
          <br />
        </div>
      </div>
      <br />
      <div> recommending with</div>
      <div className="row border border-light pb-2">
        <div className="col-4">
          {" "}
          <Link
            to={`/productdetail/${task.tagWith}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={tagOne.imglink} className="img-fluid py-2" />
          </Link>
        </div>
        <div className="col-4">
          {" "}
          <img
            src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
            className="img-fluid py-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.scrollTo(0, 0);
              // window.location.href = "/productdetail/1";
            }}
          />{" "}
        </div>
        <div className="col-4">
          {" "}
          <Link
            to={`/productdetail/${task.tagWithTwo}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={tagTwo.imglink} className="img-fluid py-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

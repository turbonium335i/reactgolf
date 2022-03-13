import React from "react";
import { BsSearch, BsArrowCounterclockwise } from "react-icons/bs";
import { Table, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductByDate = ({
  queryDate,
  rentDate,
  items,
  onAdd,
  mstat,
  messageback,
}) => {
  let [queryItems, setqueryItems] = useState(items);

  const location = useLocation();
  const state = location.state;
  console.log(state);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state !== null) {
      clickTerm(state);
    }
  }, []);

  // console.log(items);

  var groupOne = items.slice(0, 3);

  function clickTerm(searchTerm) {
    if (searchTerm === "reset") {
      setqueryItems(items);
    } else {
      setqueryItems(
        items.filter((i) => i.brand.toLowerCase() === searchTerm.toLowerCase())
      );
    }
  }

  let [RoundDate, setRoundDate] = useState(queryDate);

  let addToCart = async (id, title) => {
    console.log("addtocart ", id);
    onAdd(id);
    mstat(title);
    messageback(title + " added!");

    if (1 === 1) {
      fetch(`https://pertinacity1.pythonanywhere.com/addtokartapi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          id: id,
          user: "username here",
          action: "add",
        }),
      });
    }
  };

  function dateSubmit(subdate) {
    rentDate(subdate);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center ">
        {/* <img
          src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
          height="30"
          width="auto"
        /> */}
        <h6 className="p-2 mb-0">Select Date</h6>
        <input
          type="date"
          id="roundate"
          name="roundate"
          className="rounded "
          defaultValue={queryDate}
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
      <div className="container text-center mt-2">
        <Button variant="outline-primary" onClick={() => clickTerm("G/FORE")}>
          G/FORE
        </Button>{" "}
        <Button variant="outline-primary" onClick={() => clickTerm("PXG")}>
          PXG
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => clickTerm("G/FORE")}>
          Acc
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => clickTerm("G/FORE")}>
          Top
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => clickTerm("reset")}>
          Bottom
        </Button>
        <Button variant="outline-primary" onClick={() => clickTerm("reset")}>
          <BsArrowCounterclockwise />
        </Button>
      </div>
      <br />
      <h5 className="text-center"> Round Date: {queryDate}</h5>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            {/* <th className="col-1">#</th> */}
            <th className="col-2 text-center">Image</th>
            <th>Product Name</th>
            {/* <th>Description</th> */}
            <th className="col-1 text-center">Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {queryItems.map((item, index) => (
            <tr key={item.id}>
              {/* <td>{index + 1}</td> */}
              <td className="text-center">
                <Link
                  to={`/productdetail/${item.id}`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    // src="https://i.postimg.cc/FsKxVMrK/Essential-Tech-Vest.jpg"
                    src={item.imglink}
                    height="60vh"
                    width="auto"
                  />
                </Link>
              </td>
              <td>
                <Link
                  to={`/productdetail/${item.id}`}
                  className="text-decoration-none text-dark"
                >
                  <span className="fw-bold">{item.brand} </span>- {item.title}{" "}
                  <br />{" "}
                  <span className="text-secondary">
                    {" "}
                    {item.description_short}
                  </span>{" "}
                </Link>
              </td>
              {/* <td>{item.description_short}</td> */}
              <td className="text-center">
                {item.size === "s" ? (
                  <Button variant="outline-dark" size="sm">
                    {item.size}
                  </Button>
                ) : (
                  <Button variant="outline-primary" size="sm">
                    {item.size}
                  </Button>
                )}
              </td>
              <td>{item.rentalprice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductByDate;

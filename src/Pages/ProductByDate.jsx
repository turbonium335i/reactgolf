import React from "react";
import { BsSearch, BsArrowCounterclockwise } from "react-icons/bs";
import { Table, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ProductByDate = ({ queryDate, rentDate, items }) => {
  let [queryItems, setqueryItems] = useState(items);

  // state is carrying over from front page selection
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state !== null) {
      clickTerm(state);
      console.log(state);
    }
  }, []);

  function clickTerm(searchTerm) {
    window.scrollTo(0, 0);
    if (searchTerm === "reset" || searchTerm === "New") {
      setqueryItems(items);
    } else if (searchTerm === "PXG" || searchTerm === "G/FORE") {
      setqueryItems(
        items.filter((i) => i.brand.toLowerCase() === searchTerm.toLowerCase())
      );
    } else if (searchTerm === "Top") {
      setqueryItems(items.filter((i) => i.category === 1));
    } else if (searchTerm === "Bottom") {
      setqueryItems(items.filter((i) => i.category === 3));
    } else if (searchTerm === "Acc") {
      setqueryItems(items.filter((i) => i.category === 2));
    } else if (searchTerm === "S") {
      setqueryItems(items.filter((i) => i.size === "S"));
    } else if (searchTerm === "XS") {
      setqueryItems(items.filter((i) => i.size === "XS"));
    } else if (searchTerm === "F") {
      setqueryItems(items.filter((i) => i.size === "F"));
    }
  }

  function dateSubmit(subdate) {
    rentDate(subdate, subdate + "T00:00:00");
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
            dateSubmit(evt.target.value);
          }}
        />{" "}
        <Link to={`/productbydate`}>
          <Button
            variant="outline-success"
            onClick={() => {
              console.log("btn clicked");
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
        <Button variant="outline-secondary" onClick={() => clickTerm("Top")}>
          Top
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => clickTerm("Bottom")}>
          Bottom
        </Button>{" "}
        <Button variant="outline-secondary" onClick={() => clickTerm("Acc")}>
          Acc
        </Button>{" "}
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
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
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
                {item.size === "S" ? (
                  <Button
                    variant="outline-dark"
                    size="sm"
                    onClick={() => clickTerm(item.size)}
                  >
                    {item.size}
                  </Button>
                ) : (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => clickTerm(item.size)}
                  >
                    {item.size}
                  </Button>
                )}
              </td>
              <td>&#8361;{item.rentalprice.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductByDate;

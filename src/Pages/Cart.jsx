import { Table, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

const Cart = ({ items, kart, onDelete }) => {
  var shopKart = [];
  const navigate = useNavigate();

  var subTotal = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (var i = 0; i < items.length; i++) {
    if (kart.includes(items[i].id)) {
      shopKart.push(items[i]);
      subTotal += items[i].rentalprice;
    }
  }

  function goToKart() {
    if (kart.length !== 0) {
      navigate("/checkout");
    }
  }

  return (
    <div className="container">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th className="col-1">#</th>
            <th className="col-2">Image</th>
            <th> Name</th>
            {/* <th>Description</th> */}
            <th className="col-1">Size</th>
            <th>Price</th>
            <th className="col-1 text-center">X</th>
          </tr>
        </thead>
        <tbody>
          {shopKart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/productdetail/${item.id}`}>
                  <img src={item.imglink} height="60vh" width="auto" />
                </Link>
              </td>
              <td>
                {" "}
                <Link
                  to={`/productdetail/${item.id}`}
                  className="text-decoration-none"
                >
                  <span className="fw-bold">{item.brand} </span>- {item.title}{" "}
                  <br /> <span className="text-secondary"> </span>
                </Link>
              </td>
              {/* <td>{item.description_short}</td> */}
              <td>{item.size}</td>
              <td>
                <NumberFormat
                  value={item.rentalprice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₩"}
                />
              </td>
              <td className="text-center">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end gap-2">
        <Link to={`/productbydate`}>
          <Button variant="secondary" size="lg">
            Continue Shopping
          </Button>{" "}
        </Link>

        <Button
          variant="success"
          size="lg"
          onClick={() => {
            goToKart();
          }}
        >
          CheckOut
        </Button>
      </div>
      <br />
      <div className="text-secondary text-end">
        <h5>
          SubTotal:{" "}
          <NumberFormat
            value={subTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₩"}
          />
        </h5>
        <h5>
          Shipping:{" "}
          <NumberFormat
            value="6000"
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₩"}
          />{" "}
        </h5>
        <h3>
          Total:{" "}
          <NumberFormat
            value={subTotal + 6000}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₩"}
          />{" "}
        </h3>
      </div>
    </div>
  );
};

export default Cart;

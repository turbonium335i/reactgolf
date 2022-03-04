import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  ProgressBar,
  Table,
  Alert,
  Card,
  Button,
  CardGroup,
} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useParams } from "react-router-dom";

const Products = ({ onAdd, items, mstat, messageback }) => {
  let { user, logoutUser, authTokens } = useContext(AuthContext);

  var groupOne = items.slice(0, 3);

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

  return (
    <div className="container  text-dark">
      Products
      <CardGroup>
        {groupOne.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Link to={`/productdetail/${item.id}`}>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/KzKXjnqV/gfore.jpg"
              />
            </Link>
            <Card.Body className="">
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="outline-success"
                onClick={() => addToCart(item.id, item.title)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
      <CardGroup>
        {items.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Link to={`/productdetail/${item.id}`}>
              <Card.Img
                variant="top"
                src="https://i.postimg.cc/DfS1jYhW/pxgwo.jpg"
              />
            </Link>
            <Card.Body className="">
              <Card.Title>{item.title} </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                {/* <Link to={`/productdetail/${item.id}`}>View Details</Link> */}
                <Link to={`/productdetail/${item.id}`}>View Details</Link>
              </Card.Text>
              <Button
                variant="outline-success"
                onClick={() => addToCart(item.id)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <br />
    </div>
  );
};

export default Products;

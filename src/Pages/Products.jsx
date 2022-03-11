import { Card, Button, CardGroup, Row, Col } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useParams } from "react-router-dom";

const Products = ({ onAdd, items, mstat, messageback }) => {
  let { user, logoutUser, authTokens } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var groupOne = items;
  // var groupOne = items.slice(0, 3);

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
    <div className="   text-dark">
      {/* Products
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
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
      <br /> */}
      <main>
        <section className="py-2 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">OnWear Product Gallery</h1>
            </div>
          </div>
        </section>
        <div className="  py-5 bg-light">
          <div className="container ">
            <Row xs={1} md={2} lg={3} className="g-4">
              {groupOne.map((item) => (
                <Card key={item.id}>
                  {" "}
                  <Link to={`/productdetail/${item.id}`}>
                    <Card.Img variant="top" src={item.imglink} />{" "}
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title} </Card.Title>
                    <Card.Text>{item.description_short}</Card.Text>
                    <Button
                      variant="outline-success"
                      onClick={() => addToCart(item.id, item.title)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Row>
            <br />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;

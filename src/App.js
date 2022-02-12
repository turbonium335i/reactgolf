import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  Button,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Pages/Products";
import Footer from "./Pages/FooterRaw";
import {
  BsFillCartFill,
  BsSearch,
  BsPersonCircle,
  BsInstagram,
  BsEasel,
} from "react-icons/bs";

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

function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark" className="text-info">
          <Container>
            <Link to="/" className="text-decoration-none">
              <Navbar.Brand>
                <span className="text-warning ">OnWear </span>Golf
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="text-decoration-none nav-link">
                  {" "}
                  ShowCase &nbsp;
                  <BsEasel />
                </Link>
                <Link to="/memo" className="text-decoration-none nav-link">
                  {" "}
                  Instagram &nbsp;
                  <BsInstagram />
                </Link>
              </Nav>
              <BsPersonCircle />
              Supercat &nbsp;
              <BsFillCartFill className="text-light" />
              &nbsp;
              <span className="text-light"> 0 Items</span>&nbsp;
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <div className="d-flex justify-content-center ">
          <h6 className="p-2 mb-0">Rounding Date </h6>
          <input
            type="date"
            id="roundate"
            name="roundate"
            className="rounded"
            defaultValue={today}
          />
          <Button variant="outline-primary">
            <BsSearch />
          </Button>{" "}
        </div>

        <br />
        <Products />
        <br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
document.body.style = "background: fff;";

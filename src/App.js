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
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./Pages/Products";
import { BsFillCartFill } from "react-icons/bs";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
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
                  ShowCase
                </Link>
                <Link to="/memo" className="text-decoration-none nav-link">
                  {" "}
                  Kart
                </Link>
              </Nav>
            </Navbar.Collapse>

            <BsFillCartFill className="text-light" />
          </Container>
        </Navbar>
        <br />
        <Products />
      </div>
    </Router>
  );
}

export default App;
document.body.style = "background: fff;";

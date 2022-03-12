import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import React, { useState, useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

import {
  BsFillCartFill,
  BsSearch,
  BsPersonCircle,
  BsInstagram,
  BsEasel,
} from "react-icons/bs";

import PrivateRoute from "./Utils/PrivateRoute";

import Private from "./Pages/Private";
import Login from "./Pages/Login";
import Landing from "./Pages/Landing";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";

import KartNavbar from "./Components/KartNavbar";
import UserID from "./Components/UserID";
import FooterRaw from "./Components/FooterRaw";
import Messagebox from "./Components/Messagebox";
import CheckOut from "./Pages/CheckOut";
import ProductByDate from "./Pages/ProductByDate";
import SignUpLink from "./Pages/SignUpLink";

import { addDays, format, subDays } from "date-fns";

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
  const [kart, setkart] = useState([]);
  let [items, setItems] = useState([]);
  const [success, setSuccess] = useState(false);
  const [messageInfo, setMessageInfo] = useState("0");
  const [queryDate, setQueryDate] = useState(today);
  const [expanded, setExpanded] = useState(false);

  // date formating error cause by iso standards
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    format(addDays(startDate, 1), "MM-dd-yyyy")
  );
  const [beforeDate, setBeforeDate] = useState(
    format(subDays(startDate, 2), "MM-dd-yyyy")
  );

  function timer() {
    setTimeout(() => {
      setSuccess(false);
    }, 2200);
  }

  useEffect(() => {
    getItems();
    Aos.init({ duration: 1000 });
  }, []);

  let getItems = async () => {
    let response = await fetch(
      "https://pertinacity1.pythonanywhere.com/itemapi",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      setItems(data);
    } else if (response.statusText === "Unauthorized") {
      console.log("200 error");
    }
  };

  const onAdd = (id) => {
    const newkartItem = { id };
    // setkart([...kart, newkartItem.id]);

    let cKart = [...kart, newkartItem.id];
    let newkart = [...new Set(cKart)];
    setkart(newkart);
  };

  const onDelete = (id) => {
    setkart(kart.filter((k) => k !== id));
  };

  const mstat = (stat) => {
    if (stat === false) {
      setSuccess(false);
    } else {
      setSuccess(true);
      timer();
    }
  };

  const messageback = (info) => {
    setMessageInfo(info);
  };

  const rentDate = (info) => {
    setQueryDate(info);
    console.log(info);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const upDate = (s, b, e) => {
    setStartDate(new Date(s));
    setBeforeDate(b);
    setEndDate(e);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar
            bg="light"
            expand="md"
            variant="light"
            className="border-bottom border-danger"
            fixed="top"
            collapseOnSelect
            expanded={expanded}
          >
            {" "}
            {success && <Messagebox mstat={mstat} messageInfo={messageInfo} />}
            <Container>
              <Link to="/" className="text-decoration-none">
                <Navbar.Brand>
                  <img
                    src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
                    height="30"
                    width="auto"
                    className="d-inline-block align-top"
                    data-aos="fade-up"
                  />
                  {/* <span className="text-warning ">OnWear</span>Shop */}
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setExpanded(expanded ? false : "expanded")}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link
                    to="/"
                    className="text-decoration-none nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    {" "}
                    Home
                  </Link>
                  <Link
                    to="/productbydate"
                    className="text-decoration-none nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    {" "}
                    RoundDate
                  </Link>
                  {/* <Link to="/private" className="text-decoration-none nav-link">
                    {" "}
                    Private
                  </Link> */}
                  <Link
                    to="/products"
                    className="text-decoration-none nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    {" "}
                    Gallery
                  </Link>
                  <Link
                    to="/cart"
                    className="text-decoration-none nav-link"
                    onClick={() => setExpanded(false)}
                  >
                    {" "}
                    Cart
                  </Link>

                  <SignUpLink closeNav={closeNav} />
                </Nav>
                <span className="text-warning">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none" }}
                    onClick={() => setExpanded(false)}
                  >
                    <BsPersonCircle className="text-success" />{" "}
                  </Link>
                </span>
                &nbsp;{" "}
                <span className="text-warning">
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none" }}
                    onClick={() => setExpanded(false)}
                  >
                    <UserID />
                  </Link>{" "}
                  &nbsp;
                </span>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none" }}
                  onClick={() => setExpanded(false)}
                >
                  <BsFillCartFill className="text-primary" />

                  <span className="text-dark">
                    {" "}
                    <KartNavbar kart={kart} /> Items
                  </span>
                </Link>
                &nbsp;
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <br />
          <div className="text-center">
            {" "}
            {/* <img
            src="https://i.postimg.cc/MpC5Wy7k/ogp.png"
            style={{
              height: "25vh",
              width: "auto",
            }}
          /> */}
          </div>

          <Routes>
            <Route path="/" element={<Landing rentDate={rentDate} />} />

            <Route
              path="signup"
              element={<SignUp mstat={mstat} messageback={messageback} />}
            />
            <Route
              path="login"
              element={<Login mstat={mstat} messageback={messageback} />}
            />
            <Route
              path="products"
              element={
                <Products
                  onAdd={onAdd}
                  items={items}
                  mstat={mstat}
                  messageback={messageback}
                />
              }
            />
            <Route
              path="productdetail/:id"
              element={
                <ProductDetail
                  onAdd={onAdd}
                  mstat={mstat}
                  messageback={messageback}
                  items={items}
                  startDate={startDate}
                  beforeDate={beforeDate}
                  endDate={endDate}
                  upDate={upDate}
                />
              }
            />
            <Route
              path="productbydate"
              element={
                <ProductByDate
                  rentDate={rentDate}
                  queryDate={queryDate}
                  onAdd={onAdd}
                  items={items}
                  mstat={mstat}
                  messageback={messageback}
                />
              }
            />
            <Route
              path="cart"
              element={<Cart kart={kart} items={items} onDelete={onDelete} />}
            />
            <Route
              path="checkout"
              element={
                <CheckOut kart={kart} items={items} onDelete={onDelete} />
              }
            />

            <Route element={<PrivateRoute />}>
              <Route path="private" element={<Private />} />
              <Route
                path="profile"
                element={<Profile kart={kart} items={items} />}
              />
            </Route>
          </Routes>
          <FooterRaw />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
document.body.style = "background: white;";

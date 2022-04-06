import { Table, Button, Form } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

const Cart = ({ items, kart, onDelete, kartDates }) => {
  var shopKart = [];
  const [kartUserName, setkartUserName] = useState("none");
  const navigate = useNavigate();

  let { user } = useContext(AuthContext);
  console.log("kartDates", kartDates);

  if (kartDates === "empty") {
    navigate("/");
  }

  function m_Completepayment(FormOrJson, closeEvent) {
    var frm = document.order_info;

    window.GetField(frm, FormOrJson);

    if (frm.res_cd.value == "0000") {
      document
        .getElementById("paypay")
        .addEventListener("click", function (event) {
          event.preventDefault();
        });

      console.log(frm);

      // frm.submit();

      const formData = new FormData(frm);

      let getResponse = async () => {
        let response = await fetch(
          "https://pertinacity1.pythonanywhere.com/payprocess",
          {
            method: "POST",
            body: formData,
          }
        );
        let data = await response.json();

        if (response.status === 200) {
          console.log(data);
          document.getElementById("rBox").innerHTML = data;
          closeEvent();
        } else {
          console.log("200 error");
          alert("Payment Processing Error. Try again in 5 minutes.");
          navigate("/cart");
        }
      };

      getResponse();
    } else {
      alert("[" + frm.res_cd.value + "] " + frm.res_msg.value);

      closeEvent();
    }
  }

  function jsf__pay(form) {
    console.log("fired: ", form);
    alert("Please Wait for a Response");

    try {
      window.KCP_Pay_Execute(form);
      // m_Completepayment();
      // navigate("/paymentsuccess");
    } catch (e) {
      console.log(e);
    }
  }

  var subTotal = 0;

  useEffect(() => {
    if (user !== null) {
      setkartUserName(user.username);
    }
    window.scrollTo(0, 0);
  }, []);

  for (var i = 0; i < items.length; i++) {
    if (kart.includes(items[i].id)) {
      // convert nested JSON into object

      // if (typeof items[i].rsvJson === "string") {
      //   var b = JSON.parse(items[i].rsvJson.replace(/'/g, '"'));
      //   items[i].rsvJson = b;
      // }

      items[i].rsvJson = 0;
      shopKart.push(items[i]);

      subTotal += items[i].rentalprice;
    }
  }

  function checkForm() {
    var fname = document.getElementById("f_name").value;
    var fphone = document.getElementById("f_phone").value;
    var femail = document.getElementById("f_email").value;
    var fshipping = document.getElementById("f_shipping").value;

    if (fname !== "" && fphone !== "" && femail !== "" && fshipping !== "") {
      jsf__pay(document.order_info);
    } else {
      alert("Form Incomplete");
    }
  }

  function sendMobile() {
    let formData2 = new FormData(document.order_info);

    // for (var [key, value] of formData2.entries()) {
    //   console.log(key, value);
    // }

    let submitMobile = async () => {
      console.log("form submitted");
      let response = await fetch(
        "http://127.0.0.1:8000/paymobile",
        // "http://127.0.0.1:8000/token/",

        {
          method: "POST",
          body: formData2,
        }
      );
      let data = await response.json();
      console.log(data);
    };

    submitMobile();
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
                  <img src={item.imglink} height="75vh" width="auto" />
                </Link>
              </td>
              <td>
                {" "}
                <Link
                  to={`/productdetail/${item.id}`}
                  className="text-decoration-none"
                >
                  <span className="fw-bold">{item.brand} </span>- {item.title}{" "}
                  <br /> <span className="text-secondary"> </span>{" "}
                  <span className="text-dark">
                    {kartDates[item.id][0]} &#8594; {kartDates[item.id][1]}
                  </span>
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
                  onClick={() => onDelete(item.id, kartUserName)}
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
            &#8592; Continue Shopping
          </Button>{" "}
        </Link>

        {/* <Button
          variant="success"
          size="lg"
          onClick={() => {
            goToKart();
          }}
        >
          CheckOut
        </Button> */}
      </div>

      <br />
      {/* <div className="text-success text-end">
        <h6 className="my-0 d-inline ">Promo code: </h6>
        <h5 className="border d-inline ">$$DISCOUNT</h5>
        <br />
      </div> */}
      <div className="text-secondary text-end ">
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
            className="text-success"
          />{" "}
        </h3>
      </div>
      <br />
      <div className="text-center">
        <img
          src="https://i.postimg.cc/6QZcCSBW/cardcompany.png"
          alt="card companies"
        />
      </div>
      <div className="text-center fw-bold">Payment & Shipping Information</div>
      <form
        name="order_info"
        method="post"
        action="https://pertinacity1.pythonanywhere.com/payprocess"
        id="paypay"
        encType="multipart/form-data"
      >
        {" "}
        <div className="d-flex justify-content-center">
          <div className="  row px-3 w-75 align-center">
            {" "}
            <label
              htmlFor="pay_method"
              className="  text-success fw-bold"
            ></label>{" "}
            {/* 신용카드 */}
            <input
              type="hidden"
              name="pay_method"
              defaultValue={100000000000}
            />
            <label htmlFor="good_mny"> </label>
            <input
              type="text"
              name="good_mny"
              value={subTotal + 6000}
              readOnly
              maxLength={9}
              className="border  border-light"
            />{" "}
            <br />
            <label htmlFor="ordr_idxx"> </label> <br />
            <input
              type="hidden"
              name="ordr_idxx"
              defaultValue="ONWEAR1001"
              maxLength={40}
            />{" "}
            <label htmlFor="good_name"> </label> <br />
            <input type="hidden" name="good_name" defaultValue="온웨어 골프" />
            <label htmlFor="buyr_name">Name:</label> <br />
            <input
              type="text"
              name="buyr_name"
              placeholder="Enter Name Here"
              className="form-control"
              id="f_name"
            />{" "}
            <br />
            <label htmlFor="buyr_tel1">Phone:</label> <br />
            <input
              type="text"
              name="buyr_tel1"
              placeholder="010-0000-0000"
              className="form-control"
              id="f_phone"
            />{" "}
            <br />
            <label htmlFor="buyr_mail">Email:</label> <br />
            <input
              type="text"
              name="buyr_mail"
              placeholder="email@email.com"
              className="form-control"
              id="f_email"
            />{" "}
            <br />
            <label htmlFor="address">Address:</label> <br />
            <input
              type="text"
              name="address"
              placeholder="Enter Shipping Address Here"
              className="form-control"
              id="f_shipping"
            />{" "}
            <br />
            <label htmlFor="buyr_tel2"> </label> <br />
            <input
              type="hidden"
              name="buyr_tel2"
              defaultValue="010-0000-0000"
            />{" "}
            {/* 가맹점 정보 설정*/}
            <input type="hidden" name="site_cd" defaultValue="T0000" />
            <input type="hidden" name="site_name" defaultValue="TEST SITE" />
            {/* 인증데이터 처리*/}
            <input type="hidden" name="res_cd" value="" />
            <input type="hidden" name="res_msg" value="" />
            <input type="hidden" name="enc_info" value="" />
            <input type="hidden" name="enc_data" value="" />
            <input type="hidden" name="ret_pay_method" value="" />
            <input type="hidden" name="tran_cd" value="" />
            <input type="hidden" name="use_pay_method" value="" />
            <input type="hidden" name="userName" value={kartUserName} />
            <input
              type="hidden"
              name="Ret_URL"
              value="http://localhost:3000/paymentsuccess"
            />
            <input
              type="hidden"
              name="shopKart"
              value={JSON.stringify(shopKart)}
            />
            <input
              type="hidden"
              name="kartDates"
              value={JSON.stringify(kartDates)}
            />
            <div className="text-center">
              {" "}
              <Button
                variant="outline-primary"
                size="md"
                onClick={() => {
                  // checkForm();
                  document.order_info.action =
                    "https://pertinacity1.pythonanywhere.com/payprocess";
                  jsf__pay(document.order_info);
                }}
              >
                PC 결제
              </Button>
              &nbsp;
              <Button
                variant="outline-success"
                size="md"
                onClick={() => {
                  // checkForm();
                  document.order_info.action =
                    "https://pertinacity1.pythonanywhere.com/kcp_api_trade_reg";
                  document.order_info.submit();
                }}
              >
                Mobile 결제
              </Button>
            </div>
          </div>{" "}
        </div>
      </form>
    </div>
  );
};

export default Cart;

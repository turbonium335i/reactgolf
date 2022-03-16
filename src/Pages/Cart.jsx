import { Table, Button, Form } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";

const Cart = ({ items, kart, onDelete }) => {
  var shopKart = [];
  const navigate = useNavigate();

  var api_userName = "";

  function handleSubmit() {
    api_userName = document.getElementById("paypay");
    console.log(api_userName);
    jsf__pay(api_userName);
  }

  function m_Completepayment(FormOrJson, closeEvent) {
    var frm = api_userName;

    window.GetField(frm, FormOrJson);

    if (frm.res_cd.value == "0000") {
      frm.submit();
    } else {
      alert("[" + frm.res_cd.value + "] " + frm.res_msg.value);
    }
  }

  function jsf__pay(e) {
    console.log("fired: ", e);

    try {
      window.KCP_Pay_Execute(e);
      // m_Completepayment();
      // navigate("/paymentsuccess");
    } catch (er) {
      console.log(er);
    }
  }

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
            handleSubmit();
          }}
        >
          CheckOut
        </Button>
      </div>

      <br />
      <div className="text-success text-end">
        <h6 className="my-0 d-inline ">Promo code: </h6>
        <h5 className="border d-inline ">$$DISCOUNT</h5>
        <br />
      </div>
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
      <br />
      <form
        name="order_info"
        method="post"
        id="paypay"
        action="https://spl.kcp.co.kr/gw/enc/v1/payment"
      >
        <div className="  row ">
          <div className="col-6   text-end">
            {" "}
            <label htmlFor="ordr_idxx">ordr_idxx</label> <br />
            <input
              type="text"
              name="ordr_idxx"
              defaultValue="ONWEAR1001"
              maxLength={40}
            />{" "}
            <br />
            <label htmlFor="good_name">good_name</label> <br />
            <input type="text" name="good_name" defaultValue="운동화" /> <br />
            <label htmlFor="good_mny">good_mny</label> <br />
            <input
              type="text"
              name="good_mny"
              defaultValue={subTotal + 6000}
              maxLength={9}
            />{" "}
            <br />
            <label htmlFor="buyr_name">buyr_name</label> <br />
            <input type="text" name="buyr_name" defaultValue="홍길동" /> <br />
          </div>
          <div className="col-6">
            <label htmlFor="buyr_tel1">buyr_tel1</label> <br />
            <input
              type="text"
              name="buyr_tel1"
              defaultValue="02-0000-0000"
            />{" "}
            <br />
            <label htmlFor="buyr_tel2">buyr_tel2</label> <br />
            <input
              type="text"
              name="buyr_tel2"
              defaultValue="010-0000-0000"
            />{" "}
            <br />
            <label htmlFor="buyr_mail">buyr_mail</label> <br />
            <input
              type="text"
              name="buyr_mail"
              defaultValue="test@test.co.kr"
            />{" "}
            <br />
            <br />
            <label htmlFor="pay_method" className="border text-danger px-5">
              Credit Card
            </label>{" "}
            <br />
            {/* 신용카드 */}
            <input
              type="hidden"
              name="pay_method"
              defaultValue={100000000000}
            />
            {/* 가맹점 정보 설정*/}
            <input type="hidden" name="site_cd" defaultValue="AHNJI" />
            <input type="hidden" name="site_name" defaultValue="TEST SITE" />
            {/* 인증데이터 처리*/}
            <input type="hidden" name="res_cd" defaultValue />
            <input type="hidden" name="res_msg" defaultValue />
            <input type="hidden" name="enc_info" defaultValue />
            <input type="hidden" name="enc_data" defaultValue />
            <input type="hidden" name="ret_pay_method" defaultValue />
            <input type="hidden" name="tran_cd" defaultValue />
            <input type="hidden" name="use_pay_method" defaultValue />
            <br />
            <Button
              variant="success"
              size="lg"
              onClick={() => {
                handleSubmit();
              }}
            >
              CheckOut
            </Button>
          </div>

          <br />
        </div>{" "}
      </form>
    </div>
  );
};

export default Cart;

import React from "react";
import {
  BsInstagram,
  BsFillChatDotsFill,
  BsFillGeoFill,
  BsFillQuestionCircleFill,
} from "react-icons/bs";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4">
    <br />
    <br />
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <img
            src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
            height="40"
            width="auto"
            className="mb-2"
          />

          <h6 className="fw-bold">대표: 박서은 010-8875-9072</h6>

          <p className="mb-2">국민은행 : 469901-04-236553</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Quick Link</h5>
          <ul className="list-unstyled">
            <li>
              <BsFillQuestionCircleFill className="text-success" />
              <a href="#!">About</a>
            </li>
            <li>
              <BsFillQuestionCircleFill className="text-success" />
              <a href="#!">How to</a>
            </li>
            <li>
              {" "}
              {/* <p className="mt-1">사업자 등록번호 : 846-14-01659</p>
              <p className="mb-0">통신판매업신고증 : 1647-3048-0610-6685</p>
              <p className="mb-0">
                서울특별시 서초구 강남대로53길 8, 7층 8-14호
              </p> */}
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Social</h5>
          <ul className="list-unstyled">
            <li>
              <BsInstagram className="text-danger" />{" "}
              <a
                href="https://www.instagram.com/gfore/?hl=en"
                style={{ textDecoration: "none" }}
                className="text-dark fw-bold"
              >
                Instagram : onWear
              </a>
            </li>
            <li>
              <BsFillChatDotsFill className="text-warning" />{" "}
              <a
                href="#!"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                <span className="fw-bold"> 카카오: onWear</span>
              </a>
            </li>
            <li>
              <BsFillGeoFill className="text-success" />{" "}
              <a
                href="#!"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                Naver
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br />
    <div className="container text-center">
      사업자 등록번호 : 846-14-01659 통신판매업신고증 : 1647-3048-0610-6685
      <br />
      서울특별시 서초구 강남대로53길 8, 7층 8-14호
    </div>
    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <a
        href="https://www.onwear.co.kr"
        style={{ textDecoration: "none" }}
        className="text-success fw-bold"
      >
        &nbsp; OnWear.co.kr
      </a>
    </div>
  </footer>
);

export default Footer;

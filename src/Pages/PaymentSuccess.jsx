import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="text-left logo p-2 px-5">
              {" "}
              <img
                src="https://i.postimg.cc/zftpFhs3/onwearcrop.png"
                width={200}
              />{" "}
            </div>
            <div className="invoice p-5">
              <h1 className="text-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-emoji-sunglasses"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                </svg>
              </h1>
              <h5>감사합니다 주문이 완료되었습니다 </h5> <br />
              <span>
                주문 후 한시간 내에 주문취소가 가능해요 이메일로 주문 확인서가
                전송되었어요 주문해주셔서 감사합니다.
              </span>
              <hr className="text-success" />
              <p>
                주문하신 상품은 라운딩전날까지 배송완료됩니다. 즐거운 라운딩
                하시고 빠른 반납을 부탁드리며 기간연장을 원하시면 미리
                문의주세요.
              </p>{" "}
              <Link to="/profile">&#8594; Order History</Link>
              <br />
              <br />
              <p className="font-weight-bold mb-0">
                Thanks for rounding with us!
              </p>{" "}
              <span>OnWear Team</span>
            </div>
            <div className="d-flex justify-content-between footer p-3">
              {" "}
              <span>
                Need Help? visit our <a href="#"> FAQ</a>
              </span>{" "}
              <span>OnWear 2022</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

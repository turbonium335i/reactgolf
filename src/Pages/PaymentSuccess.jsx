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
              <h5>Thank You! Your order is Confirmed! </h5>{" "}
              <span className="font-weight-bold d-block mt-4">Hello,</span>{" "}
              <span>
                You order has been confirmed and will be shipped in next two
                days!
              </span>
              <hr className="text-success" />
              <p>
                We will be sending shipping confirmation email when the item
                shipped successfully!
              </p>
              <p className="font-weight-bold mb-0">
                Thanks for shopping with us!
              </p>{" "}
              <span>OnWear Team</span>
            </div>
            <div className="d-flex justify-content-between footer p-3">
              {" "}
              <span>
                Need Help? visit our <a href="#"> FAQ</a>
              </span>{" "}
              <span>12 June, 2022</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;

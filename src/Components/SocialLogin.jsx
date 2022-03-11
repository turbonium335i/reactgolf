import { set } from "date-fns/esm";
import ca from "date-fns/esm/locale/ca/index.js";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { BsFillChatFill } from "react-icons/bs";

const SocialLogin = () => {
  let { kakaoUser } = useContext(AuthContext);

  let [user, setUser] = useState("anonymous");
  let [nickname, setNickname] = useState("guest");
  let [userMail, setUserMail] = useState("guestemail@gmail.com");

  let sendData = async () => {
    // const api_userName = document.getElementById("userName").value;
    // const api_email = document.getElementById("email").value;
    // const api_nameName = document.getElementById("nameName").value;
    // const api_password = document.getElementById("password").value;

    if (nickname !== "guest") {
      console.log("data sent from front: ", nickname, userMail);

      fetch("https://pertinacity1.pythonanywhere.com/reactMakeUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          api_userName: userMail,
          api_email: userMail,
          api_nameName: nickname,
          api_password: "kaka1010",
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          kakaoUser(nickname, userMail);
        });
    }
  };

  useEffect(() => {
    try {
      setNickname(user.profile["nickname"]);
      setUserMail(user.email);
      console.log(user);
      // sendData();
      if (kakaoUser(nickname, userMail)) {
        sendData();
      }
    } catch {
      console.log("no user");
    }
  });

  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: "profile_nickname, account_email, gender",
      success: function (authObj) {
        console.log(authObj);

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            setUser(kakao_account);
          },
        });
      },
    });
  }

  return (
    <div
      onClick={() => {
        kakaoLogin();
      }}
    >
      {" "}
      <BsFillChatFill /> KakaoTalk: {nickname}
    </div>
  );
};

export default SocialLogin;

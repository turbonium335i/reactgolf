import React from "react";
import { BsFillChatFill } from "react-icons/bs";

const SocialLogin = () => {
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
          },
        });
      },
    });
  }

  return (
    <div onClick={kakaoLogin}>
      {" "}
      <BsFillChatFill /> KakaoTalk
    </div>
  );
};

export default SocialLogin;

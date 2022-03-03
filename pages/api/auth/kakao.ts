import { NextRouter } from "next/router";
import axios from "axios";

const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

export const getKakaoCode = (router: NextRouter) => {
  if (CLIENT_ID && REDIRECT_URI) {
    console.log(CLIENT_ID);
    console.log(REDIRECT_URI);
    axios
      .get(
        `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
      )
      .then((res) => {
        const code = res.data.code;
        getKakaoToken(code, router);
      })
      .catch((err) => {
        console.log("Code Error", err);
        window.alert("Code Error");
        router.back();
      });
  } else {
    router.back();
  }
};

const getKakaoToken = (code: string, router: NextRouter) => {
  let access_token: string | undefined = undefined;
  axios
    .post(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    )
    .then((res) => {
      access_token = res.data["access_token"];
      if (typeof access_token === "string") {
        sendToServer(access_token, router);
      } else {
        window.alert("access_token error");
        router.back();
      }
    })
    .catch((err) => {
      console.log("Token Error", err);
      window.alert("Token Error");
      router.back();
    });
};

const sendToServer = (access_token: string, router: NextRouter) => {
  axios
    .get(`http://3.36.56.93:8000/users/kakao/login/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${access_token}`,
      },
    })
    .then((res) => {
      localStorage.setItem("token", res.data.access_token);
      router.back();
    })
    .catch((err) => {
      console.log("백엔드 통신 오류", err);
      window.alert("백엔드 통신 오류");
      router.back(); // 로그인 실패하면 로그인화면으로 돌려보냄
    });
};

import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

export const authState = atom({
  key: "userToken",
  default: "",
});

export const AuthBox = () => {
  const [userToken, setUserToken] = useRecoilState(authState);
  const isSign = !(userToken.length === 0);
  useEffect(() => {
    setUserToken(localStorage.getItem("token") ?? userToken);
  }, [userToken, setUserToken]);
  const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  if (!isSign) {
    return (
      <a href={KAKAO_AUTH_URL} rel="noreferrer">
        <div css={signInButtonStyle}></div>
      </a>
    );
  } else {
    return (
      <div css={profileButtonStyle}>
        <img src="" alt="Profile" />
      </div>
    );
  }
};

const signInButtonStyle = css`
  background-image: url("/images/kakao_login_medium.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 5px auto;
  color: transparent;
  width: 80px;
  height: 40px;
`;

const profileButtonStyle = css`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
`;

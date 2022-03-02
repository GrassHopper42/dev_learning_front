import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { KAKAO_AUTH_URL } from "../../../pages/api/kakaoLogin";

export const AuthBox = () => {
  const authStatus = null;
  if (!authStatus) {
    return (
      <>
        <a href={KAKAO_AUTH_URL}>
          <div css={signInButtonStyle}></div>
        </a>
      </>
    );
  } else {
    return (
      <>
        <div css={profileButtonStyle}>
          <img src="" alt="Profile" />
        </div>
      </>
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

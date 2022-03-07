import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

const CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

const KakaoLoginPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const code = new URL(window.location.href).searchParams.get("code");
    const handleCodeError = () => {
      window.alert("Code From Kakao Server missing");
      router.back();
    };
    token ? router.back() : code ? getKakaoToken(code) : handleCodeError();
  }, []);
  const getKakaoToken = (code: string) => {
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
        const access_token = res.data["access_token"];
        if (access_token) {
          sendToServer(access_token);
        } else {
          window.alert(
            "Success to get Token From Kakao Server, but access_token is weird"
          );
          router.back();
        }
      })
      .catch((err) => {
        console.log("Token From Kakao Server Missing", err);
        window.alert("Token From Kakao Server Missing");
        router.back();
      });
  };

  const sendToServer = (access_token: string) => {
    axios
      .get(`http://3.36.56.93:8000/users/kakao/login/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${access_token}`,
        },
      })
      .then((res) => {
        window.alert("Login Success");
        localStorage.setItem("token", res.data.access_token);
        router.back();
      })
      .catch((err) => {
        console.log("백엔드 통신 오류", err);
        window.alert("백엔드 통신 오류");
        router.back(); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };

  return <div>Loading</div>;
};

export default KakaoLoginPage;

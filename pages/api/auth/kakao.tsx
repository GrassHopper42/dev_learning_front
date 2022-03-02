import { useEffect } from "react";
import axios from "axios";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    let grant_type = "authorization_code";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${process.env.KAKAO_CLIENT_ID}
        &redirect_uri=${process.env.KAKAO_REDIRECT_URI}
        &code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  return <div>TODO Spinner</div>;
};

export default KakaoRedirectHandler;

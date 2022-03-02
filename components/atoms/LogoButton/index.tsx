import { css } from "@emotion/react";
import { useRouter } from "next/router";

export const LogoButton = () => {
  const router = useRouter();
  return (
    <button css={logoButtonStyle} onClick={() => router.push("/")}>
      undefined
    </button>
  );
};

const logoButtonStyle = css`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
`;

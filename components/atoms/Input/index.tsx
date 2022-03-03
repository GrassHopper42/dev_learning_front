/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface inputProps {
  placeholder: string;
  width: string;
  height: string;
}

const Input = ({ placeholder, width, height }: inputProps) => {
  return (
    <input
      css={inputStyle(width ?? "100px", height ?? "50px")}
      placeholder={placeholder}
    />
  );
};

const inputStyle = (width: string, height: string) => css`
  border-radius: 10px;
  width: ${width};
  height: ${height};
`;

export default Input;

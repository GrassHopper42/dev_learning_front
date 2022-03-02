/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface inputProps {
  content: string;
  width: string;
  height: string;
}

const Input = (props: inputProps) => {
  return (
    <input
      css={inputStyle(props.width ?? "100px", props.height ?? "50px")}
      placeholder={props.content}
    />
  );
};

const inputStyle = (width: string, height: string) => css`
  width: ${width};
  height: ${height};
`;

export default Input;

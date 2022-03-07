/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface buttonProps {
  color: string;
  content: string;
  type?: "button" | "submit" | undefined;
  onClickFn?: () => void;
}

const Button = ({
  color,
  content,
  type = "button",
  onClickFn,
}: buttonProps) => {
  return (
    <button css={buttonStyle(color)} type={type} onClick={onClickFn}>
      {content}
    </button>
  );
};

const buttonStyle = (color: string) => {
  return css`
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: ${color};
  `;
};

export default Button;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface buttonProps {
  color: string;
  content: string;
  onClickFn: () => void;
}

const Button = ({ color, content, onClickFn }: buttonProps) => {
  return (
    <>
      <button css={buttonStyle(color)} onClick={onClickFn}>
        {content}
      </button>
    </>
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

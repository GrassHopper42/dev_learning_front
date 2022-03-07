/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  label?: string;
  fontSize?: string;
  width?: string;
  height?: string;
}

const InputComponent = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  label,
  fontSize = "20px",
  width = "100px",
  height = "fit-content",
}: inputProps) => {
  const inputChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    onChange(e.target.value);
  };
  return (
    <div css={inputContainerStyle(fontSize, width, height)}>
      {label ? <label css={labelStyle}>{label}</label> : ""}
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={inputChangeHandler}
          css={inputStyle(fontSize)}
          placeholder={placeholder}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={inputChangeHandler}
          type={type}
          css={inputStyle(fontSize)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const inputContainerStyle = (
  fontSize: string,
  width: string,
  height: string
) => css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: ${fontSize};
  width: ${width};
  height: ${height};
`;

const labelStyle = css`
  display: flex;
  color: #6d6d6d;
  height: 100%;
  word-break: keep-all;
  :after {
    background-color: rgba(0, 0, 0, 0.3);
    display: inline-block;
    padding: 20% 0;
    width: 2px;
    content: "";
    margin: 0 10px;
  }
`;

const inputStyle = (fontSize: string) => css`
  overflow: hidden;
  width: 100%;
  height: 100%;
  font-size: ${fontSize};
  border: 2px solid transparent;
  resize: none;
  &:focus {
    border-bottom: 2px solid black;
  }
`;

export default InputComponent;

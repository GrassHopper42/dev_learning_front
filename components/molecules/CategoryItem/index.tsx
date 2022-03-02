import { css } from "@emotion/react";
import Link from "next/link";
import { Emoji } from "../../atoms/Emoji";

interface categoryItemProps {
  content: string;
  symbol: any;
  label: string;
}

export const CategoryItem = ({ content, symbol, label }: categoryItemProps) => {
  return (
    <li css={categoryItemStyle}>
      <Emoji
        symbol={symbol}
        label={label}
        padding="0 20px 0 0"
        emojiSize="30px"
      />
      <span>{content}</span>
    </li>
  );
};

const categoryItemStyle = css`
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 500;
  list-style: none;
  box-sizing: border-box;
  width: 300px;
  height: 60px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #8080805e;
  }
`;

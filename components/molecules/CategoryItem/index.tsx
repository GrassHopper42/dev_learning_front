import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Emoji } from "../../atoms/Emoji";

interface categoryItemProps {
  content: string;
  symbol: any;
  label: string;
  mainCategory: string;
  subCategory?: string;
}

export const CategoryItem = ({
  content,
  symbol,
  label,
  mainCategory,
  subCategory = mainCategory,
}: categoryItemProps) => {
  const router = useRouter();
  const recentCategory = router.query.category
    ? router.query.category
    : router.pathname.split("/")[1];
  const isOpen = subCategory === recentCategory;
  return (
    <li>
      <button
        css={categoryItemStyle(isOpen)}
        onClick={
          isOpen
            ? () => {}
            : () => router.push(`/${mainCategory}?category=${subCategory}`)
        }
      >
        <Emoji
          symbol={symbol}
          label={label}
          emojiSize="20px"
          padding="0 10px 0 0"
        />
        <span>{content}</span>
      </button>
    </li>
  );
};

const categoryItemStyle = (isOpen: boolean) => css`
  padding: 3%;
  margin: 3%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  justify-items: start;
  justify-content: left;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 600;
  list-style: none;
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${isOpen ? "#cfcfcf" : "none"};
  cursor: ${isOpen ? "default" : "pointer"};
  :hover {
    background-color: ${isOpen ? "#cfcfcf" : "#808080"};
  }
`;

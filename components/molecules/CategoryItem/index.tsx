import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Emoji } from "../../atoms/Emoji";

interface categoryItemProps {
  content: string;
  symbol: any;
  label: string;
  mainCategory: string;
  subCategoryId?: number | null;
}

export const CategoryItem = ({
  content,
  symbol,
  label,
  mainCategory,
  subCategoryId = null,
}: categoryItemProps) => {
  const router = useRouter();
  const recentCategory = router.asPath.split("/")[2];
  const isOpen = subCategoryId === parseInt(recentCategory);
  return (
    <li>
      <button
        css={categoryItemStyle(isOpen)}
        onClick={
          isOpen
            ? () => {}
            : () => router.push(`/${mainCategory}/${subCategoryId}`)
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

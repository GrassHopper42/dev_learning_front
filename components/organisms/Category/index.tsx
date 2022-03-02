import { css } from "@emotion/react";
import { CategoryItem } from "../../molecules/CategoryItem";

export const Category = () => {
  return (
    <>
      <ul css={categoryStyle}>
        <div>카테고리</div>
        <CategoryItem content="Dev-Ops" symbol="⚙️" label="Gear" />
        <CategoryItem content="JAVA" symbol="📱" label="Mobile Phone" />
        <CategoryItem content="알고리즘" symbol="💻" label="Laptop" />
        <CategoryItem content="코딩테스트" symbol="📝" label="Memo" />
      </ul>
    </>
  );
};

const categoryStyle = css`
  position: relative;
  width: fit-content;
  padding: 25px;
  border-radius: 30px;
`;

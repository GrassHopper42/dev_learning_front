import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { CategoryItem } from "../../molecules/CategoryItem";

interface CategoryObj {
  content: string;
  symbol: string;
  label: string;
  Id: number;
}
interface CategoryProps {
  categoryList: CategoryObj[];
}

export const Category = ({ categoryList }: CategoryProps) => {
  const router = useRouter();
  const mainCategory = router.pathname.split("/")[1];
  return (
    <>
      <ul css={categoryStyle}>
        <div>카테고리</div>
        {categoryList.map((category) => {
          return (
            <CategoryItem
              key={categoryList.indexOf(category)}
              content={category.content}
              symbol={category.symbol}
              label={category.label}
              mainCategory={mainCategory}
              subCategoryId={category.Id}
            />
          );
        })}
      </ul>
    </>
  );
};

const categoryStyle = css`
  width: fit-content;
  padding: 25px;
  border-radius: 30px;
`;

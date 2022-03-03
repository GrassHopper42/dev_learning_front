import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Emoji } from "../components/atoms/Emoji";
import { Category } from "../components/organisms/Category";

const QuestionPage = () => {
  const router = useRouter();
  const recentCategory = router.query.category;
  const recentCategoryObj = questionCategories.find(
    (category) => category.name === recentCategory
  )
    ? questionCategories.find((category) => category.name === recentCategory)
    : {
        content: "전체보기",
        symbol: "🙋‍♂️",
        label: "Man Raising Hand",
        name: "View All",
      };

  return (
    <div css={questionPageStyle}>
      <Category categoryList={questionCategories} />
      <div>
        <Emoji
          symbol={recentCategoryObj?.symbol}
          label={recentCategoryObj?.label || "label"}
          padding="10px"
          emojiSize="30px"
        />
        <span>{recentCategoryObj?.content}</span>
      </div>
    </div>
  );
};

const questionPageStyle = css`
  width: 1060px;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  margin: 0 auto;
`;

export default QuestionPage;

const questionCategories = [
  {
    content: "Dev-Ops",
    symbol: "⚙️",
    label: "Gear",
    name: "dev_ops",
  },
  {
    content: "JAVA",
    symbol: "📱",
    label: "Mobile Phone",
    name: "java",
  },
  {
    content: "알고리즘",
    symbol: "💻",
    label: "Laptop",
    name: "algorithm",
  },
  {
    content: "코딩테스트",
    symbol: "📝",
    label: "Memo",
    name: "coding_test",
  },
];

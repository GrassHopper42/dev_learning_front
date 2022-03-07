import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Emoji } from "../../components/atoms/Emoji";
import { NewPostButton } from "../../components/molecules/NewPostButton";
import { Category } from "../../components/organisms/Category";

const QuestionPage = () => {
  const router = useRouter();
  const recentCategory = router.asPath.split("/")[2];
  const recentCategoryObj = questionCategories.find(
    (category) => category.Id === parseInt(recentCategory)
  );

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
      <NewPostButton />
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
    content: "전체보기",
    symbol: "🙋‍♂️",
    label: "Man Raising Hand",
    Id: 3,
  },
  {
    content: "Dev-Ops",
    symbol: "⚙️",
    label: "Gear",
    Id: 6,
  },
  {
    content: "JAVA",
    symbol: "📱",
    label: "Mobile Phone",
    Id: 7,
  },
  {
    content: "알고리즘",
    symbol: "💻",
    label: "Laptop",
    Id: 5,
  },
  {
    content: "코딩테스트",
    symbol: "📝",
    label: "Memo",
    Id: 4,
  },
];

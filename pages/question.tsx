import { css } from "@emotion/react";
import { Category } from "../components/organisms/Category";

const QuestionPage = () => {
  return (
    <>
      <div css={questionPageStyle}>
        <Category />
      </div>
    </>
  );
};

const questionPageStyle = css`
  width: 1060px;
  margin: 0 auto;
`;

export default QuestionPage;

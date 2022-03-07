import { css } from "@emotion/react";
import { useRouter } from "next/router";
import Button from "../atoms/Button";

export const NewPostButton = () => {
  const router = useRouter();
  const categoryId = router.asPath.split("/")[2];
  return (
    <div css={postButtonStyle}>
      <Button
        color="#81d1ff"
        content="Post"
        onClickFn={() =>
          router.push({
            pathname: "/editPost",
            query: { categoryId: categoryId },
          })
        }
      />
    </div>
  );
};

const postButtonStyle = css`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

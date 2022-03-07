import { css } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "../components/atoms/Button";
import InputComponent from "../components/atoms/Input";
import { authState } from "../components/molecules/AuthBox";

const EditPostPage = (isNew: boolean) => {
  const router = useRouter();
  const [categoryId, setCategoryId] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const userToken = useRecoilValue(authState);

  useEffect(() => {
    router.query.categoryId
      ? setCategoryId(router.query.categoryId[0])
      : setCategoryId("");
  }, []);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let body = {
      title: titleValue,
      content: contentValue,
      tag: ["dev_ops"],
      category: parseInt(categoryId),
    };

    axios
      .post("http://3.36.56.93:8000/postings/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body,
      })
      .then(() => router.back())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form css={editPostStyle} onSubmit={submitHandler}>
        <h1
          css={css`
            font-family: "Open Sans", sans-serif;
            font-size: 30px;
            font-weight: 500;
            width: 100%;
          `}
        >
          글쓰기
        </h1>
        <InputComponent
          name="title"
          value={titleValue}
          onChange={setTitleValue}
          placeholder="title"
          type="text"
          label="제목"
          width="500px"
        />
        <InputComponent
          name="content"
          value={contentValue}
          onChange={setContentValue}
          placeholder="content"
          type="textarea"
          width="500px"
          height="250px"
        />
        <Button
          color="#f8fdae"
          content={isNew ? "글쓰기" : "수정"}
          type="submit"
        />
      </form>
    </>
  );
};

const editPostStyle = css`
  position: absolute;
  border: 1px solid black;
  width: 500px;
  height: 350px;
`;

export default EditPostPage;

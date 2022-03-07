import { useRouter } from "next/router";

const FindMemberPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <div>FindMemberPage</div>
    </>
  );
};

export default FindMemberPage;

import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface navListProps {
  content: string;
  targetUrl: string;
}

export const NavItem = ({ content, targetUrl }: navListProps) => {
  const router = useRouter();
  const recentPath = router.pathname;
  const isOpen = targetUrl === recentPath;
  return (
    <li css={navItemStyle(isOpen)}>
      <Link href={targetUrl}>{content}</Link>
    </li>
  );
};

const navItemStyle = (isOpen: boolean) => css`
  height: inherit;
  padding: 15px 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  list-style: none;
  text-align: center;
  box-sizing: border-box;
  border-bottom: ${isOpen ? "2.5px solid black" : "none"};
  :hover {
    border-bottom: 2.5px solid rgba(0, 0, 0, 0.5);
  }
`;

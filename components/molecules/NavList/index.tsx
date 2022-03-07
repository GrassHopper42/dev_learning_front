import { css } from "@emotion/react";
import { NavItem } from "../../atoms/NavItem";

export const NavList = () => {
  return (
    <nav css={navListStyle}>
      <NavItem content="개발 질문" targetUrl="/question/3" />
      <NavItem content="IT 행사" targetUrl="/event" />
      <NavItem content="팀원 찾기" targetUrl="/findMember" />
    </nav>
  );
};

const navListStyle = css`
  display: flex;
  width: 40%;
  height: 100%;
  font-size: large;
  font-weight: 500;
  justify-content: space-between;
`;

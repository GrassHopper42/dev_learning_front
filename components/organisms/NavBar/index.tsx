import { css } from "@emotion/react";
import { LogoButton } from "../../atoms/LogoButton";
import { AuthBox } from "../../molecules/AuthBox";
import { NavList } from "../../molecules/NavList";

export const NavBar = () => {
  return (
    <div css={NavbarContainer}>
      <div css={navBarStyle} className="top_nav">
        <LogoButton />
        <NavList />
        <AuthBox />
      </div>
    </div>
  );
};

const NavbarContainer = css`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const navBarStyle = css`
  width: 800px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

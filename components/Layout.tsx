import { css } from "@emotion/react";
import { ReactNode } from "react";
import { NavBar } from "./organisms/NavBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <div
        css={css`
          padding-top: 70px;
          background-color: #c9c9c9;
        `}
      >
        {children}
      </div>
    </>
  );
};

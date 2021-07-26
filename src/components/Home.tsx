import React from "react";
import styled from "styled-components";
import Header from "./Header";
import About from "./About";
import Experiences from "./Experience";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.colors.main.background};
  .gap {
    height: ${(p) => p.theme.height - 100}px;
    pointer-events: none;
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <div className="gap"></div>
      <About />
      <Experiences />
    </StyledHome>
  );
}

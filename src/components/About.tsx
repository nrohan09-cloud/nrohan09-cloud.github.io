import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";

const StyledAbout = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  padding: 2rem;
  line-height: 1.6rem;
  transition: background 300ms ease-out, color 300ms ease-out;
  border-radius: 20px 20px 0 0;

  h2 {
    line-height: 2rem;
  }
`;

export default function About() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      {!!rohan.general.name && !rohan.error && (
        <StyledAbout
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
        >
          <h2>About me</h2>
          <p>{rohan.general.aboutme}</p>
        </StyledAbout>
      )}
    </>
  );
}

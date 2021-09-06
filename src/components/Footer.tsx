import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";

const StyledFooter = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  padding: 2rem;
  padding-top: 0;
  line-height: 1.6rem;
  transition: background 300ms ease-out, color 300ms ease-out;
  p {
    text-align: center;
    cursor: pointer;
  }
`;

export default function Footer() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      {!rohan.error && (
        <StyledFooter
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p>scroll to top</p>
        </StyledFooter>
      )}
    </>
  );
}

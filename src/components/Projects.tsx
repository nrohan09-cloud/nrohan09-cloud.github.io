import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import { project } from "./types";

const StyledProjects = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  line-height: 1.6rem;
  transition: background 300ms ease-out, color 300ms ease-out;
  padding: 2rem;
  padding-top: 0;
  h2 {
    line-height: 2rem;
    margin-bottom: 10px;
  }
  .project {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
  }
`;

export default function Projects() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      {!!rohan.projects.length && !rohan.error && (
        <StyledProjects
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
        >
          <h2>Projects</h2>
          <div className="project">
            {rohan.projects.map((pro) => (
              <Project pro={pro} key={window.btoa(pro.title)} />
            ))}
          </div>
        </StyledProjects>
      )}
    </>
  );
}

const StyledProject = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  color: ${(p) => p.theme.colors.main.text};
  padding: 1.5rem;
  border-radius: 20px;

  .pro-title {
    font-weight: 600;
  }
  .pro-role {
    font-weight: 600;
    color: ${(p) => p.theme.colors.main.accent};
  }
  .links {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
`;

function Project({ pro }: { pro: project }) {
  return (
    <StyledProject>
      {pro.image && <img src={pro.image} alt="" />}
      <h2 className="pro-title">{pro.title}</h2>
      <p className="pro-description">{pro.description}</p>
      <div className="links">
        <a href={pro.github} target="_blank" rel="noreferrer">
          view in github
        </a>
      </div>
    </StyledProject>
  );
}

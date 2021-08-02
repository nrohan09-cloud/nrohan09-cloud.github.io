import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import { skill } from "./types";

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
          <h2>skills</h2>
          {rohan.skills.length > 0 && <Skillsbar skills={rohan.skills} />}
        </StyledAbout>
      )}
    </>
  );
}

const Skills = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 10px;
  .skill {
    background: ${(p) => p.theme.colors.main.background};
    color: ${(p) => p.theme.colors.main.text};
    font-weight: 600;
    border-radius: 1.6rem;
    padding: 0.5rem 1rem;
    /* border: 1px solid ${(p) => p.theme.colors.main.accent}; */
  }
`;

function Skillsbar({ skills }: { skills: skill[] }) {
  return (
    <Skills initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      {skills.map((skill, i) => {
        return <Skill key={i} skill={skill} />;
      })}
    </Skills>
  );
}

function Skill({ skill }: { skill: skill }) {
  return (
    <motion.div className="skill">
      <span>{skill.title}</span>
    </motion.div>
  );
}

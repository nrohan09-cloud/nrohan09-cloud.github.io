import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import { experience } from "./types";
import { format } from "date-fns";
import { LinearProgress } from "@material-ui/core";

const StyledExperiences = styled(motion.div)`
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
`;

export default function Experiences() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      {!rohan.error ? (
        <StyledExperiences
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
        >
          <h2>Experience</h2>
          {!!rohan.experiences.length ? (
            <div className="experience">
              {rohan.experiences.map((exp) => (
                <Experience exp={exp} key={window.btoa(exp.role + exp.title)} />
              ))}
            </div>
          ) : (
            <LinearProgress />
          )}
        </StyledExperiences>
      ) : (
        <></>
      )}
    </>
  );
}

const StyledExperience = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  color: ${(p) => p.theme.colors.main.text};
  padding: 1.5rem;
  border-radius: 20px;
  margin-bottom: 10px;

  .exp-title {
    font-weight: 600;
  }
  .exp-role {
    font-weight: 600;
    color: ${(p) => p.theme.colors.main.accent};
  }
  .links {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }
`;

function Experience({ exp }: { exp: experience }) {
  return (
    <StyledExperience>
      <p className="exp-date">
        {format(new Date(exp.date.start), "MMM yyyy") +
          " - " +
          format(new Date(exp.date.end), "MMM yyyy")}
      </p>
      <h2 className="exp-title">{exp.title}</h2>
      <p className="exp-role">{exp.role}</p>
      <p className="exp-description">{exp.description}</p>
      <div className="links">
        {exp.links.map((link) => (
          <a href={link.link} key={link.link}>
            {link.label}
          </a>
        ))}
      </div>
    </StyledExperience>
  );
}

import { motion } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import { education } from "./types";
import { format } from "date-fns";

const StyledEducation = styled(motion.div)`
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
  .experience {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
  }
`;

export default function Educations() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      {!!rohan.educations.length && !rohan.error && (
        <StyledEducation
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
        >
          <h2>Education</h2>
          <div className="experience">
            {rohan.educations.map((edu) => (
              <Education
                edu={edu}
                key={window.btoa(edu.subtitle + edu.title)}
              />
            ))}
          </div>
        </StyledEducation>
      )}
    </>
  );
}

const StyledExperience = styled.div`
  background: ${(p) => p.theme.colors.main.background};
  color: ${(p) => p.theme.colors.main.text};
  padding: 1.5rem;
  border-radius: 20px;

  .edu-title {
    font-weight: 600;
  }
  .edu-role {
    font-weight: 600;
    color: ${(p) => p.theme.colors.main.accent};
  }
  .links {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  }
`;

function Education({ edu }: { edu: education }) {
  return (
    <StyledExperience>
      <p className="exp-date">
        {format(new Date(edu.date.start), "MMM yyyy") +
          " - " +
          format(new Date(edu.date.end), "MMM yyyy")}
      </p>
      <h2 className="edu-title">{edu.title}</h2>
      <p className="edu-role">{edu.subtitle}</p>
      <p className="edu-description">{edu.description}</p>
    </StyledExperience>
  );
}

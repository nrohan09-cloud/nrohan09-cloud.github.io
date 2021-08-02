import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalContext } from "../contexts/GlobalContext";
import { project } from "./types";

const StyledProjects = styled(motion.div)`
  background: ${(p) => p.theme.colors.main.accent};
  color: ${(p) => p.theme.colors.main.background};
  line-height: 1.6rem;
  transition: background 300ms ease-out, color 300ms ease-out;
  padding: 2rem;
  /* padding-top: 0; */

  h2 {
    line-height: 2rem;
  }
  .project {
    padding-top: 1rem;
    display: flex;

    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export default function Projects() {
  const { rohan } = useContext(GlobalContext);

  const projects =
    rohan.projects &&
    rohan.projects.length > 0 &&
    rohan.projects.map((pro) => {
      // console.log(window.btoa(pro.title), pro);
      return <ProjectPreview pro={pro} key={window.btoa(pro.title)} />;
    });

  return (
    <>
      {!!rohan.projects.length && !rohan.error && (
        <StyledProjects
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 0.99999, y: 0 }}
        >
          <h2>Projects</h2>
          <div className="project">{projects}</div>
        </StyledProjects>
      )}
    </>
  );
}

const StyledProject = styled.div`
  /* background: ${(p) => p.theme.colors.main.background}; */
  font-size: 1.2rem;
  /* padding: 1rem; */
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .pro-title {
    color: ${(p) => p.theme.colors.main.text};
    font-weight: 600;
    text-align: center;
    font-size: 1.2rem;
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 0.5rem;
    width: 100%;
    padding-top: 100px;
    background: linear-gradient(
      to top,
      ${(p) => p.theme.colors.main.background},
      transparent
    );
  }
  .pro-image {
    will-change: opacity;
    width: 200px;
    height: 200px;
    @media (max-width: 500px) {
      width: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  /* .pro-role {
    font-weight: 600;
    color: ${(p) => p.theme.colors.main.accent};
  }
  .links {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
  } */
`;

function ProjectPreview({ pro }: { pro: project }) {
  const animation = useAnimation();

  const mobile = window.innerWidth < 500;

  return (
    <Link
      to={{
        pathname: "/project/" + window.btoa(pro.title) + "-rohan",
        state: { ...pro },
      }}
    >
      <StyledProject
        onMouseEnter={() => !mobile && animation.start({ opacity: 1 })}
        onMouseLeave={() => !mobile && animation.start({ opacity: 0 })}
      >
        <AnimatePresence>
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pro-image"
            layoutId={"img-" + pro.title}
          >
            {pro.image && <img src={pro.image} alt="" />}
          </motion.div>
        </AnimatePresence>
        <motion.h2
          layout="position"
          layoutId={pro.title}
          initial={!mobile ? { opacity: 0 } : { opacity: 1 }}
          animate={animation}
          className="pro-title"
        >
          {pro.title}
        </motion.h2>
      </StyledProject>
    </Link>
  );
}

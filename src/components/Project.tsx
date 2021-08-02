import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRohan } from "../hooks/useRohan";
import { project } from "./types";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import { IconButton } from "@material-ui/core";
const StyledProjectPage = styled.div`
  .pro-image {
    will-change: opacity;
    width: 100%;
    max-height: 300px;
    @media (max-width: 500px) {
      max-height: 500px;
    }
    overflow-y: hidden;
    img {
      width: 100%;
    }
  }
  .header {
    font-size: 2rem;
    padding: 1.5rem;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .details {
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  .pro-desc {
    line-height: 2rem;
  }
  svg {
    color: ${(p) => p.theme.colors.main.text};
  }
`;

export default function ProjectPage() {
  const { rohan } = useRohan();
  const param: { id: string } = useParams();
  const history = useHistory();
  const [project, setProject] = useState<project | null>(
    (history.location.state as project) || null
  );

  useEffect(() => {
    rohan.projects &&
      param.id &&
      !project &&
      setProject(rohan.getProjectById(param.id) || null);

    // return () => setProject(null);
  }, [project, param, rohan]);

  return (
    <StyledProjectPage>
      {project && (
        <>
          <AnimatePresence>
            <motion.div
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pro-image"
              layoutId={"img-" + project.title}
            >
              {project.image && <img src={project.image} alt="" />}
            </motion.div>
          </AnimatePresence>
          <div className="header">
            <motion.h2
              layout="position"
              layoutId={project.title}
              className="project-title"
            >
              {project.title}
            </motion.h2>
            <div className="actions">
              <IconButton onClick={() => history.push("/")}>
                <ArrowBackIosRoundedIcon />
              </IconButton>
              {window.innerWidth <= 500 && (
                <IconButton
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        url: window.location.href,
                        title: project.title,
                        text: project.title,
                      });
                      return;
                    }
                  }}
                >
                  <ShareRoundedIcon />
                </IconButton>
              )}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="details"
          >
            <p className="pro-desc">{project.description}</p>
            <a target="_blank" rel="noopener noreferrer" href={project.github}>
              view on github
            </a>
          </motion.div>
        </>
      )}
    </StyledProjectPage>
  );
}

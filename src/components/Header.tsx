import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useContext } from "react";
import styled from "styled-components";
import profile from "../assets/default-profile.webp";
import { GlobalContext } from "../contexts/GlobalContext";
import Brightness2RoundedIcon from "@material-ui/icons/Brightness2Rounded";
import Brightness7RoundedIcon from "@material-ui/icons/Brightness7Rounded";

const StyledHeader = styled.div`
  position: fixed;
  height: ${(p) => p.theme.height}px;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 300ms ease-out, color 300ms ease-out;

  & > div {
    display: flex;
    align-items: center;
  }
  .details {
    margin-left: 20px;
    position: relative;
    h2 {
      font-weight: 400;
      line-height: 2rem;
    }
    p {
      line-height: 1.6rem;
    }
  }
  .contact {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    a {
      margin: 0 1rem;
    }
  }
`;

export default function Header() {
  const { rohan } = useContext(GlobalContext);

  return (
    <>
      <StyledHeader>
        <div>
          <ProfileImg err={rohan.error} loading={!rohan.general.name} />
          {!!rohan.general.name && !rohan.error && (
            <motion.div
              initial={{ opacity: 0, y: -10, width: 0 }}
              animate={{ opacity: 1, y: 0, width: 210 }}
              className="details"
            >
              <h2>{rohan.general.name}</h2>
              <p>{rohan.general.subtitle}</p>
              <a target="_blank" rel="noreferrer" href={rohan.general.resume}>
                resume
              </a>
              <ThemeButton />
            </motion.div>
          )}
        </div>
        {!!rohan.general.name && <Contact />}
      </StyledHeader>
    </>
  );
}

function Contact() {
  const { rohan } = useContext(GlobalContext);
  return (
    <div className="contact">
      <a href={rohan.general.linkedin} target="_blank" rel="noreferrer">
        linkedin
      </a>
      <a href={rohan.general.facebook} target="_blank" rel="noreferrer">
        facebook
      </a>
      <a href={rohan.general.github} target="_blank" rel="noreferrer">
        github
      </a>
      <a href={rohan.general.instagram} target="_blank" rel="noreferrer">
        instagram
      </a>
    </div>
  );
}

const SProfileimg = styled.div<{ l: boolean; err: boolean }>`
  border-radius: 50%;
  overflow: hidden;
  width: 120px;
  height: 120px;
  border: 1px solid ${(p) => p.theme.colors.main.accent};
  animation: ${(p) => (p.l ? "loading 1s infinite" : "")};
  animation: ${(p) => (p.err ? "loading 1s infinite" : "")};

  @keyframes loading {
    0%,
    100% {
      box-shadow: 0 0 10px 1px ${(p) => p.theme.colors.main.accent};
    }
    50% {
      box-shadow: 0 0 0px 0px transparent;
    }
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

function ProfileImg({ loading, err }: { loading: boolean; err: boolean }) {
  const animation = useAnimation();

  return (
    <SProfileimg err={err} l={loading}>
      <motion.img
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={animation}
        src={profile}
        onLoad={() => animation.start({ opacity: 1, filter: "blur(0)" })}
        alt="profilephoto"
      />
    </SProfileimg>
  );
}

const StyledThemeButton = styled(motion.div)`
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 0;
  color: ${(p) => p.theme.colors.main.accent};
`;

const LightButton = styled(motion(Brightness2RoundedIcon))`
  cursor: pointer;
  user-select: none;
`;
const DarkButton = styled(motion(Brightness7RoundedIcon))`
  cursor: pointer;
  user-select: none;
`;

function ThemeButton() {
  const {
    themer: { theme, toggle },
  } = useContext(GlobalContext);

  return (
    <StyledThemeButton>
      <motion.div
        whileTap={{ x: 10 }}
        onTap={() => toggle()}
        className="theme-toggle"
      >
        <AnimatePresence>
          {theme.colors.main.type === "dark" ? (
            <LightButton exit={{ opacity: 0, x: 10 }} />
          ) : (
            <DarkButton exit={{ opacity: 0, x: 10 }} />
          )}
        </AnimatePresence>
      </motion.div>
    </StyledThemeButton>
  );
}

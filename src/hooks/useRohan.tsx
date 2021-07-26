import { useEffect, useMemo, useReducer, useState } from "react";
import {
  getEducation,
  getExperience,
  getGeneral,
  getProjects,
  getSkills,
} from "../utils/api";
import {
  education,
  experience,
  general,
  project,
  Rohan,
  skill,
} from "../components/types";

type actionprops = {
  type: "general" | "experience" | "projects" | "education" | "skills";
  payload?: general | experience[] | project[] | education[] | skill[];
};

function reducer(state: Rohan, action: actionprops): Rohan {
  switch (action.type) {
    case "general":
      return { ...state, general: action.payload as general };
    case "experience":
      return { ...state, experiences: action.payload as experience[] };
    case "projects":
      return { ...state, projects: action.payload as project[] };
    case "education":
      return { ...state, educations: action.payload as education[] };
    case "skills":
      return { ...state, skills: action.payload as skill[] };
  }
}
const initialState: Rohan = {
  general: {} as general,
  experiences: {} as experience[],
  projects: {} as project[],
  educations: {} as education[],
  skills: {} as skill[],
  error: false,
};
export function useRohan() {
  const [data, dispatch] = useReducer(reducer, initialState);
  const [error, setErr] = useState(false);
  useEffect(() => {
    getGeneral()
      .then((d) => dispatch({ type: "general", payload: d }))
      .catch(() => setErr(true));
    getProjects().then((d) => dispatch({ type: "projects", payload: d }));
    getExperience().then((d) => dispatch({ type: "experience", payload: d }));
    getSkills().then((d) => dispatch({ type: "skills", payload: d }));
    getEducation().then((d) => dispatch({ type: "education", payload: d }));
  }, []);

  return useMemo(
    () => ({
      rohan: { ...data, error },
    }),
    [data, error]
  );
}

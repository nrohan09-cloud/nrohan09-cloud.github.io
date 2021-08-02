import { useCallback, useEffect, useMemo, useReducer } from "react";
import { DefaultTheme } from "styled-components";
import { IThemer } from "../components/types";
import { Global, defaultdarktheme, defaultlighttheme } from "../theme";

type actionprops = {
  type: "updatehw" | "darkmode" | "toggle" | "lightmode";
  payload?: any;
};

function reducer(state: DefaultTheme, action: actionprops): DefaultTheme {
  switch (action.type) {
    case "darkmode":
      return defaultdarktheme;
    case "lightmode":
      return defaultlighttheme;
    case "updatehw":
      return { ...state, width: window.innerWidth, height: window.innerHeight };
    case "toggle":
      return state.colors.main.type === "dark"
        ? defaultlighttheme
        : defaultdarktheme;
    default:
      return defaultdarktheme;
  }
}

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

export function useThemer() {
  const [theme, dispatch] = useReducer(
    reducer,
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
        ? defaultdarktheme
        : defaultlighttheme
      : darkModeQuery.matches
      ? defaultdarktheme
      : defaultlighttheme
  );

  /* useEffect(() => {
    const update = () => dispatch({ type: "updatehw" });
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []); */

  useEffect(() => {
    dispatch({ type: "updatehw" });
  }, []);

  const toggle = useCallback(() => {
    dispatch({ type: "toggle" });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme.colors.main.type);
  }, [theme]);

  const themer = useMemo<IThemer>(() => {
    return { theme, Global, toggle, dispatch };
  }, [theme, toggle]);

  return themer;
}

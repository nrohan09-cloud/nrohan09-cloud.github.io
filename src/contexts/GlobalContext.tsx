import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { IThemer, Rohan } from "../components/types";
import { useThemer } from "../hooks/useThemer";
import { useWantCode } from "../hooks/useWantCode";
import { useRohan } from "../hooks/useRohan";
import { Global } from "../theme";
interface IGlobalContextProps {
  children: any;
}

interface IGlobalContext {
  themer: IThemer;
  rohan: Rohan;
}

export const GlobalContext = createContext<IGlobalContext>(
  {} as IGlobalContext
);

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const themer = useThemer();
  const { rohan } = useRohan();
  useWantCode(themer.theme);

  return (
    <GlobalContext.Provider value={{ themer, rohan }}>
      <ThemeProvider theme={themer.theme}>
        <Global />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

import React from "react";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import Home from "./components/Home";
import ProjectPage from "./components/Project";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Switch>
        <AnimateSharedLayout type="switch">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
        </AnimateSharedLayout>
      </Switch>
    </div>
  );
}

export default function A() {
  return (
    <Router>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </Router>
  );
}

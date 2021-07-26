import React from "react";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default function A() {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
}

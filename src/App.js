import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Telegram from "./components/Connect/Telegram/Telegram";
import Home from "./components/Home/Home";
import { createContext } from "react";
import Footer from "./components/Home/Footer/Footer";

// Used context api for control dark mode
export const theme = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(getMode);

  // Dark mode data store in localStorage
  useEffect( () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Load data from localStorage
  function getMode() {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    return savedMode || false;
  }

  return (
    <theme.Provider value={[darkMode, setDarkMode]}>
      <div className={darkMode ? "bg-dark" : "bg-white"}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/telegram">
              <Telegram />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </theme.Provider>
  );
}

export default App;

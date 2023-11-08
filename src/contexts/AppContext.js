import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const USER = "usuario";
const PASS = "demo";

export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const login = (values) => {
    if (values.username === USER && values.password === PASS){
      setUser(values.username)
    }

  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{ isDarkMode, toggleDarkMode, user, login, logout }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

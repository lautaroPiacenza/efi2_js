import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const login = (username) => {
    setUser(username);
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

import React, { createContext, useReducer, useContext } from "react";

import { globalReducer, initialState } from "../reducers/GlobalReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <AppContext.Provider value={{
      ...state,
      
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
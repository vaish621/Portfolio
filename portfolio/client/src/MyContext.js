import React, { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Context provider component
export const MyContextProvider = ({ children }) => {
  const [basename, setBasename] = useState('/');

  return (
    <MyContext.Provider value={{ basename, setBasename }}>
      {children}
    </MyContext.Provider>
  );
};

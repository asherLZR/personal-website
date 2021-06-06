import React, { useState, createContext } from 'react';

export const SoundContext = createContext({
  isSoundEnabled: true,
  setIsSoundEnabled: () => {
    // only if accessor is not wrapped in provider
  },
});

export const SoundProvider = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ isSoundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
};

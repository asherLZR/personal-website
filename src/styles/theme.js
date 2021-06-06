/* eslint-disable no-undef */
import React, { useState, createContext, useEffect } from 'react';
import { COLORS } from './colors';

export const ThemeContext = createContext();

// Credits: https://www.joshwcomeau.com/react/dark-mode
export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  function setColorMode(newValue) {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    root.style.setProperty(
      '--color-text',
      newValue === 'light' ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light' ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      '--color-primary',
      newValue === 'light' ? COLORS.light.primary : COLORS.dark.primary
    );
    root.style.setProperty(
      '--color-textTitle',
      newValue === 'light' ? COLORS.light.textTitle : COLORS.dark.textTitle
    );
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

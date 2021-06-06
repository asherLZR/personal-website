import React from 'react';
import { COLORS } from './src/styles/colors';

const PortalContainer = <div id="portal" />;

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([PortalContainer]);
  setPreBodyComponents(<MagicScriptTag />);
};

// Credits: https://www.joshwcomeau.com/react/dark-mode
const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--color-text',
    colorMode === 'light'
      ? '${COLORS.light.text}'
      : '${COLORS.dark.text}'
  );
  root.style.setProperty(
    '--color-background',
    colorMode === 'light'
      ? '${COLORS.light.background}'
      : '${COLORS.dark.background}'
  );
  root.style.setProperty(
    '--color-primary',
    colorMode === 'light'
      ? '${COLORS.light.primary}'
      : '${COLORS.dark.primary}'
  );
  root.style.setProperty(
    '--color-textTitle',
    colorMode === 'light'
      ? '${COLORS.light.textTitle}'
      : '${COLORS.dark.textTitle}'
  );
  root.style.setProperty('--initial-color-mode', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

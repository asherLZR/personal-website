/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { useSound } from '../hooks/use-sound';
import { AnimatedSun, AnimatedMoon } from '../images/animated';
import { IconButton } from './icon-button';
import { ThemeContext } from '../styles/theme';
import sfx from '../sounds/clave.wav';

export const ThemeToggle = (props) => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const isDark = colorMode === 'dark';

  // only useSound once the component has mounted
  const [playLow] = useSound(sfx);
  const [playHigh] = useSound(sfx, { playbackRate: 1.3 });

  const onClickHandler = (e) => {
    e.stopPropagation();
    if (isDark) {
      playHigh();
    } else {
      playLow();
    }
    setColorMode(isDark ? 'light' : 'dark');
  };

  if (!colorMode) {
    return null;
  }

  return (
    <IconButton {...props} onClick={onClickHandler}>
      <AnimatedMoon
        key="moon"
        isVisible={isDark}
        style={{ position: 'absolute' }}
        size={26}
      />
      <AnimatedSun key="sun" isVisible={!isDark} size={26} />
    </IconButton>
  );
};

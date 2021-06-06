import { useContext } from 'react';
import useSoundBase from 'use-sound';
import { SoundContext } from '../sounds/sounds';

export const useSound = (sound, options) => {
  const { isSoundEnabled } = useContext(SoundContext);

  return useSoundBase(sound, {
    soundEnabled: isSoundEnabled,
    volume: 0.25,
    interrupt: false,
    ...options,
  });
};

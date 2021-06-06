import { useEffect } from 'react';
import { useSound } from './use-sound';

export const useInterruptableSound = (
  sound,
  isTriggered,
  soundOptions = {}
) => {
  const [play, { stop }] = useSound(sound, soundOptions);

  useEffect(() => {
    if (isTriggered) {
      play();
    } else {
      stop();
    }

    return () => stop();
  }, [play, stop, isTriggered]);
};

import React, { useContext } from 'react';
import { AnimatedSoundOn } from '../images/animated';
import { IconButton } from './icon-button';
import { SoundContext } from '../sounds/sounds';
import { useSound } from '../hooks/use-sound';
import Bubble from '../sounds/bubble.wav';

export const SoundToggle = (props) => {
  const { isSoundEnabled, setIsSoundEnabled } = useContext(SoundContext);
  const [play] = useSound(Bubble);

  const onClickHandler = (e) => {
    e.stopPropagation();
    // user is switching to sound on, so play
    if (!isSoundEnabled) {
      play({ forceSoundEnabled: true });
    }
    setIsSoundEnabled(!isSoundEnabled);
  };

  return (
    <IconButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      onClick={onClickHandler}
    >
      <AnimatedSoundOn size={22} isSoundOn={isSoundEnabled} />
    </IconButton>
  );
};

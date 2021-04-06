import withPowerGuard from "./withPowerGuard";
import getState from "./state";
import setScreenStatus from "./setScreenStatus";
import playKeyboardKey from "./playKeyboardKey";

const keydownHandler = (event) => {
    event.stopPropagation();
    const {soundSet: {sounds}} = getState();
    if(sounds.find(item => item.keyTrigger === event.key.toUpperCase())) {
        const {url: sound, id: soundName, keyTrigger} = sounds.find(item => item.keyTrigger === event.key.toUpperCase());
        setScreenStatus(soundName);
        const btn = document.getElementById(keyTrigger);
        playKeyboardKey(sound, soundName, btn);
    }
  };

  export default withPowerGuard(keydownHandler);
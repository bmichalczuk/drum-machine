import withPowerGuard from "./withPowerGuard";
import playKeyboardKey from "./playKeyboardKey";
import getState from "./state";

const keyboardHandler = async (event) => {
    event.stopPropagation();
    const {target: {tagName, id}, target} = event;
      if(tagName === "BUTTON") {
        const {soundSet: {sounds}} = getState();
        const {url: sound, id: soundName} = sounds.find(item => item.keyTrigger === id);
        playKeyboardKey(sound, soundName, target);
    }
  };


  export default withPowerGuard(keyboardHandler);
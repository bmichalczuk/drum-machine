import playSound from "./playSound";
import setScreenStatus from "./screenHandler";
import {makeElementActive, makeElementInactive} from "./activeStatusHandlers";

const playKeyboardKey = async (sound, soundName, key) => {
    setScreenStatus(soundName);
    makeElementActive(key);
    await playSound(sound);
    makeElementInactive(key);
}

export default playKeyboardKey;
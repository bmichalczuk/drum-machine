import {setOne, setTwo} from "./sounds";
import {setSoundSet} from "./state";

const changeSoundSet = (currentSoundSet) => currentSoundSet === setOne ? setSoundSet(setTwo) : setSoundSet(setOne);

export default changeSoundSet;


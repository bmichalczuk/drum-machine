import {setOne, setTwo} from "./sounds";
import {setSoundSet} from "./state";

const handleSoundSet = (currentSoundSet) => currentSoundSet === setOne ? setSoundSet(setTwo) : setSoundSet(setOne);

export default handleSoundSet;


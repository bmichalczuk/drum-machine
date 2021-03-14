import getState from "./state";

const playSound = sound => {
    const audio = new Audio(sound);
    const {volume} = getState();
    audio.volume = volume;
    return  audio.play();
};


export default playSound;
import {setOne} from "./sounds";

const state = {
    power: true,
    soundSet: setOne,
    volume: 0.2
}

export const setVolume = volume => {
    if(typeof volume === "number" && volume >= 0 && volume <= 1) {
        state.volume = volume;
    }
}

export const setSoundSet = set => state.soundSet = set;


const getState = () => state;

export default getState;
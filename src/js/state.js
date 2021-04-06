import {setOne} from "./sounds";

const state = {
    power: false,
    soundSet: setOne,
    volume: 0.2
};

export const setVolume = volume => {
    if(typeof volume === "number" && volume >= 0 && volume <= 1) {
        state.volume = volume;
    }
};

export const setSoundSet = set => state.soundSet = set;

export const switchPower = () => state.power = !state.power;


const getState = () => state;

export default getState;
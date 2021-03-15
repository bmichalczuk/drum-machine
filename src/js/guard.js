import getState from "./state";

const powerGuard = fn => {
    return (...args) => {
        const {power} = getState();
        return power && fn(...args);
    }
}

export default powerGuard;
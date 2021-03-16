import getState from "./state";

const withPowerGuard = fn => {
    return (...args) => {
        const {power} = getState();
        return power && fn(...args);
    }
}

export default withPowerGuard;
import withPowerGuard from "./withPowerGuard";
import changeSoundSet from "./changeSoundSet";
import getState from "./state";
import setScreenStatus from "./setScreenStatus";

const soundSetHandler = (event) => {
    event.stopPropagation();
    const {soundSet: currentSoundSet} = getState();
    changeSoundSet(currentSoundSet);
    const {soundSet: {name}} = getState();
    setScreenStatus(name);
};

export default withPowerGuard(soundSetHandler);


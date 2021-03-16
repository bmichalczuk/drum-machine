import withPowerGuard from "./withPowerGuard";
import setScreenStatus from "./setScreenStatus";
import {setVolume} from "./state";

const volumeHandler = (event) => {
    event.stopPropagation();
    const volume = parseFloat(event.target.value);
    setScreenStatus(`Volume: ${parseInt(volume * 100)}`);
    setVolume(volume);
}

export default withPowerGuard(volumeHandler);
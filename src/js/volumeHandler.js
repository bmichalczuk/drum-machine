import {setVolume} from "./state";
import setScreenStatus from "./screenHandler";

const volumeBar = document.querySelector(".settings__volume");


volumeBar.addEventListener("change", function(e) {
    e.stopPropagation();
    const volume = parseFloat(e.target.value);
    setScreenStatus(`Volume: ${parseInt(volume * 100)}`)
    setVolume(volume);
});

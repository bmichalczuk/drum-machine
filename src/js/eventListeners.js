import keyboardHandler from "./keyboardHandler";
import keydownHandler from "./keydownHandler";
import soundSetHandler from "./soundSetHandler";
import volumeHandler from "./volumeHandler";
import powerHandler from "./powerHandler";

document.querySelector(".keyboard").addEventListener("click", keyboardHandler);

document.querySelector("html").addEventListener("keydown", keydownHandler);

document.querySelector("#bank").addEventListener("change", soundSetHandler);

document.querySelector(".settings__volume").addEventListener("change", volumeHandler);

document.querySelector("#power").addEventListener("change", powerHandler);


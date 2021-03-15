import getState from "./state";
import setScreenStatus from "./screenHandler";
import playKeyboardKey from "./keyboardKeyHandler";
import soundSetHandler from "./soundSetHandler";
import {switchPower, setVolume} from "./state";
import powerGuard from "./guard";
import screenHandler from "./screenHandler";

document.querySelector(".keyboard").addEventListener("click", powerGuard(async function(e) {
  e.stopPropagation();
  const {target: {tagName, id}, target} = e;
    if(tagName === "BUTTON") {
      const {soundSet: {sounds}} = getState();
      const {url: sound, id: soundName} = sounds.find(item => item.keyTrigger === id);
      playKeyboardKey(sound, soundName, target);
  }
}));

document.querySelector("html").addEventListener("keydown", powerGuard(async function(e) {
  e.stopPropagation();
  const {soundSet: {sounds}} = getState();
  if(sounds.find(item => item.keyTrigger === e.key.toUpperCase())) {
      const {url: sound, id: soundName, keyTrigger} = sounds.find(item => item.keyTrigger === e.key.toUpperCase());
      setScreenStatus(soundName);
      const btn = document.getElementById(keyTrigger);
      playKeyboardKey(sound, soundName, btn);
  }
}));

document.querySelector("#bank").addEventListener("change", powerGuard(function(e) {
  e.stopPropagation();
  const {soundSet: currentSoundSet} = getState();
  soundSetHandler(currentSoundSet);
  const {soundSet: {name}} = getState();
  setScreenStatus(name);
}));

document.querySelector(".settings__volume").addEventListener("change", powerGuard(function(e) {
  e.stopPropagation();
  const volume = parseFloat(e.target.value);
  setScreenStatus(`Volume: ${parseInt(volume * 100)}`)
  setVolume(volume);
}));

document.querySelector("#power").addEventListener("change", () => {
  switchPower();
  getState().power === false && screenHandler("");
});


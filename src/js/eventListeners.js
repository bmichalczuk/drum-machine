import getState from "./state";
import setScreenStatus from "./screenHandler";
import playKeyboardKey from "./keyboardKeyHandler";
import soundSetHandler from "./soundSetHandler";
import "./volumeHandler";

document.querySelector(".keyboard").addEventListener("click", async function(e) {
  e.stopPropagation();
  const {target: {tagName, id}, target} = e;
    if(tagName === "BUTTON") {
      const {soundSet} = getState();
      const {url: sound, id: soundName} = soundSet.find(item => item.keyTrigger === id);
      playKeyboardKey(sound, soundName, target);
  }
});

document.querySelector("html").addEventListener("keydown", async function(e) {
  e.stopPropagation();
  const {soundSet} = getState();
  if(soundSet.find(item => item.keyTrigger === e.key.toUpperCase())) {
      const {url: sound, id: soundName, keyTrigger} = soundSet.find(item => item.keyTrigger === e.key.toUpperCase());
      setScreenStatus(soundName);
      const btn = document.getElementById(keyTrigger);
      playKeyboardKey(sound, soundName, btn);
  }
});

document.querySelector("#bank").addEventListener("change", function(e) {
  e.stopPropagation();
  const {soundSet: currentSoundSet} = getState();
  console.log(currentSoundSet);
  soundSetHandler(currentSoundSet);
  console.log(currentSoundSet.constructor.name);

});
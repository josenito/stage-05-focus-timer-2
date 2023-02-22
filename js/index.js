import Controls from "./controls.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"

import {
  buttonModeLight,
  buttonModeDark,
  minutesDisplay,
  secondsDisplay,
  cardSoundForest,
  cardSoundRain,
  cardSoundCoffeeShop,
  cardSoundFirePlace,
} from "./elements.js"

const controls = Controls({
  buttonModeLight,
  buttonModeDark,
  cardSoundForest,
  cardSoundRain,
  cardSoundCoffeeShop,
  cardSoundFirePlace
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop,
  stopAudios: sound.stopAudios
})


Events({ controls, timer, sound })
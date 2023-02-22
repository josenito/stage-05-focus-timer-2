import {
  buttonModeLight,
  buttonModeDark,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSub,
  cardSoundForest,
  cardSoundRain,
  cardSoundCoffeeShop,
  cardSoundFirePlace,
  buttonSoundForest,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFirePlace,
  volumeSoundForest,
  volumeSoundRain,
  volumeSoundCoffeeShop,
  volumeSoundFirePlace
} from "./elements.js"

export default function ({ controls, timer, sound }) {
  buttonModeLight.addEventListener('click', function () {
    controls.modeLight()
  })

  buttonModeDark.addEventListener('click', function () {
    controls.modeDark()
  })

  buttonPlay.addEventListener('click', function () {
    timer.countDown()
  })

  buttonStop.addEventListener('click', function () {
    sound.stopAudios()
    controls.stop()
    timer.reset()
  })

  buttonAdd.addEventListener('click', function () {
    let newMinutes = controls.addMinutes(Number(minutesDisplay.textContent))
    let newSeconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(newMinutes, newSeconds)
  })

  buttonSub.addEventListener('click', function () {
    let newMinutes = controls.subMinutes(Number(minutesDisplay.textContent))
    let newSeconds = Number(secondsDisplay.textContent)
    timer.updateDisplay(newMinutes, newSeconds)
  })


  buttonSoundForest.addEventListener('click', function () {
    let cardSelected = cardSoundForest.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundForest.pause()
      cardSoundForest.classList.remove('cardSelected')
      return
    }

    controls.soundForest()
    sound.pressButtonAudioForest(volumeSoundForest.value)
  })

  buttonSoundRain.addEventListener('click', function () {
    let cardSelected = cardSoundRain.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundRain.pause()
      cardSoundRain.classList.remove('cardSelected')
      return
    }

    controls.soundRain()
    sound.pressButtonAudioRain(volumeSoundRain.value)
  })

  buttonSoundCoffeeShop.addEventListener('click', function () {
    let cardSelected = cardSoundCoffeeShop.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundCoffeeShop.pause()
      cardSoundCoffeeShop.classList.remove('cardSelected')
      return
    }

    controls.soundCoffeeShop()
    sound.pressButtonAudioCoffeeShop(volumeSoundCoffeeShop.value)
  })

  buttonSoundFirePlace.addEventListener('click', function () {
    let cardSelected = cardSoundFirePlace.classList.contains('cardSelected')

    if (cardSelected) {
      sound.soundFirePlace.pause()
      cardSoundFirePlace.classList.remove('cardSelected')
      return
    }

    controls.soundFirePlace()
    sound.pressButtonAudioFirePlace(volumeSoundFirePlace.value)
  })

  volumeSoundForest.addEventListener('click', function () {
    let newVolume = volumeSoundForest.value
    sound.setVolumeSoundForest(newVolume)
  })

  volumeSoundRain.addEventListener('click', function () {
    let newVolume = volumeSoundRain.value
    sound.setVolumeSoundRain(newVolume)
  })

  volumeSoundCoffeeShop.addEventListener('click', function () {
    let newVolume = volumeSoundCoffeeShop.value
    sound.setVolumeSoundCoffeeShop(newVolume)
  })

  volumeSoundFirePlace.addEventListener('click', function () {
    let newVolume = volumeSoundFirePlace.value
    sound.setVolumeSoundFirePlace(newVolume)
  })

}
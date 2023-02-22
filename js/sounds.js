export default function () {

  const soundForest = new Audio("./assets/forest.wav")
  const soundRain = new Audio("./assets/rain.wav")
  const soundCoffeeShop = new Audio("./assets/coffeeShop.wav")
  const soundFirePlace = new Audio("./assets/firePlace.wav")

  soundForest.loop = true
  soundRain.loop = true
  soundCoffeeShop.loop = true
  soundFirePlace.loop = true


  function pressButtonAudioForest(volume) {
    stopAudios()
    soundForest.play()
    soundForest.volume = convertVolumeNumber(volume)
  }

  function pressButtonAudioRain(volume) {
    stopAudios()
    soundRain.play()
    soundRain.volume = convertVolumeNumber(volume)
  }

  function pressButtonAudioCoffeeShop(volume) {
    stopAudios()
    soundCoffeeShop.play()
    soundCoffeeShop.volume = convertVolumeNumber(volume)
  }

  function pressButtonAudioFirePlace(volume) {
    stopAudios()
    soundFirePlace.play()
    soundFirePlace.volume = convertVolumeNumber(volume)
  }

  function setVolumeSoundForest(volume) {
    soundForest.volume = convertVolumeNumber(volume)
  }

  function setVolumeSoundRain(volume) {
    soundRain.volume = convertVolumeNumber(volume)
  }

  function setVolumeSoundCoffeeShop(volume) {
    soundCoffeeShop.volume = convertVolumeNumber(volume)
  }

  function setVolumeSoundFirePlace(volume) {
    soundFirePlace.volume = convertVolumeNumber(volume)
  }

  function convertVolumeNumber(volume) {
    let newVolume = Number(volume) / 100
    return newVolume
  }

  function stopAudios() {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeShop.pause()
    soundFirePlace.pause()
  }

  return {
    pressButtonAudioForest,
    pressButtonAudioRain,
    pressButtonAudioCoffeeShop,
    pressButtonAudioFirePlace,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFirePlace,
    setVolumeSoundForest,
    setVolumeSoundRain,
    setVolumeSoundCoffeeShop,
    setVolumeSoundFirePlace,
    stopAudios
  }

}
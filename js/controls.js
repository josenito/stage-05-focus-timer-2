export default function Controls({
  buttonModeLight,
  buttonModeDark,
  cardSoundForest,
  cardSoundRain,
  cardSoundCoffeeShop,
  cardSoundFirePlace
}) {
  function modeLight() {
    buttonModeLight.classList.add('hide')
    buttonModeDark.classList.remove('hide')
    document.body.classList.add('darkTheme')
    document.body.classList.remove('lightTheme')
  }

  function modeDark() {
    buttonModeLight.classList.remove('hide')
    buttonModeDark.classList.add('hide')
    document.body.classList.remove('darkTheme')
    document.body.classList.add('lightTheme')
  }

  function stop() {
    resetCards()
  }

  function addMinutes(minutes) {
    let newMinutes = minutes + 5
    let numberMinutesGreater99 = newMinutes > 99

    if (numberMinutesGreater99) {
      newMinutes = 99
    }

    return newMinutes
  }

  function subMinutes(minutes) {
    let newMinutes = minutes - 5
    let negativeNumberOfMinutes = newMinutes <= 0

    if (negativeNumberOfMinutes) {
      newMinutes = 0
    }

    return newMinutes
  }

  function soundForest() {
    resetCards()
    cardSoundForest.classList.add('cardSelected')
  }

  function soundRain() {
    resetCards()
    cardSoundRain.classList.add('cardSelected')
  }

  function soundCoffeeShop() {
    resetCards()
    cardSoundCoffeeShop.classList.add('cardSelected')
  }

  function soundFirePlace() {
    resetCards()
    cardSoundFirePlace.classList.add('cardSelected')
  }

  function resetCards() {
    cardSoundForest.classList.remove('cardSelected')
    cardSoundRain.classList.remove('cardSelected')
    cardSoundCoffeeShop.classList.remove('cardSelected')
    cardSoundFirePlace.classList.remove('cardSelected')
  }

  return {
    modeLight,
    modeDark,
    stop,
    addMinutes,
    subMinutes,
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFirePlace
  }
}
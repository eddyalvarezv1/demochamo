const elMaskedWord = document.querySelector('.hangman__maskedword')
const elButtons = document.querySelector('.hangman__buttons')
const elResult = document.querySelector('.hangman__result')

const ANSWER = 'Javascript'

const word = ANSWER.toUpperCase()

const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))

let correctGuesses = ''

const selectLetter = (letter) => {
  console.log('seleccionando letra', letter)
}

const renderMaskedWord = () => {
  elMaskedWord.textContent = word
    .split('')
    .map(
      letter => correctGuesses.includes(letter) ? letter : '_'
    )
    .join('')

  // SI GANA EL JUEGO HAY QUE AGREGAR MÁS LOGICA
}

const renderAlphabet = () => {
  let list = ''

  ALPHABET.forEach((letter) => {
    list += `<button onclick="selectLetter('${letter}')">${letter}</button>`
  })

  elButtons.innerHTML = list
}

renderMaskedWord()
renderAlphabet()
import { commonWords } from "./constants.js"
console.log(commonWords)

// GET RANDOM WORD
const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)]
console.log(randomWord)

// GET WORDS THAT ARE 3 CHARACTERS OR MORE
let allowedWords = []
commonWords.map(function (i) {
  if (i.length >= [3]) {
    return allowedWords.push(i)
  }
})
console.log(allowedWords)

// GET RANDOM WORD OUT OF THE ALLOWED WORDS
const randomAllowedWord =
  allowedWords[Math.floor(Math.random() * allowedWords.length)]
console.log(randomAllowedWord)

//SEPARATE THE RANDOM ALLOWED WORDS INTO SEPARATE CHARACTERS
const separatedWord = randomAllowedWord.split("")
console.log(separatedWord)

// let wordHtml = separatedWord.map(function (item) {
//   const currentWord = separatedWord
//   document.querySelector("#currentWord").innerHTML = currentWord.join('')

//})

let hiddenWords = []
for (let i = 0; i < randomAllowedWord.length; i++) {
  hiddenWords.push(`<div class='guessBox'></div>`)
}
document.getElementById("currentWord").innerHTML = hiddenWords.join("")
let lettersUsed = ("")
let lives = 8
document.getElementById("lives").innerHTML = "Attempts Remaining: " + lives
document.getElementById("letterButtons").addEventListener("click", function (e) {
    console.log(e.target.innerText)
    if (separatedWord.includes(e.target.innerText)) {
      for (let i = 0; i < separatedWord.length; i++) {
        if (separatedWord[i] === e.target.innerText) {
          hiddenWords.splice(
            i,
            1,
            `<div class='guessBox'>${separatedWord[i]}</div>`
          )
        }
        document.getElementById("currentWord").innerHTML = hiddenWords.join("")
        console.log(hiddenWords)
      }
    } else {
      lettersUsed += e.target.innerText
      document.getElementById("lettersUsed").innerHTML = 
        "Letters Used: " + lettersUsed
      document.getElementById("lives").innerHTML =
        "Attempts Remaining: " + (lives -= 1)
    }
    if (lives == 0) {
      if (alert("You Were Hung")) {
      } else {
        window.location.reload()
      }
    }
    if (!hiddenWords.includes(`<div class='guessBox'></div>`)) {
      alert("You Escaped the Noose!")
    }
  })

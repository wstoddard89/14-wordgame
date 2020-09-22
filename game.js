import {commonWords} from "./constants.js"
console.log(commonWords)


// GET RANDOM WORD
const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
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
const randomAllowedWord = allowedWords[Math.floor(Math.random() * allowedWords.length)];
console.log(randomAllowedWord)


// SEPARATE THE RANDOM ALLOWED WORDS INTO SEPARATE CHARACTERS
// const separatedWord = randomAllowedWord.split('')
// console.log(separatedWord)


// let wordHtml = separatedWord.map(function (item) {
//   const currentWord = separatedWord
//   document.querySelector("#currentWord").innerHTML = currentWord.join('')

//})

let hiddenWords = ""
for (let i = 0; i < randomAllowedWord.length; i++) {
  hiddenWords += `<div class='guessBox'></div>`
}
document.getElementById("currentWord").innerHTML = hiddenWords







let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];





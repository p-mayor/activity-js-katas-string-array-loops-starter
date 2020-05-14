/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. 
  3. Write a WHILE statement which loops over the "word" string and
     counts the number of times the "letter" appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to obtain
     a guess from a user's input for Point 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// YOUR CODE HERE

let outputElement = document.querySelector("#output")
let inputElement = document.querySelector("#input")
let submitButton = document.querySelector("#submit")

submitButton.addEventListener("click", function () {
   let word = "superstitious"
   let searchLetter = inputElement.value

   let counter = 0

   let letterCount = 0

   while (counter < word.length) {
      let currentLetter = word[counter]
      if (currentLetter === searchLetter) {
         letterCount += 1
      }
      counter += 1
   }

   if (letterCount > 0) {
      outputElement.innerHTML = "The letter " + searchLetter + " exists " + letterCount + " times in this word!"
   } else {
      outputElement.innerHTML = "Nope, that letter doesn't exist in my word!"
   }
})








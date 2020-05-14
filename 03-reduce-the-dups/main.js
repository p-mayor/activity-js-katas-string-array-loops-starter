/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

let outputElement = document.querySelector("#output")

let redundantArray = [1, 1, 2, 3, 3, 4, 6, 6, 7, 7, 8, 9, 10, 10]

let removedDuplicatesArray = []

let counter = 0
while (counter < redundantArray.length) {
  let currentNumber = redundantArray[counter]
  if (removedDuplicatesArray.includes(currentNumber) === false) {
    removedDuplicatesArray.push(currentNumber)
  }
  counter += 1
}

outputElement.innerHTML += "Before:" + redundantArray + "<br>" + "After:" + removedDuplicatesArray


/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE

let mountainHeightArray = [234, 456, 5435, 786, 234, 434, 545, 7676, 34535, 66667777, 34]

let tallestMountainHeight = 0

let counter = 0
while (counter < mountainHeightArray.length) {
   let currentMountainHeight = mountainHeightArray[counter]
   if (currentMountainHeight > tallestMountainHeight) {
      tallestMountainHeight = currentMountainHeight
   }
   counter += 1
}

document.body.innerHTML = tallestMountainHeight

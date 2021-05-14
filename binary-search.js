const binarySearch = (arrayofNumbers, target) => {
  arrayofNumbers.sort((a, b) => a - b);
  let startingIndex = 0;
  let endingIndex = arrayofNumbers.length - 1;

  while (startingIndex <= endingIndex) {
    let midIndex = Math.floor((startingIndex + endingIndex) / 2);
    if(arrayofNumbers[midIndex] === target){
      return midIndex;
    }else if(arrayofNumbers[midIndex] < target) {
      startingIndex = midIndex + 1
    } else {
      endingIndex = midIndex - 1
    }
  }
  return null;
}

const numbers = [1, 90, 66, 23, 89, 40, 12, 4, 0, 54, 77, 51, 68, 37, 18, 2];
const verify = (index) => {
  if(index !== null){
    console.log(`Target found at index: ${result}`)
  } else {
    console.log('Target not found');
  }
}
const result = binarySearch(numbers, 90);
verify(result);

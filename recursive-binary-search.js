const recursiveBinarySearch = (arrayofNumbers, target) => {
  arrayofNumbers.sort((a, b) => a - b);
  return performSearch(arrayofNumbers, target);
}

const performSearch = (array, target) => {
  if(array.length == 0){
    return false;
  }else {
    let midIndex = Math.floor(array.length / 2);
    if(array[midIndex] === target){
      return true;
    } else {
      if(array[midIndex] < target) { 
        return performSearch(array.slice(midIndex + 1), target);
      }else{
        return performSearch(array.slice(0, midIndex), target);
      }
    }
  }
}

const numbers = [1, 90, 66, 23, 89, 40, 12, 4, 0, 54, 77, 51, 68, 37, 18, 2];
const verify = (index) => {
  console.log(`Target found: ${result}`)
}

const result = recursiveBinarySearch(numbers, 51);
verify(result);
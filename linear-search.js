const linearSearch = (arr, target) => {
  // Returns the index position of the target if found, else returns null
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === target) {
      return i;
    } 
  }
  return null;
}

const verify = (index) => {
  if(index !== null){
    console.log(`Target found at index: ${index}`)
  } else {
    console.log('Target not found');
  }
}

let numbers = [1,2,3,4,5,6,7,8,9,10];

const result = linearSearch(numbers, 6);
verify(result);
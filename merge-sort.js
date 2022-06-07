// Merge Sort out-of-place
// Do not modify the original array

  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

function mergeSort(arr) {
  if (arr.length <= 1) {return arr}

  let half1 = arr.slice(0, Math.floor(arr.length / 2));
  let half2 = arr.slice(Math.floor(arr.length / 2));

  let sorted1 = mergeSort(half1);
  let sorted2 = mergeSort(half2);

  return merge(sorted1, sorted2);
}


function merge(arrA, arrB) {
  const mergedArr = [];
  let pointer1 = 0; let pointer2 = 0;

  while(pointer1 < arrA.length || pointer2 < arrB.length) {

    if(arrA[pointer1] < arrB[pointer2]) {
      mergedArr.push(arrA[pointer1]);
      pointer1++;
    } else if(arrB.length > 0) {
      mergedArr.push(arrB[pointer2]);
      pointer2++
    }

    if(pointer1 === arrA.length && pointer2 !== arrB.length) {
      mergedArr.push(...arrB.slice(pointer2));
      pointer2 = arrB.length;
    } else if (pointer2 === arrB.length && pointer1 !== arrA.length) {
      mergedArr.push(...arrA.slice(pointer1));
      pointer1 = arrA.length;
    }
  }

  return mergedArr;
}

// Takes in two sorted arrays and returns them merged into one

  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

module.exports = [merge, mergeSort];

/*let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
let arr3 = [1, 3];

console.log(merge(arr1, arr2));
console.log(merge(arr3, arr2));
console.log(merge(arr3, []));
console.log(merge([], arr3));

console.log(mergeSort([12, 55, 18, 99, 75, 62, 3, 14, 11, 22, 65, 62, 92, 17, 62, 42, 68, 62])); */

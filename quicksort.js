  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order


function quicksort(arr) {
  if (arr.length <= 1) {return arr}

  let pivot = arr[0];
  let left = []; let right = [];

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {left.push(arr[i])}
    else {right.push(arr[i])}
  }

  let leftSorted = quicksort(left);
  let rightSorted = quicksort(right);

  return [...leftSorted, pivot, ...rightSorted];
}


module.exports = [quicksort];

//console.log(quicksort([2,4,6,82,2,2,2,2,1,3,5,7,9]));

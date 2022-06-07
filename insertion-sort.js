// Insertion Sort out-of-place
// Do not modify the original array

  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the /left/ by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

function insertionSort(arr) {
  const copy = []; const sorted = [];

  arr.forEach( ele => {
    copy.push(ele);
  });

  while (copy.length > 0) {
    console.log(sorted.join(','));
    let temp = copy.pop(); let inserted = false;

    if (sorted[0] === undefined) {sorted[0] = temp; inserted = true}

    for (let i = sorted.length - 1; i >= 0 && !inserted; i--) {
      if (sorted[i] < temp) {
        sorted.splice(i + 1, 0, temp);
        inserted = true;
      }
      else if (i === 0) {sorted.unshift(temp)}
    }
  }

  return sorted;
}

//console.log(insertionSort([2,4,6,8,1,3,5,7,9]));


function insertionSortInPlace(arr) {
  let pointer = 1;
  let unsorted = arr.length - 1;

  while (unsorted > 0) {
    console.log(arr.join(',')) //

    let [temp] = arr.splice(pointer, 1);
    let inserted = false;

    for (let i = pointer - 1; i >= 0 && !inserted; i--) {

      if (arr[i] < temp) {
        arr.splice(i + 1, 0, temp);
        inserted = true;
      }
      else if (i === 0) {arr.unshift(temp); inserted = true}
    }

    pointer++; unsorted--;
  }

  return arr;
}

//console.log(insertionSortInPlace([2,4,6,8,1,3,5,7,9]));

// In-place Insertion Sort
// Mutates the original array


  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the \left\ by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

module.exports = [insertionSort, insertionSortInPlace];

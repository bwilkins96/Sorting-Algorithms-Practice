 // Copy the original array
  // Create an array to store the sorted values

   // While the array is not empty...
    // Find the index of the minimum value in the unsorted half
    // Save and remove the value at the min index
    // Add the min value to the end of the sorted array

function selectionSort(arr) {
  const copy = []; const sorted = [];
  let min = Infinity; let minIdx;

  arr.forEach( ele => {
    copy.push(ele);
  })

  while (copy.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    copy.forEach( (ele, i) => {
      if (ele < min) {min = ele; minIdx = i}
    })

    sorted.push(...copy.splice(minIdx, 1));
    min = Infinity;
  }

  return sorted;
}

//console.log(selectionSort([2,4,6,8,1,3,5,7,9]));


function selectionSortInPlace(arr) {
  let divider = 0; let unsorted = arr.length;

  while (unsorted > 0) {
    // Do not move this console.log
    console.log(arr.join(","));

    let min = Infinity; let minIdx;

    for(let i = divider; i < arr.length; i++) {
      if (arr[i] < min) { min = arr[i]; minIdx = i}
    }

    arr.splice(divider, 0, ...arr.splice(minIdx, 1))

    divider++; unsorted--;
  }

  return arr;
}

//console.log(selectionSortInPlace([2,4,6,8,1,3,5,7,9]));

// Set a pointer at zero diving the array into sorted and unsorted halves

// Repeat while the unsorted half is not empty:
 // Find the index of the minimum value in the unsorted half
    // Save the min value
     // Shift every unsorted value to the left of the min value to the right by 1
    // Put the min value at the divider
    // Increment the divider and repeat


module.exports = [selectionSort, selectionSortInPlace];

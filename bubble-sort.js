
function bubbleSort(arr) {

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }

    // Do not move this console.log
    console.log(arr.join(","));
  }

    return arr;
}

module.exports = bubbleSort;

console.log(bubbleSort([2,4,6,8,1,3,5,7,9]));

 // Iterate through the array
      // If the current value is greater than its neighbor to the right
        // Swap those values

        // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning

const [
    oddEvenSort,
    validAnagrams,
    reverseBaseSort,
    frequencySort,
    ageSort,
    snakeSort,
  ] = require("./custom-sorts.js")


  let users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 30,
      occupation: "Software Engineer",
      friends: [2, 3, 4],
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 25,
      occupation: "Data Scientist",
      friends: [1, 4],
    },
    {
      id: 3,
      firstName: "Mary",
      lastName: "Smith",
      age: 32,
      occupation: "UX Designer",
      friends: [2, 4],
    },
    {
      id: 4,
      firstName: "James",
      lastName: "Johnson",
      age: 55,
      occupation: "CTO",
      friends: [1, 2, 3],
    },
  ];

ageSort(users);
console.log(users);

//----------------------------------------------------------------------
console.log('\n');

let arr1 = [5, 4, 7, 2, 9, 8, 1, 6, 3];
let arr2 = [5, 8, 13, 6, 22, 14, 9];

oddEvenSort(arr1);           // => [1, 3, 5, 7, 9, 2, 4, 6, 8]
oddEvenSort(arr2);           // => [5, 9, 13, 6, 8, 14, 22]

console.log(arr1);
console.log(arr2);

//----------------------------------------------------------------------
console.log('\n');

let s = "anagram";
let t = "nagaram";

console.log(validAnagrams(s, t));

let s2 = "wolf"
let t2 = "brothers"

console.log(validAnagrams(s2, t2));

//----------------------------------------------------------------------
console.log('\n');

arr1 = [11, 1, 101, 0, 10, 100];
arr2 = [1, 45, 164, 6, 31, 90, 671];

reverseBaseSort(arr1);      // => [100, 101, 10, 11, 0, 1]
reverseBaseSort(arr2);      // => [164, 671, 31, 45, 90, 1, 6]

console.log(arr1);
console.log(arr2);

//----------------------------------------------------------------------
console.log('\n');

arr1 = [1, 1, 2, 2, 2, 3];
arr2 = [2, 3, 1, 3, 2];
let arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
frequencySort(arr2);        // => [1, 3, 3, 2, 2]
frequencySort(arr3);        // => [5, -1, 4, 4, -6, -6, 1, 1, 1]

console.log(arr1);
console.log(arr2);
console.log(arr3);

function ageSort(users) {

  users.sort( (userA, userB) => {
    if (userA.age > userB.age) {return 1}
    if (userA.age < userB.age) {return -1}
  });

  return users;
}

function oddEvenSort(arr) {

  arr.sort( (a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) {return -1}
    if (a % 2 === 0 && b % 2 !== 0) {return 1}
    return a - b;
  });

  return arr;
}

function validAnagrams(s, t) {
  let sArr = s.split(""); let tArr = t.split("");

  sArr.sort(); tArr.sort();

  return (sArr.join("") === tArr.join(""));
}

function reverseBaseSort(arr) {

  arr.sort( (a, b) => {
    if (a.toString().length > b.toString().length) {return -1}
    if (a.toString().length < b.toString().length) {return 1}
    return a - b;
  });

  return arr;
}

function frequencySort(arr) {
  const counter = {};

  arr.forEach( ele => {
    if (ele in counter) {counter[ele]++}
    else {counter[ele] = 1}
  });

  arr.sort( (a, b) => {
    if (counter[a] > counter[b]) {return 1}
    if (counter[a] < counter[b]) {return -1}
    return b - a;
  });

  return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];

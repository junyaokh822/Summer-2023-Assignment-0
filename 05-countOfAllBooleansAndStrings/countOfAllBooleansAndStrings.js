function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'boolean' || typeof element === 'string') {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;

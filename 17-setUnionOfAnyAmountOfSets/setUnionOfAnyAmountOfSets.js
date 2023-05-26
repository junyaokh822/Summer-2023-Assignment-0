function setUnionOfAnyAmountOfSets(...args) {
  const unionSet = new Set();
  for (let set of args) {
    for (let item of set) {
      unionSet.add(item);
    }
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

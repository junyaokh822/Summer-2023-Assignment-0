function productOfAnyAmountOfNumbers(...args) {
  if (args.length === 0) {
    return 0;
  }
  const product = args.reduce((accumulator, currentValue) => accumulator * currentValue);
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

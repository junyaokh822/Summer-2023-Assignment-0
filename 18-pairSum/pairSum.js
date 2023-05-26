function pairSum(nums, target) {
  const numSet = new Set(); 
  for (const num of nums) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true; 
    }
    numSet.add(num);
  }
  return false; // No pair found
}

// Do not edit this line;
module.exports = pairSum;

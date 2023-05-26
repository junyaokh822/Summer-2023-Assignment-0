function sumOfMinimumAndMaximum(nums) {
  let minimum = nums[0];
  let maximum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minimum) {
      minimum = nums[i];
    }
    if (nums[i] > maximum) {
      maximum = nums[i];
    }
  }
  return minimum + maximum;
}


// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;

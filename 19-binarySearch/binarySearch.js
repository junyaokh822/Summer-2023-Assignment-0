class MySolution {
  constructor() {
    this.flag = false;
  }
  binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);    
      if (nums[mid] === target) {
        this.flag = true;
        break;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return this.flag;
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

const num = [1, 2, 2, 1];
const a = 1;

const diff = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) count++;
    }
  }
  return count;
};

console.log(diff(num, a));

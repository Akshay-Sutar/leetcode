//https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let res = [];
    let left = [nums[0]];
    let right = Array(nums.length - 1).fill(1);
    right.push(nums[nums.length - 1]);

    for (let i = 1; i < nums.length; ++i) {
        left[i] = left[i - 1] * nums[i];
        right[nums.length - 1 - i] = right[nums.length - i] * nums[nums.length - 1 - i]
    }

    res[0] = right[1]
    res[nums.length - 1] = left[nums.length - 2];

    for (let i = 1; i < nums.length - 1; ++i) {
        res[i] = left[i - 1] * right[i + 1];
    }
    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
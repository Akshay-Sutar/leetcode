//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var searchInsert = function (nums, target) {
    if (target <= nums[0]) {
        return 0;
    }
    for (let i = 0; i < nums.length - 1; ++i) {
        if (nums[i] <= target && target <= nums[i + 1]) {
            return i + 1;
        }
    }
    return nums.length;
};
const res = searchInsert([1, 3, 5, 6], 5);
console.log(res)
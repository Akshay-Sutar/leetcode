//  leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === "_") {
            return i;
        }
        if (nums[i] === nums[i + 1]) {
            // duplicate, find the last index of duplication
            let j = i + 1;
            for (j; j < nums.length; ++j) {
                if (nums[j] !== nums[i]) {
                    break;
                }
            }

            // shift from j to len - 1
            let diff = j - i - 1;
            nums.splice(i, diff)
            nums.push(...Array(diff).fill("_"))
        }
    }
};
const res = removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

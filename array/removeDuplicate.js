//  leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var removeDuplicates = function (nums) {
    let shift = 0;
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

            for (let k = j; k < nums.length - shift; ++k) {
                nums[k - diff] = nums[k];
            }

            shift += diff;


            for (let k = nums.length - shift; k < nums.length; ++k) {
                nums[k] = "_";
            }

        }
    }

};
const res = removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log('res', res)

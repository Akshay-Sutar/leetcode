//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var removeElement = function(nums, val) {
    let count = 0;
    for (let i=0; i< nums.length; ++i) {
        if (nums[i] === val) {
            nums.splice(i,1)
            nums.push("_")
            --i;
            ++count;
        }
    }
    return nums.length-count;
};

removeElement([0,1,2,2,3,0,4,2],2)
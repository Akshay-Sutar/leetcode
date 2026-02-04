//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var plusOne = function(digits) {
    return ( parseFloat(digits.join('')) + 1).toString().split('').map( x => parseInt(x));
};
const res = plusOne([1,2,3]);
console.log(res);
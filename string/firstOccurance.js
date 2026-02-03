//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
var strStr = function (haystack, needle) {
    let hLen = haystack.length;
    let nLen2 = needle.length;
    for (let i = 0; i < hLen; i++) {

        if (haystack[i] === needle[0]) {
            let found = true;
            for (let j = 0; j < nLen2/ 2; j++) {
                if (haystack[i + j] !== needle[j] || haystack[i + nLen2 -1 - j] !== needle[nLen2-1 -j]) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i
            }
        }
    }
    return -1
};

const res = strStr("sadbutsad", "sad");
console.log(res);
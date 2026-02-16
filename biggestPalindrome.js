// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */

function isPalindrome(str) {
    for (let i = 0; i < str.length; ++i) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
var longestPalindrome = function (s) {
    let left = 0;
    let longest = s[0] || "";
    while (left < s.length - 1) {
        let right = s.length - 1;
        while (right > left) {
            let sub = s.substring(left, right + 1);
            if (isPalindrome(sub)) {
                if (sub.length > longest.length) {
                    longest = sub;
                }
                break;
            }
            --right;
        }
        ++left;
    }
    return longest;
};

// console.log(isPalindrome(""))
// console.log(isPalindrome("a"))
// console.log(isPalindrome("ab"))
// console.log(isPalindrome("aba"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("abcba"))
// console.log(isPalindrome("abc"))

// console.log(longestPalindrome("babad"))
console.log(longestPalindrome("abbcccba"))
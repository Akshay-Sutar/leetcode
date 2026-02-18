//https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function getCols(s, numRows) {
    let col = 1;
    if (s.length <= numRows) {
        return col;
    }

}
var convert = function (s, numRows) {
    let cols = getCols(s, numRows);
    let arr = Array.from({ length: numRows }, () =>
        Array(cols).fill(0)
    );
    let col = 0;
    let row = 0;
    for (let i = 0; i < s.length; ++i) {
        let char = s[i];
        if (row < numRows) {
            arr[col][row] = char;
            ++row;
        } else {
            row = row - 2;
            while (row > 1) {
                arr[++col][row--] = char;
            }
            row = 0;
            ++col
        }
    }
    return arr;
};

console.log(convert("PAYPALISHIRING", 4));
/*
P       h
a     s i
y   i   r
p l     i  g
a       n
*/
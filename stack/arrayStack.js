//https://leetcode.com/problems/build-an-array-with-stack-operations/?envType=problem-list-v2&envId=dsa-linear-shoal-stack
var buildArray = function(target, n) {
    let stack = [];
    let index = 0;
    for (let i=1; i<= n; ++i) {
        if (i === target[index]) {
            stack.push("Push")
            ++index;
        } else {
            stack.push("Push");
            stack.push("Pop")
        }
        if (index === target.length) {
            break;
        }
    }
    return stack;
};

buildArray([1,3],3)
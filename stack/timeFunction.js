//https://leetcode.com/problems/exclusive-time-of-functions/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack
var exclusiveTime = function (n, logs) {
    const stack = [];
    const res = new Array(n).fill(0);
    logs.forEach(log => {
        const [id, action, idx] = log.split(":");
        // if start, push to stack for that number
        if (action === 'start') {
            if (!stack[id]) stack[id] = [];
            stack.push({ action, idx })
        } else {
            const lastItem = stack.pop();

        }
    })

    return res;
};
exclusiveTime(2, ["0:start:0", "0:start:2", "0:end:5", "1:start:6", "1:end:6", "0:end:7"])

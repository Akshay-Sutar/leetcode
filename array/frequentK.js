//https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
    let freq = {}
    for (let i = 0; i < nums.length; ++i) {
        if (!freq[nums[i]]) {
            freq[nums[i]] = 0;
        }
        freq[nums[i]]++;
    }
    console.log(freq)

    let map = [];
    Object.keys(freq).forEach(key => {
        map.push({ value: parseInt(key), count: freq[key] })
    })
    return map.sort((a, b) => b.count - a.count).slice(0, k).map(item => item.value);
};

let res = topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2);
console.log(res)
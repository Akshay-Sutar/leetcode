//https://leetcode.com/problems/encode-and-decode-strings?q=Encode+and+Decode+Strings
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        if (strs.length === 0) {
            return JSON.stringify({
                length: 0,
                data: ''
            })
        }

        for (let i = 0; i < strs.length - 1; ++i) {
            encoded += strs[i].replaceAll(/\|{1}/g, '||') + '|';
        }
        encoded += strs[strs.length - 1].replaceAll(/\|{1}/g, '||')
        return JSON.stringify({
            length: strs.length,
            data: encoded
        });
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const { length, data } = JSON.parse(str);
        if (length === 0) {
            return [];
        }
        return data.split(/(?<!\|)\|(?!\|)/).map(item => item.replaceAll(/\|{2}/g, '|'))
    }
}

let encoded = new Solution().encode([]);
console.log(encoded)
let decoded = new Solution().decode(encoded);
console.log(decoded)
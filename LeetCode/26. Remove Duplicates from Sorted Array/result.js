/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let l = 1
    let r = 1
    while (r < nums.length) {
        if (nums[r] !== nums[r - 1]) {
            nums[l] = nums[r]
            l += 1
        }
        r += 1
    }
    return l
};
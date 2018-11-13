/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var hashMap = {};
    for(var i = 0; i < nums.length; i++) {
        if(hashMap[nums[i]]) {
            hashMap[nums[i]]++;
        } else {
            hashMap[nums[i]] = 1;
        }
    }
    return Object.keys(hashMap).filter(x => hashMap[x] == 1);
};
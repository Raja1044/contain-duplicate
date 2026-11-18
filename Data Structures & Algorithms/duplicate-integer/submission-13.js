class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a,b)=>a-b)
            for(let j=1;j<nums.length;j++){
                if(nums[j]===nums[j-1]){
                    return true
                }
            }
            return false
    }
}
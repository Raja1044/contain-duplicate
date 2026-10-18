class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let res=0;
            for(let j=0;j<nums.length;j++){
                if(nums[i]===nums[j]){
                    res=res+1;
                }
            }
            if(res > 1){
                return true
            }
        }
        return false;
    }
}
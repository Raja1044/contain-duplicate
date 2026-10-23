class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sm=s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let res=sm.split("").reverse().join("")
        if(res===sm){
            return true
        }
        else{
            return false
        }
    }
}

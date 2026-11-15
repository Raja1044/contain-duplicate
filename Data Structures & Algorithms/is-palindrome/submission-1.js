class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let dol =s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let bol=dol.split("").reverse().join("")
        if(bol===dol){
            return true
        }else{
            return false
        }
    }
}

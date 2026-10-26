class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let p1=0;
        let p2=0;
        while(p1<word.length && p2<abbr.length){
            let total=0;
            if(abbr[p2]==="0"){
            return false
            }
            if(!isNaN(abbr[p2])){
                while(p2<abbr.length && !isNaN(abbr[p2])){
                total=total*10+Number(abbr[p2])
                p2++;
                }
                p1=p1+total;
            }else{
                if(abbr[p2]!==word[p1]){
                    return false
                }else{
                    p1=p1+1;
                    p2=p2+1;
                }
            }
        }
        return p1===word.length && p2===abbr.length
    }
}
    
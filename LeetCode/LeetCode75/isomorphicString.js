/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let char = {}
    for (let i = 0; i< s.length; i++){
        if(char[s[i]]) {
            if(char[s[i]] !== t[i]) return false
        }
        else {
            if(Object.values(char).includes(t[i])) return false
            else char[s[i]]= t[i]
        } 
    }
    return true
};
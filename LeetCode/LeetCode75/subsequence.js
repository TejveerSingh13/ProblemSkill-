/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false
    if((s.length === t.length) && (s!==t)) return false
    const arr = s.split("");
    let temp = -1
    count = 0

    arr.map((e, i)=>{
        // let index = t.indexOf(e, temp > -1 ? temp : 0);
        let index = t.indexOf(e, temp + 1);
        if(index !== -1) {
            if(index < temp) return false
            temp = index
            count++
        }
    })
    if(count !== arr.length) return false
    return true
};
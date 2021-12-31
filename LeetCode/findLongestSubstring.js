const findLongestSubstring = (str) => {
    let max = 0
    let index = 0
    let obj = {}
    let flag = 0
    while(index < str.length){
        const data = str[index]
        if(obj[data]) {
            if (((index)-flag) > max) {
                max = index - flag
                
            }
            obj[str[flag]] = 0
            flag ++
        }

        else {obj[data] = 1
        index++}
    } 
    if(index - flag > max) return index- flag 
    return max
}

console.log(findLongestSubstring('tejveer'))
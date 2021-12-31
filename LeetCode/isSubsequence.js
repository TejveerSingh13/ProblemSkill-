const isSubsequence = (str1, str2) => {
    const obj2={}
    for (const key of str2){
        obj2[key] = (obj2[key] || 0) + 1
    }
    for (const key of str1){
        if (!obj2[key]) return false
        obj2[key] -= 1
    }
    return true
}
console.log(isSubsequence('hello', 'hello world'))
const CheckAnagram = (str1, str2) => {

    if (str1.length !== str2.length) return false
    if ((str1 && str2) === '') return true
    const obj1={}
    const obj2={}

    for (const key of str1){
        obj1[key] = (obj1[key] || 0) + 1
    }
    for (const key of str2){
        obj2[key] = (obj2[key] || 0) + 1
    }
    console.log('here',obj1,obj2)
    for (const key in obj1) {
        if (!obj2[key]) return false
        if (obj1[key] !== obj2[key]) return false
    }
    return true
}
console.log(CheckAnagram('tejveer','reevjet'))